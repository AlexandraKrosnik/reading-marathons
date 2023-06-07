import {
  BookOutlinedStyled,
  ProgressStyled,
  StatusColumnStyled,
  ListStyled,
  ListItemStyled,
} from './GoalsTable.styled';

import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';
import moment from 'moment';
import TimerCell from '../TimerCell/TimerCell';
import useGoalsCollapseList from '../useGoalsCollapseList';
import { useState, useRef, useEffect } from 'react';
import FilterDropdown from './FilterDropdown/FilterDropdown';

const useGoalsTable = () => {
  const { PLAN, ACTIVE, FINISHED } = useGoalsCollapseList();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const renderDate = text => {
    const formattedDate = moment(text).format('DD.MM.YYYY ');
    const formattedTime = moment(text).format('HH:mm');
    return (
      <span>
        {formattedDate} | {formattedTime}
      </span>
    );
  };
  const getPercent = (smallerNumber, largerNumber, roundingThreshold = 0) =>
    ((smallerNumber / largerNumber) * 100).toFixed(roundingThreshold);

  const renderStatus = (text, record, index) => {
    let countBooksPages = 0;
    let countBooksLeftPages = 0;

    record.books.forEach(({ book }) => {
      countBooksPages += book.pages;
      countBooksLeftPages += book.leftPages;
    });
    const percent = getPercent(countBooksLeftPages, countBooksPages, 1);

    switch (text) {
      case PLAN: {
        return (
          <>
            <TimerCell startDateTime={record.start} />
          </>
        );
      }
      case ACTIVE: {
        return (
          <ProgressStyled
            percent={percent}
            size="small"
            status="active"
            data-status={text}
          />
        );
      }
      case FINISHED: {
        if (Number(percent) === 100) {
          return (
            <StatusColumnStyled data-status={text}>
              <ProgressStyled
                type="circle"
                percent={percent}
                data-status="success"
              />
              <span>Успішно!</span>
            </StatusColumnStyled>
          );
        }
        return (
          <StatusColumnStyled data-status={text}>
            <ProgressStyled
              type="circle"
              percent={percent}
              status="exception"
              data-status="error"
              // size={20}
            />
            <span>Виконано на {percent}%</span>
          </StatusColumnStyled>
        );
      }
      default:
        break;
    }
  };

  const renderBooks = (books, dataIndex) => {
    return (
      <ListStyled
        dataSource={books}
        renderItem={({ book }) => {
          const percent = getPercent(book.leftPages, book.pages, 0);
          return (
            <ListItemStyled>
              <ProgressStyled
                type="circle"
                percent={percent}
                size="small"
                showInfo={Number(percent) === 100 || false}
                strokeWidth={10}
                data-status="list"
              />
              {searchedColumn === dataIndex || dataIndex === 'total' ? (
                <Highlighter
                  highlightStyle={{
                    backgroundColor: '#ffc069',
                    padding: 0,
                  }}
                  searchWords={[searchText]}
                  autoEscape
                  textToHighlight={book.title ? book.title.toString() : ''}
                />
              ) : (
                book.title
              )}
            </ListItemStyled>
          );
        }}
      />
    );
  };

  const renderTitle = (text, dataIndex) => {
    if (searchedColumn === dataIndex || dataIndex === 'total') {
      return (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      );
    } else {
      return text;
    }
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, confirm) => {
    clearFilters();
    setSearchText('');
    confirm();
  };

  const onFilter = (value, record, dataIndex) => {
    if (dataIndex === 'title') {
      return record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    }
    if (dataIndex === 'books') {
      const isTitleIncludeValue = record[dataIndex].map(({ book }) =>
        book.title.toString().toLowerCase().includes(value.toLowerCase())
      );
      return isTitleIncludeValue.includes(true);
    }
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <FilterDropdown
        setSelectedKeys={setSelectedKeys}
        selectedKeys={selectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
        handleSearch={handleSearch}
        handleReset={handleReset}
        dataIndex={dataIndex}
        ref={searchInput}
      />
    ),
    filterIcon: filtered => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) => onFilter(value, record, dataIndex),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text => {
      if (dataIndex === 'title') {
        return renderTitle(text, dataIndex);
      }
      if (dataIndex === 'books') {
        return renderBooks(text, dataIndex);
      }
    },
  });

  const tableColumnsContent = type => {
    return [
      {
        dataIndex: 'icon',
        key: 'icon',
        render: () => <BookOutlinedStyled data-status={type} />,
      },
      {
        title: 'Назва',
        key: 'title',
        dataIndex: 'title',
        ...getColumnSearchProps('title'),
      },
      {
        title: 'Книги',
        key: 'books',
        dataIndex: 'books',
        ...getColumnSearchProps('books'),
      },
      {
        title: 'Початок',
        key: 'start',
        dataIndex: 'start',
        render: renderDate,
      },
      {
        title: 'Кінець',
        key: 'finish',
        dataIndex: 'finish',
        render: renderDate,
      },
      {
        title: () => {
          switch (type) {
            case PLAN: {
              return 'Початок через';
            }
            case ACTIVE: {
              return 'Прогрес';
            }
            case FINISHED: {
              return 'Статус';
            }
            default:
              break;
          }
        },
        key: 'status',
        dataIndex: 'status',
        render: renderStatus,
      },
    ];
  };
  return { tableColumnsContent };
};

export default useGoalsTable;
