import { useState, useEffect } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import { StyledBookIcon, ProgressStyled } from './GoalTable.styled';

const useGoalTable = (books, onDeleteBook) => {
  const [tableData, setTableData] = useState();
  const isAdd = typeof onDeleteBook === 'function';
  const calculateBookProgress = record => {
    const readPages = record.leftPages;
    const totalPages = record.pages;
    const percentage = (readPages / totalPages) * 100;
    return percentage.toFixed(1);
  };

  const renderLastColumn = (text, record) => {
    if (isAdd) {
      if (books.length !== 0) {
        return (
          <Space size="middle">
            <DeleteOutlined onClick={() => onDeleteBook(record)} />
          </Space>
        );
      }
    } else {
      return (
        <ProgressStyled type="circle" percent={calculateBookProgress(record)} />
      );
    }
  };

  const columns = [
    {
      title: 'Назва книги',
      dataIndex: 'title',
      key: 'title',
      render: text => (
        <div>
          <StyledBookIcon /> <span>{text}</span>
        </div>
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
      render: (text, record) => {
        return isAdd ? (
          text
        ) : (
          <>
            <span>{record.leftPages}</span> / {text}
          </>
        );
      },
    },
    {
      title: isAdd ? '' : 'Прогрес',
      key: 'action',
      render: renderLastColumn,
    },
  ];

  useEffect(() => {
    if (books.length !== 0) {
      setTableData(books.map(book => ({ ...book, key: book._id })));
    } else {
      setTableData([{ title: '...', key: 'empty' }]);
    }
  }, [books]);

  return { tableData, columns, isAdd };
};

export default useGoalTable;
