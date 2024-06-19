import GlobalStyle from '../../styles/GlobalStyle';
import { AppStyled } from './App.styled';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import GoogleRedirect from 'components/AuthenticationComponent/GoogleRedirect';

import MobileRoute from 'components/MobileRoute/MobileRoute';
import AddBook from 'pages/AddBook';
// import AboutApp from 'components/Signup/AboutApp';
import { getFetchingCurrent } from 'redux/auth';
import BookDrawer from 'components/BookComponents/BookDrawer';
import BookModal from 'components/BookComponents/BookModal/BookModal';
import RatingModal from 'components/BookComponents/RatingModal';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Library = lazy(() => import('pages/Library'));
const Goal = lazy(() => import('pages/Goal'));
const GoalsList = lazy(() => import('pages/GoalsList'));
const AddGoal = lazy(() => import('pages/AddGoal'));

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(getFetchingCurrent);
  const [firstRenderEnded, setFirstRenderEnded] = useState(false);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    setFirstRenderEnded(true);
  }, [dispatch]);

  return (
    !isFetching &&
    firstRenderEnded && (
      <>
        <GlobalStyle />
        <AppStyled>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <PublicRoute restricted>
                    <MobileRoute redirectTo="login">
                      <Login />
                    </MobileRoute>
                  </PublicRoute>
                }
              />
              <Route
                path="registration"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="google-redirect"
                element={
                  <PublicRoute restricted>
                    <GoogleRedirect />
                  </PublicRoute>
                }
              />
              <Route
                path="library"
                element={
                  <PrivateRoute>
                    <Library />
                  </PrivateRoute>
                }
              >
                <Route
                  path="addBook"
                  element={
                    <PrivateRoute>
                      <AddBook />
                    </PrivateRoute>
                  }
                />
                <Route
                  path=":id"
                  element={
                    <PrivateRoute>
                      <BookDrawer />
                    </PrivateRoute>
                  }
                />
                <Route
                  path=":id/change"
                  element={
                    <PrivateRoute>
                      <BookModal />
                    </PrivateRoute>
                  }
                />
                <Route
                  path=":id/rating"
                  element={
                    <PrivateRoute>
                      <RatingModal />
                    </PrivateRoute>
                  }
                />
              </Route>

              <Route
                path="goals"
                element={
                  <PrivateRoute>
                    <GoalsList />
                  </PrivateRoute>
                }
              />
              <Route
                path="goals/addGoal"
                element={
                  <PrivateRoute>
                    <AddGoal />
                  </PrivateRoute>
                }
              />
              <Route
                path="goals/:id"
                element={
                  <PrivateRoute>
                    <Goal />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </AppStyled>
      </>
    )
  );
}
