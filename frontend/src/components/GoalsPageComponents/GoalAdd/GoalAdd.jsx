import Container from 'components/Container';
import FormAdd from './FormAdd/FormAdd';
import useGoalAdd from './useGoalAdd';
import AddTable from './AddTable/AddTable';
import BooksListEmptyMobile from '../BooksListEmptyMobile/BooksListEmptyMobile';
import BooksListFilledMobile from '../BooksListFilledMobile/BooksListFilledMobile';
import StartTrainingButton from './StartTrainingButton';
import ProgressChart from '../ProgressChart/ProgressChart';
import MyGoal from '../MyGoal/MyGoal';

import { StyledContainer } from './GoalAdd.styled';
import ConfirmGoalModal from './ConfirmGoalModal/ConfirmGoalModal';
import Loader from 'components/Loader/Loader';

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
        <AddTable books={booksForTable} onDeleteBook={deleteBookFromTable} />
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
              <MyGoal days={numberOfDays} books={numberOfBooks} />
              <ProgressChart
                getPagesCount={getPagesCount}
                getDatesBetweenDates={getDateCountBetweenDates}
              />
            </StyledContainer>
          )}
          {!isDesktop && (
            <>
              {isTablet && <MyGoal days={numberOfDays} books={numberOfBooks} />}
              {addPartContent}
              {isMobile && <MyGoal days={numberOfDays} books={numberOfBooks} />}
              <ProgressChart
                getPagesCount={getPagesCount}
                getDatesBetweenDates={getDateCountBetweenDates}
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
