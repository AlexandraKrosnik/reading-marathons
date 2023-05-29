import { useState, useEffect, useCallback } from 'react';
import { DeleteOutlined, BookOutlined } from '@ant-design/icons';
import { Table, Space } from 'antd';
import { StyledBookIcon } from './AddTable.styled';

const useTable = (books, onDeleteBook) => {
  const [tableData, setTableData] = useState();

  const columns = [
    {
      title: 'Назва книги',
      dataIndex: 'title',
      key: 'title',
      render: text => (
        <>
          <StyledBookIcon /> {text}
        </>
      ),
    },
    {
      title: 'Автор',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Рік',
      dataIndex: 'publication',
      key: 'publication',
    },
    {
      title: 'Сторінки',
      dataIndex: 'pages',
      key: 'pages',
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => {
        if (books.length !== 0) {
          return (
            <Space size="middle">
              <DeleteOutlined onClick={() => onDeleteBook(record)} />
            </Space>
          );
        }
      },
    },
  ];

  useEffect(() => {
    if (books.length !== 0) {
      setTableData(books.map(book => ({ ...book, key: book._id })));
    } else {
      setTableData([{ title: '...', key: 'empty' }]);
    }
  }, [books]);

  return { tableData, columns };
};

export default useTable;
