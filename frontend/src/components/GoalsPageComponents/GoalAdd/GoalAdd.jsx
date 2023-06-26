import Container from 'components/Container';
import FormAdd from './FormAdd/FormAdd';
import useGoalAdd from './useGoalAdd';
import GoalTable from '../commonComponents/GoalTable/GoalTable';
import BooksListEmptyMobile from '../commonComponents/BooksListEmptyMobile';
import BooksListFilledMobile from '../commonComponents/BooksListFilledMobile';
import StartTrainingButton from './StartTrainingButton';
import ProgressChart from '../commonComponents/ProgressChart/ProgressChart';
import MyGoal from '../commonComponents/MyGoal';

import { StyledContainer } from '../commonGoalStyles.styled';
import ConfirmGoalModal from './ConfirmGoalModal/ConfirmGoalModal';

const GoalAdd = () => {
  const {
    booksForSelect,
    booksForTable,
    setBooksForTable,
    start,
    finish,
    setStart,
    setFinish,
    isMobile,
    isTablet,
    isDesktop,
    submitBooks,
    deleteBookFromTable,
    numberOfBooks,
    numberOfDays,
    isFirstRender,
    getPagesCount,
    getDateCountBetweenDates,
    addButtonDisable,
    initiateBookReadingChallenge,
    confirmModalVisible,
    booksToConfirm,
    onAddGoal,
    setConfirmModalVisible,
    titleGoal,
    setTitleGoal,
  } = useGoalAdd();

  const addPartContent = (
    <div>
      <FormAdd
        books={booksForSelect}
        selectedBooks={submitBooks}
        startTime={start}
        finishTime={finish}
        setStartTime={setStart}
        setFinishTime={setFinish}
      />
      {!isMobile ? (
        <GoalTable books={booksForTable} onDeleteBook={deleteBookFromTable} />
      ) : (
        <>
          {booksForTable.length === 0 ? (
            <BooksListEmptyMobile />
          ) : (
            <BooksListFilledMobile
              books={booksForTable}
              onClick={setBooksForTable}
            />
          )}
        </>
      )}
      <StartTrainingButton
        htmlType="button"
        onClick={initiateBookReadingChallenge}
        disabled={addButtonDisable}
      />
    </div>
  );

  return (
    <>
      {!isFirstRender && (
        <Container>
          {isDesktop && (
            <StyledContainer>
              {addPartContent}
              <MyGoal days={numberOfDays()} books={numberOfBooks()} />
              <ProgressChart
                planData={{
                  pages: getPagesCount(),
                  dates: getDateCountBetweenDates(),
                }}
              />
            </StyledContainer>
          )}
          {!isDesktop && (
            <>
              {isTablet && (
                <MyGoal days={numberOfDays()} books={numberOfBooks()} />
              )}
              {addPartContent}
              {isMobile && (
                <MyGoal days={numberOfDays()} books={numberOfBooks()} />
              )}
              <ProgressChart
                planData={{
                  pages: getPagesCount(),
                  dates: getDateCountBetweenDates(),
                }}
              />
            </>
          )}
          {confirmModalVisible && (
            <ConfirmGoalModal
              visible={confirmModalVisible}
              books={booksToConfirm}
              onOk={onAddGoal}
              onCancel={setConfirmModalVisible}
              isMobile={isMobile}
              titleGoal={titleGoal}
              setTitleGoal={setTitleGoal}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default GoalAdd;
