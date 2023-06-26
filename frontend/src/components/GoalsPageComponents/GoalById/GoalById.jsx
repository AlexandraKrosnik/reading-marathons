import Container from 'components/Container/Container.styled';
import {
  TimerListWrapper,
  MyGoalStyled,
  ContentWrapper,
} from './GoalById.styled';
import GoalTimer from './GoalTimer/GoalTimer';
import useGoalById from './useGoalById';
import MyGoal from '../commonComponents/MyGoal/MyGoal';
import GoalTable from '../commonComponents/GoalTable/GoalTable';
import Loader from 'components/Loader/Loader';

import ProgressChart from '../commonComponents/ProgressChart';
import Results from './Results/Results';
import BooksListFilledMobile from '../commonComponents/BooksListFilledMobile/BooksListFilledMobile';
import { StyledContainer } from '../commonGoalStyles.styled';

import Modal from 'components/modals/Modal/Modal';
import WellDoneModal from 'components/modals/WellDoneModal/WellDoneModal';
const GoalById = () => {
  const {
    data,
    isLoading,
    getTimerTitle,
    getTimerDate,
    getBooksQuantity,
    getDateQuantity,
    getLeftBooksQuantity,
    getBooks,
    isMobile,
    isDesktop,
    onResultAdd,
    getResult,
    getPlanPagesData,
    getPlanDateArray,
    getResultData,
    isFinished,
    calculateBookProgress,
    onCloseWellDone,
  } = useGoalById();

  const timerContent = (
    <TimerListWrapper>
      <GoalTimer
        title={getTimerTitle(true)}
        referenceDate={getTimerDate(true)}
      />
      <GoalTimer title={getTimerTitle()} referenceDate={getTimerDate()} />
    </TimerListWrapper>
  );

  const isDesktopContent = data && (
    <>
      <ContentWrapper>
        {timerContent}
        <GoalTable books={getBooks()} />
        <ProgressChart
          planData={{
            pages: getPlanPagesData(),
            dates: getPlanDateArray(),
          }}
          resultData={getResultData()}
        />
      </ContentWrapper>
      <ContentWrapper>
        <MyGoalStyled>
          <MyGoal
            books={getBooksQuantity()}
            days={getDateQuantity()}
            booksLeft={getLeftBooksQuantity()}
          />
        </MyGoalStyled>
        <Results
          training={data.training}
          onSubmit={onResultAdd}
          results={getResult()}
        />
      </ContentWrapper>
    </>
  );

  return (
    <Container>
      {isLoading && <Loader />}
      {data && (
        <StyledContainer>
          {isDesktop && isDesktopContent}
          {!isDesktop && (
            <>
              {timerContent}
              <MyGoal
                books={getBooksQuantity()}
                days={getDateQuantity()}
                booksLeft={getLeftBooksQuantity()}
              />
              {!isMobile ? (
                <GoalTable books={getBooks()} />
              ) : (
                <BooksListFilledMobile
                  books={getBooks()}
                  bookProgress={calculateBookProgress()}
                />
              )}

              <ProgressChart
                planData={{
                  pages: getPlanPagesData(),
                  dates: getPlanDateArray(),
                }}
                resultData={getResultData()}
              />
              <Results
                training={data.training}
                onSubmit={onResultAdd}
                results={getResult()}
              />
            </>
          )}

          {isFinished && (
            <Modal onClose={onCloseWellDone}>
              <WellDoneModal status="pages" />
            </Modal>
          )}
        </StyledContainer>
      )}
    </Container>
  );
};

export default GoalById;
