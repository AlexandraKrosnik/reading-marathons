import Container from 'components/Container';
import {
  AddBtn,
  StyledSection,
  TextStyled,
  TextStyledPrimary,
  StyledTabs,
} from './LibraryComponent.styled';
import useLibraryComponent from './useLibraryComponent';
import { ReactComponent as PlusIcon } from 'images/library/plus.svg';
import EmtpyLibraryText from 'components/modals/EmtpyLibraryText';
import { Empty } from 'antd';
import { Outlet } from 'react-router-dom';

const LibraryComponent = () => {
  const {
    isMobile,
    navigate,
    isEmpty,
    isLoading,
    error,
    items,
    defaultTabKey,
    onTabChange,
    search,
  } = useLibraryComponent();

  return (
    <>
      <Container>
        {error && <p>{error?.data?.message}</p>}
        {!isLoading && (
          <StyledSection>
            {!isEmpty ? (
              isMobile ? (
                <>
                  <TextStyledPrimary>Бібліотека пуста.</TextStyledPrimary>
                  <TextStyled>Додайте книжки до бібліотеки.</TextStyled>
                  <Empty description="Немає книг" />
                </>
              ) : (
                <EmtpyLibraryText />
              )
            ) : (
              defaultTabKey && (
                <StyledTabs
                  defaultActiveKey={defaultTabKey}
                  onChange={onTabChange}
                  items={items}
                />
              )
            )}
            <AddBtn
              type="primary"
              onClick={() => {
                navigate({ pathname: '/library/addBook', search });
              }}
            >
              <PlusIcon />
            </AddBtn>
          </StyledSection>
        )}
      </Container>
      <Outlet />
    </>
  );
};

export default LibraryComponent;
