import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
  useAddBookMutation,
} from 'redux/RTKQuery/booksApi';
import { Form, message, Modal } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import * as yup from 'yup';

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
  const [isDisabledReadTimes, setIsDisabledReadTimes] = useState(true);
  const [isDisabledButton, setIsDisabledButton] = useState();

  const isFirst = useRef(true);
  const navigate = useNavigate();
  const { search } = useLocation();
  const [form] = Form.useForm();
  const { confirm } = Modal;
  const date = new Date();
  const year = date.getFullYear();
  const isChange = action === 'change';
  const localStorageItem = 'BookModal';
  const [addBook, { isLoading }] = useAddBookMutation();
  const {
    data,
    isLoading: isGetBookLoading,
    isError,
    isSuccess,
  } = useGetBookByIdQuery(bookId, {
    skip: !bookId,
  });
  const [updateBook] = useUpdateBookMutation();
  const [initialImage, setInitialImage] = useState(data?.book?.image?.url);

  const showConfirmRestoration = useCallback(() => {
    return confirm({
      title: 'Ви хочете відновити останні зміни?',
      icon: <QuestionOutlined />,
      okText: 'Так',
      cancelText: 'Ні',
      onOk() {
        const storage = JSON.parse(localStorage.getItem(localStorageItem));
        for (const [key, value] of Object.entries(storage)) {
          if (key === 'bookId') {
            continue;
          }
          if (key === 'image') {
            setInitialImage(value);
            continue;
          }
          form.setFieldValue(Fields[key].name, value);
          setIsDisabledButton(false);
        }
      },
      onCancel() {
        setIsDisabledButton(true);
        localStorage.removeItem(localStorageItem);
      },
    });
  }, [confirm, form]);

  useEffect(() => {
    if (
      isFirst.current &&
      !!localStorage.getItem(localStorageItem) &&
      Object.keys(JSON.parse(localStorage.getItem(localStorageItem))).length !==
        0 &&
      (JSON.parse(localStorage.getItem(localStorageItem)).bookId === bookId ||
        !isChange)
    ) {
      showConfirmRestoration();
      isFirst.current = false;
    } else {
      setIsDisabledButton(false);
    }
  }, [bookId, showConfirmRestoration, isChange]);

  useEffect(() => {
    if (isAddCompleted) {
      setTimeout(() => {
        setIsAddCompleted(false);
      }, 500);
    }
  }, [isAddCompleted]);

  useEffect(() => {
    setIsDisabledButton(isChange);
  }, [isChange]);

  useEffect(() => {
    if (data?.book) {
      for (const [key, value] of Object.entries(data.book)) {
        if (key === 'image') {
          form.setFieldValue(key, value.url);
          setSelectedFile({ url: value.url });
          setInitialImage(value.url);
        } else {
          if (key === 'readTimes' && value > 0) {
            setIsDisabledReadTimes(false);
          }
          form.setFieldValue(key, value);
        }
      }
    }
  }, [data, form]);

  const imageActionIsChange = useCallback(() => {
    if (selectedFile?.url !== data?.book?.image?.url) {
      const storageChangeBook = localStorage.getItem(localStorageItem);
      if (!!storageChangeBook) {
        localStorage.setItem(
          localStorageItem,
          JSON.stringify({
            ...JSON.parse(storageChangeBook),
            image: selectedFile?.url,
          })
        );
      } else {
        localStorage.setItem(
          localStorageItem,
          JSON.stringify({
            bookId,
            image: selectedFile?.url,
          })
        );
      }
      setIsDisabledButton(false);
    }
  }, [selectedFile?.url, data?.book?.image?.url, bookId]);

  const imageActionIsAdd = useCallback(() => {
    const storageChangeBook = localStorage.getItem(localStorageItem);
    if (!!storageChangeBook) {
      localStorage.setItem(
        localStorageItem,
        JSON.stringify({
          ...JSON.parse(storageChangeBook),
          image: selectedFile?.url,
        })
      );
    } else {
      localStorage.setItem(
        localStorageItem,
        JSON.stringify({
          image: selectedFile?.url,
        })
      );
    }
  }, [selectedFile?.url]);

  useEffect(() => {
    if (!!selectedFile?.url) {
      if (isChange) {
        imageActionIsChange();
      } else {
        imageActionIsAdd();
      }
    }
  }, [selectedFile, isChange, imageActionIsChange, imageActionIsAdd]);

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
      .positive('Поле може містити тільки додатні числа')
      .required("Обов'язкове поле"),
    pages: yup
      .number()
      .typeError('Поле може містити тільки числа')
      .required("Обов'язкове поле")
      .max(9999, 'Кількість сторінок може бути меншою або рівною 9999')
      .positive('Поле може містити тільки додатні числа'),
    image: yup.mixed(),
    status: yup.string().oneOf(['plan', 'already', 'now']),
    readTimes: yup
      .number()
      .min(0, 'Число не може менше 0')
      .typeError('Поле може містити тільки числа'),
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

  const onStatusChange = ({ target }) => {
    if (target.value === 'plan') {
      form.setFieldValue('readTimes', 0);
      setIsDisabledReadTimes(true);
    } else {
      form.setFieldValue('readTimes', 1);
      setIsDisabledReadTimes(false);
    }
  };

  const onValuesChange = (changedValues, allValues) => {
    if (isChange) {
      let change = [];
      for (const [key, value] of Object.entries(allValues)) {
        change.push(value !== data.book[key]);
      }
      if (change.includes(true)) {
        setIsDisabledButton(false);
        localStorage.setItem(
          localStorageItem,
          JSON.stringify({ ...allValues, image: selectedFile.url, bookId })
        );
      } else {
        setIsDisabledButton(true);
        localStorage.removeItem(localStorageItem);
      }
    } else {
      setIsDisabledButton(false);
      localStorage.setItem(
        localStorageItem,
        JSON.stringify({ ...allValues, image: selectedFile?.url, bookId })
      );
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
      localStorage.removeItem(localStorageItem);
    }
  };

  const onChange = useCallback(
    async values => {
      const data = {
        ...values,
        image: !!selectedFile ? selectedFile.url : '',
      };

      const result = await updateBook({ id: bookId, data });
      if ('error' in result) {
        message.error(result.error.data.message);
      } else {
        message.success('Книгу успішно оновлено!');

        navigate({ pathname: `/library/${params.id}`, search });
        localStorage.removeItem(localStorageItem);
      }
    },
    [bookId, navigate, params.id, search, selectedFile, updateBook]
  );
  const showConfirmUpdate = useCallback(
    values => {
      return confirm({
        title: 'Ви хочете оновити дані?',
        icon: <QuestionOutlined />,
        okText: 'Так',
        cancelText: 'Ні',
        onOk() {
          onChange(values);
        },
        onCancel() {},
      });
    },
    [confirm, onChange]
  );

  return {
    form,
    onAdd,
    Fields,
    yupSync,
    isLoading,
    setSelectedFile,
    isAddCompleted,
    onStatusChange,
    isDisabledReadTimes,
    isChange,
    data,
    isDisabledButton,
    onValuesChange,
    initialImage,
    showConfirmUpdate,
  };
};

export default useForm;
