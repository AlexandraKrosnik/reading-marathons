import { Form, message } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAddBookMutation } from 'redux/RTKQuery/booksApi';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from 'redux/RTKQuery/booksApi';

const Fields = {
  image: {
    name: 'image',
  },
  title: {
    name: 'title',
    label: 'Назва книги',
  },
  author: {
    name: 'author',
    label: 'Автор книги',
  },
  publication: {
    name: 'publication',
    label: 'Рік випуску',
  },
  pages: {
    name: 'pages',
    label: 'Кількість сторінок',
  },
  status: {
    name: 'status',
    label: 'Статус книги',
  },
  readTimes: {
    name: 'readTimes',
    label: 'Кількість прочитаних разів',
  },
};

const useForm = action => {
  const params = useParams();
  const [bookId, setBookId] = useState(params.id);
  const [selectedFile, setSelectedFile] = useState();
  const [isAddCompleted, setIsAddCompleted] = useState(false);
  const [disabledReadTimes, setDisabledReadTimes] = useState(true);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const date = new Date();
  const year = date.getFullYear();
  const isChange = action === 'change';
  const [addBook, { isLoading }] = useAddBookMutation();
  const {
    data,
    isLoading: isGetBookLoading,
    isError,
    isSuccess,
  } = useGetBookByIdQuery(bookId, {
    skip: !bookId,
  });

  useEffect(() => {
    if (isAddCompleted) {
      setTimeout(() => {
        setIsAddCompleted(false);
      }, 500);
    }
  }, [isAddCompleted]);
  useEffect(() => {
    if (data?.book) {
      for (const [key, value] of Object.entries(data.book)) {
        if (key === 'image') {
          form.setFieldValue(key, value.url);
          setSelectedFile({ url: value.url });
        } else {
          if (key === 'readTimes' && value > 0) {
            setDisabledReadTimes(false);
          }
          form.setFieldValue(key, value);
        }
      }
    }
  }, [data, form]);

  let schema = yup.object().shape({
    title: yup
      .string()
      .required("Обов'язкове поле")
      .max(50, 'Поле не може містити більше 50-ти символів'),
    author: yup.string().required("Обов'язкове поле"),
    publication: yup
      .number()
      .typeError('Поле може містити тільки числа')
      .max(year, `Рік публікації не може бути більшим ${year}`)
      .positive('Поле може містити тільки додатні числа'),
    pages: yup
      .number()
      .typeError('Поле може містити тільки числа')
      .required("Обов'язкове поле")
      .max(9999, 'Кількість сторінок може бути меншою або рівною 9999')
      .positive('Поле може містити тільки додатні числа'),
    image: yup.mixed(),
    status: yup.string().oneOf(['plan', 'already']),
    readTimes: yup
      .number()
      .min(1, 'Число не може менше 1')
      .typeError('Поле може містити тільки числа')
      .positive('Поле може містити тільки додатні числа'),
  });

  const yupSync = {
    async validator({ field }, value) {
      if (value?.[0] === '-') {
        return Promise.reject('Поле не може починатись з дефісу');
      }

      if (value?.[0] === ' ') {
        return Promise.reject('Поле не може починатись з пробілу');
      }

      return await schema.validateSyncAt(field, { [field]: value });
    },
  };
  const onChangeStatus = ({ target }) => {
    if (target.value === 'plan') {
      form.setFieldValue('readTimes', 0);
      setDisabledReadTimes(true);
    } else {
      form.setFieldValue('readTimes', 1);
      setDisabledReadTimes(false);
    }
  };

  const onAdd = async values => {
    const data = {
      ...values,
      image: !!selectedFile ? selectedFile.url : '',
    };

    const result = await addBook(data);

    if ('error' in result) {
      message.error(result.error.data.message);
    } else {
      message.success('Книгу успішно додано!');
      setIsAddCompleted(true);
      form.resetFields();

      navigate('/library');
    }
  };

  return {
    form,
    onAdd,
    Fields,
    yupSync,
    isLoading,
    setSelectedFile,
    isAddCompleted,
    onChangeStatus,
    disabledReadTimes,
    isChange,
    data,
  };
};

export default useForm;
