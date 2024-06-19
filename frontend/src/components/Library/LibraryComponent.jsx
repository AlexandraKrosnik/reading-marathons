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
import { Empty, Select } from 'antd';
import { Outlet } from 'react-router-dom';
import { StyledInput } from 'components/BookComponents/BookForm/BookForm.styled';

const LibraryComponent = () => {
  const {
    isMobile,
    navigate,
    isNoBooks,
    isLoading,
    error,
    items,
    defaultTabKey,
    onTabChange,
    search,
    handleSearchChange,
    searchField,
    handleSelectSearchOption
  } = useLibraryComponent();


  const getSearchSelectOptions = () => {
    return [
      {value: 'title', label: 'Назвою книги'},
      {value: 'collections', label: 'Колекцією'}
    ]
  }

  const getSearchInput = () => {
    return (
      <div className='library-component__search'>
        <Select options={getSearchSelectOptions()} onChange={handleSelectSearchOption} placeholder="Виберіть категорію пошуку" defaultValue="title"/>
        <StyledInput placeholder="Пошук книги за назвою" onChange={handleSearchChange} value={searchField}/>
      </div>
    )
  }

  return (
    <>
      <Container>
        {error && <p>{error?.data?.message}</p>}
        {!isLoading && (
          <StyledSection>
            {!isNoBooks ? (
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
                <>
                {getSearchInput()}
                <StyledTabs
                  defaultActiveKey={defaultTabKey}
                  onChange={onTabChange}
                  items={items}
                />
                </>
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
