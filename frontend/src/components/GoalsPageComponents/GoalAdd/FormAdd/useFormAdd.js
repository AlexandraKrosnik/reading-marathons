import { Form } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { StyledOption } from './FormAdd.styled';

import { useCallback } from 'react';
import { useEffect } from 'react';

const useFormAdd = (selectedBooks, startTime, books) => {
  const [booksList, setBooksList] = useState();
  const [form] = Form.useForm();
  useEffect(() => {
    if (books.length !== 0) {
      setBooksList(books);
    }
  }, [books]);

  const disabledStartDate = current => {
    return current < moment().startOf('hour');
  };
  const disabledFinishDate = current => {
    return current < moment(startTime).add(1, 'day');
  };

  const handleSubmit = ({ books }) => {
    selectedBooks(books);
    form.setFieldValue('books', []);
  };

  const validateMessages = {
    required: `Виберіть книгу`,
  };

  const selectContent = useCallback(() => {
    return (
      booksList &&
      booksList.map(({ _id, title }) => (
        <StyledOption key={_id} value={_id} title={title}>
          {title}
        </StyledOption>
      ))
    );
  }, [booksList]);

  const onSearchBook = (input, option) =>
    (option?.title ?? '').toLowerCase().includes(input.toLowerCase());

  return {
    Form,
    form,
    handleSubmit,
    validateMessages,
    disabledStartDate,
    disabledFinishDate,
    selectContent,
    onSearchBook,
  };
};

export default useFormAdd;
