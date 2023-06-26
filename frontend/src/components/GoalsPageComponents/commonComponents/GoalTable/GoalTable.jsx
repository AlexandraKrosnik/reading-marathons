import useGoalTable from './useGoalTable';
import { TableStyled } from './GoalTable.styled';
const GoalTable = ({ books, onDeleteBook }) => {
  const { columns, tableData, isAdd } = useGoalTable(books, onDeleteBook);

  return (
    <TableStyled
      isAdd={isAdd}
      columns={columns}
      dataSource={tableData}
      pagination={false}
      scroll={{
        y: 200,
      }}
    />
  );
};

export default GoalTable;
