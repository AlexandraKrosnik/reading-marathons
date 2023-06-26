import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import TimerCell from '../TimerCell/TimerCell';
import useGoalsCollapseList from '../useGoalsCollapseList';
import FilterDropdown from './FilterDropdown/FilterDropdown';
import {
  BookOutlinedStyled,
  ProgressStyled,
  StatusColumnStyled,
  BooksListStyled,
  BooksListItemStyled,
  BooksTitleStyled,
  BooksDateStyled,
} from './GoalsTable.styled';

const useGoalsTable = () => {
  const { PLAN, ACTIVE, FINISHED } = useGoalsCollapseList();
  const [searchText, setSearchText] = useState({});
  const searchInput = useRef(null);
  const navigate = useNavigate();

  const getPercent = (smallerNumber, largerNumber, roundingThreshold = 0) =>
    ((smallerNumber / largerNumber) * 100).toFixed(roundingThreshold);

  const getGoalProgressPercentage = record => {
    let countBooksPages = 0;
    let countBooksLeftPages = 0;

    record.statistics.forEach(({ statisticsPages, book }) => {
      countBooksPages += book.pages;
      countBooksLeftPages += statisticsPages.readPages;
    });
    return getPercent(countBooksLeftPages, countBooksPages, 1);
  };

  const renderDate = text => {
    const formattedDate = moment(text).format('DD.MM.YYYY ');
    const formattedTime = moment(text).format('HH:mm');
    return (
      <BooksDateStyled>
        {formattedDate} | {formattedTime}
      </BooksDateStyled>
    );
  };

  const renderStatus = (text, record, index) => {
    const percent = getGoalProgressPercentage(record);

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
            />
            <span>Виконано на {percent}%</span>
          </StatusColumnStyled>
        );
      }
      default:
        break;
    }
  };

  const renderBooks = ({ statistics }) => {
    return statistics.length === 0 ? (
      <LoadingOutlined />
    ) : (
      <BooksListStyled
        dataSource={statistics}
        renderItem={({ book, statisticsPages }) => {
          const percent = getPercent(
            Number(statisticsPages.readPages),
            Number(book.pages),
            0
          );

          return (
            <BooksListItemStyled>
              <ProgressStyled
                type="circle"
                percent={percent}
                size="small"
                showInfo={Number(percent) === 100 || false}
                strokeWidth={10}
                data-status="list"
              />
              {searchText.books ? (
                <Highlighter
                  highlightStyle={{
                    backgroundColor: 'rgb(243 216 95)',
                    padding: 0,
                  }}
                  searchWords={[searchText.books]}
                  autoEscape
                  textToHighlight={book.title ? book.title.toString() : ''}
                />
              ) : (
                book.title
              )}
            </BooksListItemStyled>
          );
        }}
      />
    );
  };

  const renderTitle = text => {
    return (
      <BooksTitleStyled>
        {searchText.title ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText.title]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        )}
      </BooksTitleStyled>
    );
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    setSearchText(prevState => ({
      ...prevState,
      [dataIndex]: selectedKeys[0],
    }));

    confirm();
  };

  const handleReset = (clearFilters, confirm, dataIndex) => {
    clearFilters();
    setSearchText(prevState => ({
      ...prevState,
      [dataIndex]: '',
    }));

    confirm();
  };
  const filerTitle = (value, record, dataIndex) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());

  const filterBooks = (value, record, dataIndex) => {
    const isTitleIncludeValue = record[dataIndex].map(({ book }) =>
      book.title.toString().toLowerCase().includes(value.toLowerCase())
    );
    return isTitleIncludeValue.includes(true);
  };

  const onFilter = (value, record, dataIndex) => {
    if (dataIndex === 'title') {
      return filerTitle(value, record, dataIndex);
    }
    if (dataIndex === 'books') {
      return filterBooks(value, record, dataIndex);
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
    render: (text, record) => {
      if (dataIndex === 'title') {
        return renderTitle(text);
      }
      if (dataIndex === 'books') {
        return renderBooks(record);
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

  const handleRowClick = ({ _id: bookId }) => {
    navigate({ pathname: `/goals/${bookId}` });
  };
  return { tableColumnsContent, handleRowClick };
};

export default useGoalsTable;
