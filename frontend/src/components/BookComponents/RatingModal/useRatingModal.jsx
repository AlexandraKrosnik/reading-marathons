import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Form, message } from 'antd';
import { useEffect, useState } from 'react';
import {
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
} from 'redux/RTKQuery/booksApi';

const useRatingModal = () => {
  const [rating, setRating] = useState(null);
  const [resume, setResume] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [bookId, setBookId] = useState();
  const { search } = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetBookByIdQuery(bookId, {
    skip: !bookId,
  });

  const [updateBookReview] = useUpdateBookReviewMutation();

  const [form] = Form.useForm();

  useEffect(() => {
    const book = params.id;
    if (book) {
      setBookId(book);
    }
  }, [params]);

  const onCloseModal = () => {
    setTimeout(() => {
      navigate({ pathname: `/library`, search });
    }, 100);
    setIsModalOpen(false);
  };

  const onFinish = async values => {
    const result = await updateBookReview({
      id: bookId,
      data: { ...values, rating: rating },
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
    setRating(data?.book?.rating);
    setResume(data?.book?.resume);
  }, [data]);

  useEffect(() => {
    setIsDisabled(!!resume && !!rating);
  }, [rating, resume]);

  return {
    isLoading,
    error,
    form,
    onFinish,
    rating,
    setRating,
    resume,
    setResume,
    isDisabled,
    onCloseModal,
    isModalOpen,
  };
};

export default useRatingModal;
