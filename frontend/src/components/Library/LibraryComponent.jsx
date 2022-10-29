import LibraryForm from './LibraryForm/LibraryForm';

// import Table from './Table/Table';
// import ReadTable from './ReadTable/ReadTable';
import Container from 'components/Container';
import {
  MobileAddBtn,
  StyledButton,
  StyledSection,
  TextStyled,
  TextStyledPrimary,
  StyledTabs,
} from './LibraryComponent.styled';
import useLibraryComponent from './useLibraryComponent';
import { ReactComponent as PlusIcon } from './assets/plus.svg';
import EmtpyLibraryText from 'components/modals/EmtpyLibraryText';
import { Empty, Collapse } from 'antd';

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
  } = useLibraryComponent();
  const { Panel } = Collapse;

  return (
    <>
      <Container>
        {error && <p>{error?.data?.message}</p>}
        {!isLoading && (
          <StyledSection>
            {isMobile ? (
              <>
                {!isEmpty ? (
                  <>
                    <TextStyledPrimary>Бібліотека пуста.</TextStyledPrimary>
                    <TextStyled>Додайте книжки до бібліотеки.</TextStyled>
                    <Empty />
                  </>
                ) : (
                  <StyledTabs
                    defaultActiveKey={defaultTabKey}
                    onChange={onTabChange}
                    items={items}
                  />
                )}

                <MobileAddBtn
                  type="primary"
                  onClick={() => {
                    navigate('/library/addBook');
                  }}
                >
                  <PlusIcon />
                </MobileAddBtn>
              </>
            ) : (
              <>
                <Collapse>
                  <Panel header="Додати книгу" key="1">
                    <LibraryForm />
                  </Panel>
                </Collapse>
                {!isEmpty ? (
                  <EmtpyLibraryText />
                ) : (
                  defaultTabKey && (
                    <StyledTabs
                      defaultActiveKey={defaultTabKey}
                      onChange={onTabChange}
                      items={items}
                    />
                  )
                )}
              </>
            )}
          </StyledSection>
        )}
      </Container>
    </>
  );
};

export default LibraryComponent;
