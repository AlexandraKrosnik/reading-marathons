import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
} from 'redux/RTKQuery/booksApi';
import { useFirstMountState } from 'react-use';
import { useSearchParams } from 'react-router-dom';
import { useMatchMedia } from 'hooks';

const useBookDrawer = open => {
  const isFirstMount = useFirstMountState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [bookId, setBookId] = useState();
  const { isMobile } = useMatchMedia();

  const { data, isLoading, error } = useGetBookByIdQuery(bookId, {
    skip: !bookId,
  });

  useEffect(() => {
    const book = searchParams.get('book');
    if (book) {
      setBookId(book);
    }
  }, [searchParams]);

  return { data, isLoading, isMobile };
};
export default useBookDrawer;
