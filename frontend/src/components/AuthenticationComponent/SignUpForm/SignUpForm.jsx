import { Formik } from 'formik';

import { FcGoogle } from 'react-icons/fc';

import PulseLoader from 'react-spinners/PulseLoader';
import useSignUpForm from './useSignUpForm';

import {
  FormWrapper,
  StyledForm,
  FieldWrapper,
  FieldName,
  AccentedMark,
  StyledField,
  ValidationError,
  GoogleButton,
  SubmitButton,
  StyledLink,
  IsRegistredParagraph,
  LinkWrapper,
  FormBottomStyled,
  FormBottomImage,
} from '../AuthenticationComponent.styled';

const SignupForm = () => {
  const { initialValues, validationSchema, handleSubmit, isPending } =
    useSignUpForm();
  return (
    <>
      <FormWrapper>
        {/* <Overlay /> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, touched }) => {
            return (
              <StyledForm name="SignupForm">
                <GoogleButton href="https://reading-marathons-backend.onrender.com/api/auth/google">
                  <FcGoogle />
                  Реєстрація за допомогою Google
                </GoogleButton>

                <FieldWrapper>
                  <FieldName htmlFor="name">
                    Ім'я <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="..."
                    autoComplete="off"
                  />
                  <ValidationError name="name" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="email">
                    Електронна адреса <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="off"
                  />
                  <ValidationError name="email" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="password">
                    Пароль <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="password"
                    name="password"
                    type="password"
                    maxLength="30"
                    placeholder="..."
                    autoComplete="off"
                  />

                  <ValidationError name="password" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="repeatPassword">
                    Підтвердити пароль <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    placeholder="..."
                    autoComplete="off"
                    onPaste={e => e.preventDefault()}
                  />
                  <ValidationError name="repeatPassword" component="div" />
                </FieldWrapper>

                <SubmitButton
                  type="submit"
                  disabled={
                    (!touched.name &&
                      !touched.email &&
                      !touched.password &&
                      !touched.repeatPassword) ||
                    !isValid
                  }
                >
                  Зареєструватися
                  {isPending && <PulseLoader color="white" size="4px" />}
                </SubmitButton>
                <LinkWrapper>
                  <IsRegistredParagraph>Вже з нами?</IsRegistredParagraph>
                  <StyledLink to="/login">Увійти</StyledLink>
                </LinkWrapper>
              </StyledForm>
            );
          }}
        </Formik>
        <FormBottomStyled>
          <FormBottomImage data-status="singUp" />
        </FormBottomStyled>
      </FormWrapper>
    </>
  );
};

export default SignupForm;
