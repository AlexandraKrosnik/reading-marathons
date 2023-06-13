import GoalsCollapseList from './GoalsCollapseList/GoalsCollapseList';
import GoalsHeader from './GoalsHeader/GoalsHeader';
import useGoalsListComponents from './useGoalsListComponents';
const GoalsListComponents = () => {
  const { searchTotalFilter, handleSearch } = useGoalsListComponents();
  return (
    <>
      <GoalsHeader handleSearch={handleSearch} />
      <GoalsCollapseList searchTotalFilter={searchTotalFilter} />
    </>
  );
};

export default GoalsListComponents;
