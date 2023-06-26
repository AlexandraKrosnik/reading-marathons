import { TableStyled } from './GoalsTable.styled';
import useGoalsTable from './useGoalsTable';
import PropTypes from 'prop-types';
const GoalsTable = ({ type, dataSource }) => {
  const { tableColumnsContent, handleRowClick } = useGoalsTable();
  return (
    <TableStyled
      columns={tableColumnsContent(type)}
      dataSource={dataSource}
      pagination={false}
      onRow={record => ({
        onClick: () => handleRowClick(record),
      })}
      scroll={{
        y: 250,
      }}
    />
  );
};

GoalsTable.propTypes = {
  type: PropTypes.string.isRequired,
  dataSource: PropTypes.array.isRequired,
};

export default GoalsTable;
