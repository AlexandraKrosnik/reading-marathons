import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Form, message, Modal } from 'antd';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { QuestionOutlined } from '@ant-design/icons';
import {
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
} from 'redux/RTKQuery/booksApi';

const Fields = {
  rating: {
    name: 'rating',
    label: 'Обрати рейтинг книги',
  },
  resume: {
    name: 'resume',
    label: 'Резюме',
  },
};

const useRatingModal = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [bookId, setBookId] = useState();

  const { search } = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const { confirm } = Modal;
  const isFirst = useRef(true);
  const localStorageItem = 'ratingModal';

  const { data, isLoading, error } = useGetBookByIdQuery(bookId, {
    skip: !bookId,
  });

  const [updateBookReview] = useUpdateBookReviewMutation();

  const [form] = Form.useForm();

  const initialValues = useMemo(() => {
    if (data?.book) {
      return {
        rating: data?.book?.rating,
        resume: data?.book?.resume,
      };
    }
  }, [data]);

  useEffect(() => {
    const book = params.id;
    if (book) {
      setBookId(book);
    }
  }, [params]);

  const showConfirm = useCallback(() => {
    return confirm({
      title: 'Ви хочете відновити останні зміни?',
      icon: <QuestionOutlined />,
      okText: 'Так',
      cancelText: 'Ні',
      onOk() {
        const storage = JSON.parse(localStorage.getItem(localStorageItem));
        if (storage.bookId === bookId) {
          storage.resume &&
            form.setFieldValue(Fields.resume.name, storage.resume);
          storage.rating &&
            form.setFieldValue(Fields.rating.name, storage.rating);
        }
      },
      onCancel() {
        setIsDisabled(false);
        localStorage.removeItem(localStorageItem);
      },
    });
  }, [confirm, bookId, form]);

  useEffect(() => {
    if (
      isFirst.current &&
      !!localStorage.getItem(localStorageItem) &&
      JSON.parse(localStorage.getItem(localStorageItem)).bookId === bookId
    ) {
      showConfirm();
      isFirst.current = false;
    } else {
      setIsDisabled(false);
    }
  }, [showConfirm, bookId]);

  const onCloseModal = () => {
    setTimeout(() => {
      navigate({ pathname: `/library`, search });
    }, 100);
    setIsModalOpen(false);
    localStorage.removeItem(localStorageItem);
  };

  const onValuesChange = (_, allValues) => {
    if (
      initialValues.rating === form.getFieldValue(Fields.rating.name) &&
      initialValues.resume === form.getFieldValue(Fields.resume.name)
    ) {
      setIsDisabled(false);
      localStorage.removeItem(localStorageItem);
    } else if (
      !initialValues.rating &&
      !form.getFieldValue(Fields.rating.name) &&
      !initialValues.resume &&
      !form.getFieldValue(Fields.resume.name)
    ) {
      setIsDisabled(false);
      localStorage.removeItem(localStorageItem);
    } else {
      setIsDisabled(true);
      localStorage.setItem(
        localStorageItem,
        JSON.stringify({ ...allValues, bookId })
      );
    }
  };
  const onFinish = async values => {
    const result = await updateBookReview({
      id: bookId,
      data: { ...values },
    });

    if ('error' in result) {
      message.error(result.error.data.message);
    } else {
      message.success('Резюме успішно оновлено!');
      form.resetFields();
    }

    onCloseModal();
  };

  useEffect(() => {
    if (data?.book) {
      form.setFieldValue(Fields.rating.name, data.book.rating);
      form.setFieldValue(Fields.resume.name, data.book.resume);
    }
  }, [data, form]);

  return {
    isLoading,
    error,
    form,
    onFinish,
    isDisabled,
    onCloseModal,
    isModalOpen,
    onValuesChange,
    Fields,
  };
};

export default useRatingModal;
