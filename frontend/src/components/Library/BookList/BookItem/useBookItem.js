import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useBookItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabSearch = location.search;

  const showDrawer = useCallback(
    _id => {
      navigate({ pathname: `/library/${_id}`, search: tabSearch });
    },
    [navigate, tabSearch]
  );

  const showRatingModal = useCallback(
    _id => {
      const changedPathname = `/library/${_id}/rating`;
      navigate({ pathname: changedPathname, search: tabSearch });
    },
    [navigate, tabSearch]
  );

  return { showDrawer, showRatingModal };
};
export default useBookItem;
