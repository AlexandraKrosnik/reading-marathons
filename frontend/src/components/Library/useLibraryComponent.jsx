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
  const [isNoBooks, setIsNoBooks] = useState(true);
  const [defaultTabKey, setDefaultTabKey] = useState();
  const { data, error, isLoading } = useGetBooksQuery();
  const tab = searchParams.get('tab');
  const [searchField, setSearchField] = useState("");
  const [searchCriterion, setSearchCriterion] = useState("title");

  const params = useMemo(() => {
    return ['plan', 'now', 'already'];
  }, []);

  useEffect(() => {
    if (data) {
      let plan = [];
      let already = [];
      let now = [];

      const filteredBooks = data.books.filter( book => {
        if (searchCriterion === 'title') book.title.toLowerCase().includes(searchField.toLowerCase());

        return  book.collections.find(item => item.name.toLowerCase().includes(searchField.toLowerCase()));
      })

      filteredBooks.forEach(item => {
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
      setIsNoBooks(!!plan.length || !!already.length || !!now.length || !!searchField);
    }
  }, [data, searchField, searchCriterion]);

  useEffect(() => {
    if (!tab) {
      searchParams.set('tab', params[0]);
      setSearchParams(searchParams);
    }
  }, [tab, params, setSearchParams, searchParams]);

  useEffect(() => {
    setDefaultTabKey(tab);
  }, [tab]);

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  const handleSelectSearchOption = (value) => {
    setSearchCriterion(value);
  }

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
  }, [alreadyBooks, planBooks, params, nowBooks]);

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
    isNoBooks,
    isLoading,
    error,
    items,
    defaultTabKey,
    onTabChange,
    search,
    handleSearchChange,
    searchField,
    handleSelectSearchOption
  };
};

export default useLibraryComponent;
