import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useBookItem = () => {
  const [bookId, setBookId] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const tabSearch = location.search;

  const showDrawer = useCallback(
    _id => {
      setBookId(_id);
      navigate({ pathname: `/library/${_id}`, search: tabSearch });
    },
    [navigate, tabSearch]
  );

  return { showDrawer, setBookId, bookId };
};
export default useBookItem;
