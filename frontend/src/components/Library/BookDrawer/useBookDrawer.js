import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
  useDeleteBookMutation,
} from 'redux/RTKQuery/booksApi';
import { useFirstMountState } from 'react-use';
import {
  useSearchParams,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useMatchMedia } from 'hooks';

const useBookDrawer = open => {
  const isFirstMount = useFirstMountState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [bookId, setBookId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMatchMedia();
  const [deleteBook] = useDeleteBookMutation();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const tabSearch = location.search;

  const { data, isLoading, isError, isSuccess } = useGetBookByIdQuery(bookId, {
    skip: !bookId,
  });
  useEffect(() => {
    if (isError) {
      navigate({ pathname: `/library`, search: tabSearch });
    }
    if (isSuccess) {
      setIsOpen(true);
    }
  }, [isError, isSuccess, navigate, tabSearch]);
  useEffect(() => {
    const book = params.id;
    if (book) {
      setBookId(book);
    }
  }, [searchParams, params]);

  const onCloseDrawer = () => {
    navigate({ pathname: `/library`, search: tabSearch });
  };
  const deleteBookById = () => {
    deleteBook(bookId);
    navigate({ pathname: `/library`, search: tabSearch });
  };
  return { data, isLoading, isMobile, deleteBookById, isOpen, onCloseDrawer };
};
export default useBookDrawer;
