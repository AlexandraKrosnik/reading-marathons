import { TableStyled } from './GoalsTable.styled';
import useGoalsTable from './useGoalsTable';
const GoalsTable = ({ type, dataSource }) => {
  const { tableColumnsContent } = useGoalsTable();
  return (
    <TableStyled
      columns={tableColumnsContent(type)}
      dataSource={dataSource}
      pagination={false}
      scroll={{
        y: 250,
      }}
    />
  );
};

export default GoalsTable;
