import useTable from './useAddTable';
import { TableStyled } from './AddTable.styled';
const AddTable = ({ books, onDeleteBook }) => {
  const { columns, tableData } = useTable(books, onDeleteBook);

  return (
    <TableStyled
      columns={columns}
      dataSource={tableData}
      pagination={false}
      scroll={{
        y: 200,
      }}
    />
  );
};

export default AddTable;
