import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import {
  useGetBookByIdQuery,
  useDeleteBookMutation,
} from 'redux/RTKQuery/booksApi';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useMatchMedia } from 'hooks';
import { useCallback } from 'react';

const useBookDrawer = () => {
  const [bookId, setBookId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useMatchMedia();
  const { confirm } = Modal;
  const tabSearch = location.search;
  const [deleteBook, { isLoading: isDeleteLoading }] = useDeleteBookMutation();
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
  }, [params]);

  const onCloseDrawer = useCallback(() => {
    setTimeout(() => {
      navigate({ pathname: `/library`, search: tabSearch });
    }, 220);
    setIsOpen(false);
  }, [navigate, tabSearch]);
  const showPromiseConfirm = () => {
    confirm({
      title: `Ви бажаєте видалити книгу "${data.book.title}"? `,
      content: 'Вона також буде видалена з усіх тренувань.',
      icon: <ExclamationCircleFilled />,
      okText: 'Видалити',
      cancelText: 'Відмінити',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(deleteBook(bookId) ? resolve : reject, 1000);
        })
          .then(() => {
            setTimeout(() => {
              navigate({ pathname: `/library`, search: tabSearch });
            }, 150);
            setIsOpen(false);
          })
          .catch(() => console.log('Сталась помилка!!!'));
      },
      onCancel() {},
    });
  };
  const onShowChangeModal = useCallback(() => {
    const changePathname = `/library/${params.id}/change`;
    setTimeout(() => {
      navigate({ pathname: changePathname, search: tabSearch });
    }, 220);
    setIsOpen(false);
  }, [navigate, tabSearch, params]);
  return {
    data,
    isLoading,
    isMobile,
    showPromiseConfirm,
    isOpen,
    onCloseDrawer,
    isDeleteLoading,
    onShowChangeModal,
  };
};
export default useBookDrawer;
