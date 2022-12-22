import { useMatchMedia } from 'hooks';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBooksQuery } from 'redux/RTKQuery/booksApi';
import BookList from './BookList/BookList';
import { useSearchParams } from 'react-router-dom';

const useLibraryComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const [planBooks, setPlanBooks] = useState([]);
  const [alreadyBooks, setAlreadyBooks] = useState([]);
  const [nowBooks, setNowBooks] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [defaultTabKey, setDefaultTabKey] = useState();
  const { data, error, isLoading } = useGetBooksQuery();

  const tab = searchParams.get('tab');
  const params = useMemo(() => {
    return ['plan', 'now', 'already'];
  }, []);

  useEffect(() => {
    if (data) {
      let plan = [];
      let already = [];
      let now = [];

      data.books.forEach(item => {
        if (item.status === 'plan') {
          plan.push(item);
        }
        if (item.status === 'already') {
          already.push(item);
        }
        if (item.status === 'now') {
          now.push(item);
        }
      });
      setPlanBooks(plan);
      setAlreadyBooks(already);
      setNowBooks(now);
      setIsEmpty(!!plan.length || !!already.length || !!now.length);

      if (params.includes(tab)) {
        setDefaultTabKey(tab);
      } else {
        setDefaultTabKey(params[0]);
      }
    }
  }, [data, tab, setSearchParams, params]);

  useEffect(() => {
    if (defaultTabKey) {
      searchParams.set('tab', defaultTabKey);
      setSearchParams(searchParams);
    }
  }, [defaultTabKey, setSearchParams, searchParams]);

  const items = useMemo(() => {
    return [
      {
        label: 'Маю намір прочитати',
        key: params[0],
        children: <BookList data={planBooks} />,
      },

      {
        label: 'Читаю',
        key: params[1],
        children: <BookList data={nowBooks} />,
        disabled: nowBooks.length === 0,
      },
      {
        label: 'Прочитано',
        key: params[2],
        children: <BookList data={alreadyBooks} />,
        disabled: alreadyBooks.length === 0,
      },
    ];
  }, [alreadyBooks, nowBooks, planBooks, params]);

  const onTabChange = key => {
    setDefaultTabKey(key);
  };

  return {
    isMobile,
    alreadyBooks,
    nowBooks,
    planBooks,
    navigate,
    isEmpty,
    isLoading,
    error,
    items,
    defaultTabKey,
    onTabChange,
  };
};

export default useLibraryComponent;
