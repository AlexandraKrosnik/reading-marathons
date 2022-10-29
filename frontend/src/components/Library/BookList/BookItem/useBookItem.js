import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const useBookItem = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [bookId, setBookId] = useState();

  const showDrawer = useCallback(
    _id => {
      setBookId(_id);
      searchParams.set('book', _id);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );
  const onCloseDrawer = () => {
    searchParams.delete('book');
    setSearchParams(searchParams);
  };
  useEffect(() => {
    if (searchParams.get('book')) {
      setOpenDrawer(true);
    } else {
      setOpenDrawer(false);
    }
  }, [setOpenDrawer, searchParams]);

  return { openDrawer, showDrawer, onCloseDrawer, setBookId, bookId };
};
export default useBookItem;
