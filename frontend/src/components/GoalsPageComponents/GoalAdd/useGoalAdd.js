import { useMatchMedia } from 'hooks';
import { useGetBooksQuery } from 'redux/RTKQuery/booksApi';
import { useState, useEffect, useMemo, useCallback } from 'react';
import openNotificationWithIcon from 'components/Notification';
import { useAddTrainingMutation } from 'redux/RTKQuery/booksApi';
import { QuestionOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
const { confirm } = Modal;

const useGoalAdd = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const [books, setBooks] = useState([]);
  const [booksForTable, setBooksForTable] = useState([]);
  const [booksForSelect, setBooksForSelect] = useState([]);
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
  const [addButtonDisable, setAddButtonDisable] = useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [booksToConfirm, setBooksToConfirm] = useState();
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [titleGoal, setTitleGoal] = useState();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const localStorageStartDate = 'startDate';
  const localStorageFinishDate = 'finishDate';
  const localStorageTableBooks = 'tableBooks';
  const localStorageSelectBooks = 'selectBooks';
  const { data, error } = useGetBooksQuery();
  const [addTraining, { isLoading }] = useAddTrainingMutation();

  const setStartDateToLocalStorage = useCallback(newDate => {
    localStorage.setItem(localStorageStartDate, JSON.stringify(newDate));
  }, []);

  const setFinishDateToLocalStorage = useCallback(newDate => {
    localStorage.setItem(localStorageFinishDate, JSON.stringify(newDate));
  }, []);

  const setSelectBooksToLocalStorage = useCallback(newBooks => {
    localStorage.setItem(localStorageSelectBooks, JSON.stringify(newBooks));
  }, []);

  const setTableBooksToLocalStorage = useCallback(newBooks => {
    localStorage.setItem(localStorageTableBooks, JSON.stringify(newBooks));
  }, []);

  const getStartDateFromLocalStorage = useMemo(() => {
    return JSON.parse(localStorage.getItem(localStorageStartDate));
  }, []);

  const getFinishDateFromLocalStorage = useMemo(
    () => JSON.parse(localStorage.getItem(localStorageFinishDate)),
    []
  );

  const getSelectBooksFromLocalStorage = useMemo(
    () => JSON.parse(localStorage.getItem(localStorageSelectBooks)),
    []
  );

  const getTableBooksFromLocalStorage = useMemo(
    () => JSON.parse(localStorage.getItem(localStorageTableBooks)),
    []
  );

  const removeStartFromLocalStorage = useCallback(
    () => localStorage.removeItem(localStorageStartDate),
    []
  );
  const removeFinishFromLocalStorage = useCallback(
    () => localStorage.removeItem(localStorageFinishDate),
    []
  );
  const removeTableBooksFromLocalStorage = useCallback(
    () => localStorage.removeItem(localStorageTableBooks),
    []
  );
  const removeSelectBooksFromLocalStorage = useCallback(
    () => localStorage.removeItem(localStorageSelectBooks),
    []
  );

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  useEffect(() => {
    const startDate = new Date(start);
    const finishDate = new Date(finish);

    if (
      booksForTable.length >= 1 &&
      !!start &&
      !!finish &&
      startDate < finishDate
    ) {
      setAddButtonDisable(false);
    }
  }, [booksForTable, start, finish]);

  const booksInTraining = useMemo(
    () => books?.filter(book => !book.inTraining),
    [books]
  );

  const getBooksFromStorage = useCallback(() => {
    setBooksForSelect(getSelectBooksFromLocalStorage);
    if (!!localStorage.getItem(localStorageTableBooks)) {
      setBooksForTable(getTableBooksFromLocalStorage);
    }
  }, [getSelectBooksFromLocalStorage, getTableBooksFromLocalStorage]);

  const getDateFromStorage = useCallback(() => {
    if (!!getStartDateFromLocalStorage) {
      setStart(getStartDateFromLocalStorage);
    }
    if (!!getFinishDateFromLocalStorage) {
      setFinish(getFinishDateFromLocalStorage);
    }
  }, [getStartDateFromLocalStorage, getFinishDateFromLocalStorage]);

  const showDataRestorationFromLocalStorageConfirm = useCallback(() => {
    confirm({
      title: 'Ви хочете відновити дані?',
      icon: <QuestionOutlined />,
      okText: 'Так',
      cancelText: 'Ні',
      onOk() {
        getBooksFromStorage();
        getDateFromStorage();
        setIsFirstRender(false);
      },
      onCancel() {
        removeStartFromLocalStorage();
        removeFinishFromLocalStorage();
        removeTableBooksFromLocalStorage();
        setBooksForSelect(booksInTraining);
        setSelectBooksToLocalStorage(booksInTraining);
        setIsFirstRender(false);
      },
    });
  }, [
    booksInTraining,
    getBooksFromStorage,
    getDateFromStorage,
    removeStartFromLocalStorage,
    removeFinishFromLocalStorage,
    removeTableBooksFromLocalStorage,
    setBooksForSelect,
    setSelectBooksToLocalStorage,
  ]);

  useEffect(() => {
    if (isFirstRender && books.length !== 0) {
      if (
        !!getSelectBooksFromLocalStorage &&
        (!!getStartDateFromLocalStorage ||
          !!getFinishDateFromLocalStorage ||
          !!getTableBooksFromLocalStorage)
      ) {
        showDataRestorationFromLocalStorageConfirm();
      } else {
        setBooksForSelect(booksInTraining);
        setSelectBooksToLocalStorage(booksInTraining);
        setIsFirstRender(false);
      }
    }
  }, [
    isFirstRender,
    booksInTraining,
    getBooksFromStorage,
    getDateFromStorage,
    books,
    setSelectBooksToLocalStorage,
    getSelectBooksFromLocalStorage,
    showDataRestorationFromLocalStorageConfirm,
    getFinishDateFromLocalStorage,
    getStartDateFromLocalStorage,
    getTableBooksFromLocalStorage,
  ]);

  useEffect(() => {
    if (start) {
      const startDate = new Date(start);
      const finishDate = new Date(finish);

      if (startDate > finishDate) {
        setStart(null);
        removeStartFromLocalStorage();
        openNotificationWithIcon(
          'warning',
          'Початкова дата не може бути більше ніж кінцева!'
        );
      } else {
        setStartDateToLocalStorage(start);
      }
    }
    if (finish) {
      setFinishDateToLocalStorage(finish);
    }
  }, [
    start,
    finish,
    setStartDateToLocalStorage,
    setFinishDateToLocalStorage,
    removeStartFromLocalStorage,
  ]);

  const sortSubmittedBooksForTable = booksId => {
    return booksForSelect.filter(item => booksId.find(id => id === item._id));
  };
  const sortSubmittedBooksForSelect = booksId => {
    return booksForSelect.filter(item => !booksId.find(id => id === item._id));
  };
  const deleteBookFromTable = book => {
    setBooksForSelect([...booksForSelect, book]);
    const updateTableBooks = booksForTable.filter(
      item => item._id !== book._id
    );
    setBooksForTable(updateTableBooks);
    setSelectBooksToLocalStorage([...booksForSelect, book]);
    setTableBooksToLocalStorage(updateTableBooks);
  };
  const submitBooks = idBooksArray => {
    const sortForTable = [
      ...booksForTable,
      ...sortSubmittedBooksForTable(idBooksArray),
    ];
    const sortForSelect = sortSubmittedBooksForSelect(idBooksArray);
    setBooksForTable(sortForTable);
    setBooksForSelect(sortForSelect);
    setTableBooksToLocalStorage(sortForTable);
    setSelectBooksToLocalStorage(sortForSelect);
  };

  const numberOfDays = useMemo(() => {
    if (start && finish) {
      let date1 = new Date(start);
      let date2 = new Date(finish);
      let diffInMs = date2.getTime() - date1.getTime();
      let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      let roundedDiffInDays = Math.round(diffInDays);

      return roundedDiffInDays;
    }
  }, [finish, start]);

  const numberOfBooks = useMemo(() => {
    return booksForTable.length;
  }, [booksForTable]);

  const getPagesCount = useMemo(() => {
    if (booksForTable.length !== 0) {
      return booksForTable.reduce((accumulator, item) => {
        if (item.leftPages !== 0) {
          return (accumulator += item.leftPages);
        }
        return (accumulator += item.pages);
      }, 0);
    }
  }, [booksForTable]);

  const getDateCountBetweenDates = useMemo(() => {
    if (!!start && !!finish) {
      const dates = [];
      let startDate = new Date(start);

      while (startDate <= new Date(finish)) {
        dates.push(startDate.toISOString().slice(0, 10));
        startDate = new Date(startDate.getTime() + 86400000);
      }

      return dates;
    }
  }, [finish, start]);

  const filterBooksInReading = useMemo(() => {
    return booksForTable.filter(book => book.leftPages > 0);
  }, [booksForTable]);

  const initiateBookReadingChallenge = () => {
    setConfirmModalVisible(true);
    if (filterBooksInReading.length !== 0) {
      setBooksToConfirm(filterBooksInReading);
    } else {
      setBooksToConfirm();
    }
  };

  const onAddGoal = async (booksToRestartReading = []) => {
    setIsAddLoading(true);
    setConfirmModalVisible(false);
    const data = {
      start,
      finish,
      title: titleGoal,
      books: booksForTable.map(book => book._id),
    };
    console.log(data);

    if (booksToRestartReading?.length !== 0) {
      data.booksToRestartReading = booksToRestartReading.map(book => book._id);
    }

    const result = await addTraining(data);

    if ('error' in result) {
      openNotificationWithIcon('error', result.error.data.message);
    } else {
      openNotificationWithIcon('success', `"${titleGoal}" успішно створено!`);
    }
    removeFinishFromLocalStorage();
    removeStartFromLocalStorage();
    removeSelectBooksFromLocalStorage();
    removeTableBooksFromLocalStorage();
  };

  return {
    booksForSelect,
    booksForTable,
    setBooksForTable,
    start,
    finish,
    setStart,
    setFinish,
    isMobile,
    isTablet,
    isDesktop,
    submitBooks,
    deleteBookFromTable,
    numberOfBooks,
    numberOfDays,
    isFirstRender,
    getPagesCount,
    getDateCountBetweenDates,
    addButtonDisable,
    initiateBookReadingChallenge,
    confirmModalVisible,
    booksToConfirm,
    onAddGoal,
    setConfirmModalVisible,
    isAddLoading,
    titleGoal,
    setTitleGoal,
  };
};

export default useGoalAdd;
