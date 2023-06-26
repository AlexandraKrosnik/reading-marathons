import { useMatchMedia } from 'hooks';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBooksQuery } from 'redux/RTKQuery/booksApi';
import BookList from './BookList/BookList';
import { useSearchParams, useLocation } from 'react-router-dom';
import EmtpyLibraryText from 'components/modals/EmtpyLibraryText/EmptyLibraryText';

const useLibraryComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const { search } = useLocation();
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
    }
  }, [data]);

  useEffect(() => {
    if (!tab) {
      searchParams.set('tab', params[0]);
      setSearchParams(searchParams);
    }
  }, [tab, params, setSearchParams, searchParams]);

  useEffect(() => {
    setDefaultTabKey(tab);
  }, [tab]);

  const items = useMemo(() => {
    return [
      {
        label: 'Маю намір прочитати',
        key: params[0],
        children:
          planBooks.length === 0 ? (
            <EmtpyLibraryText />
          ) : (
            <BookList data={planBooks} />
          ),
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
    searchParams.set('tab', key);
    setSearchParams(searchParams);
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
    search,
  };
};

export default useLibraryComponent;
