import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';
import { getIsLoggedIn, getIsPendingState } from 'redux/auth';
import { booksApi } from 'redux/RTKQuery/booksApi';
const useSignupForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isPending = useSelector(getIsPendingState);

  const handleSubmit = (values, actions) => {
    dispatch(
      booksApi.util.invalidateTags([
        { type: 'Books' },
        { type: 'BookById' },
        { type: 'Trainings' },
        { type: 'Statistics' },
      ])
    );
    dispatch(authOperations.register(values));

    isLoggedIn && actions.resetForm();
  };
  const validationSchema = yup.object().shape({
    name: yup
      .string('Enter your name')
      .matches(/^[a-zA-Z0-9]/, 'Name must starts with letter or number')
      .min(3, 'Name must contain at least 3 characters')
      .max(100, 'Name must contain no more than 100 characters')
      .required('Name is a required field'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .min(10, 'Email must contain at least 10 characters')
      .max(63, 'Email must contain no more than 63 characters')
      .matches(/^[a-zA-Z0-9]/, 'Name must start with letter or number')
      .matches(
        /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{2,})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'The Email field can only contain Latin letters, numbers and signs, and at least 2 charachters before "@"'
      )
      .required('Email is a required field'),
    password: yup
      .string('Enter your password')
      .matches(/^[a-zA-Z0-9]/, 'Password must start with letter or number')
      .matches(
        /^([a-zA-Z0-9@.!#$%&’*+/=?^_`{|}~-])*$/,
        'Password must not contain spaces'
      )
      .min(5, 'Password is too short - should be 5 chars minimum')
      .max(30, 'Password must contain no more than 30 characters')
      .required('Password is a required field'),
    repeatPassword: yup
      .string('Confirm your password')
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Password confirmation is a required field'), //можна додати npm yup-password
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  return {
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
  };
};

export default useSignupForm;
