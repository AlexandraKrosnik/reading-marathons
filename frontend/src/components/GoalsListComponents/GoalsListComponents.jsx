import GoalsCollapseList from './GoalsCollapseList/GoalsCollapseList';
import GoalsHeader from './GoalsHeader/GoalsHeader';
const GoalsListComponents = () => {
  return (
    <>
      <GoalsHeader />
      <GoalsCollapseList />
      <GoalsCollapseList />
      <GoalsCollapseList />
    </>
  );
};

export default GoalsListComponents;
