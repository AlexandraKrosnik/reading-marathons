import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useGetTrainingByIdQuery,
  useUpdateStatisticByIdMutation,
} from 'redux/RTKQuery/booksApi';
import { useMatchMedia } from 'hooks';
import openNotificationWithIcon from 'components/Notification';
const useGoalById = () => {
  const [goalId, setGoalId] = useState();
  const [isFinished, setIsFinished] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const { data, isLoading, isError } = useGetTrainingByIdQuery(goalId, {
    skip: !goalId,
  });

  const [updateStatisticById] = useUpdateStatisticByIdMutation();

  useEffect(() => {
    if (isError) {
      navigate({ pathname: `/goals` });
    }
  }, [isError, navigate]);

  useEffect(() => {
    const goal = params.id;

    if (goal) {
      setGoalId(goal);
    }
  }, [params]);

  const getTimerTitle = isYear => {
    if (isYear) {
      return 'До кінця року залишилось';
    }
    if (data) {
      switch (data.training.status) {
        case 'active': {
          return 'До закінчення мети залишилось';
        }
        case 'finished': {
          return 'Завершено';
        }
        case 'planned': {
          return 'До початку мети залишилось';
        }
        default: {
          break;
        }
      }
    }
  };

  const getTimerDate = isYear => {
    if (isYear) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const nextYear = currentYear + 1;
      return new Date(nextYear, 0, 1);
    }
    if (data) {
      switch (data.training.status) {
        case 'active': {
          return data.training.finish;
        }
        case 'finished': {
          return data.training.start;
        }
        case 'planned': {
          return data.training.start;
        }
        default: {
          break;
        }
      }
    }
  };

  const getBooksQuantity = () => data.training.statistics.length;

  const getLeftBooksQuantity = () => {
    if (data.training.status === 'planned') {
      return null;
    }
    return data.training.statistics.filter(
      ({ book }) => book.status !== 'already'
    ).length;
  };

  const getDateQuantity = () => {
    let date1 = new Date(data.training.start);
    let date2 = new Date(data.training.finish);
    let diffInMs = date2.getTime() - date1.getTime();
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    let roundedDiffInDays = Math.round(diffInDays);

    return roundedDiffInDays;
  };
  const calculateBookProgress = (totalPages, readPages) => {
    const percentage = (readPages / totalPages) * 100;
    return percentage.toFixed(1);
  };

  const getBooks = () => {
    return data.training.statistics.map(({ book, statisticsPages }) => ({
      ...book,
      leftPages: statisticsPages.readPages,
      bookProgress: calculateBookProgress(
        book.pages,
        statisticsPages.readPages
      ),
    }));
  };

  const getResult = () => {
    const results = data?.training.statistics.map(book =>
      book.result.map(r => ({ book: book.book, result: r }))
    );
    const commonResult = [];
    results.forEach(result => commonResult.push(...result));
    return commonResult.sort((result1, result2) => {
      const dateA = new Date(result1.result.date);
      const dateB = new Date(result2.result.date);
      return dateB - dateA; // Сортування за спаданням (від більшого до меншого)
    });
  };

  const isNotValidateUpdate = (newDate, newDataResult) => {
    const currentDate = new Date();
    if (isNaN(newDate) || newDate > currentDate) {
      openNotificationWithIcon('error', 'Дата не валідна');
      return true;
    }
    const updatedBook = data.training.statistics.find(
      ({ book }) => book._id.toString() === newDataResult.book
    );

    if (
      updatedBook.book.pages <
      updatedBook.statisticsPages.readPages + newDataResult.pages
    ) {
      openNotificationWithIcon(
        'error',
        'Вказана більша кількість прочитаних сторінок, ніж залишилась в книжці'
      );
      return true;
    }
  };

  const onResultAdd = async newDataResult => {
    const newDate = new Date(newDataResult.date.utc());
    const isValid = isNotValidateUpdate(newDate, newDataResult);

    if (isValid) {
      return false;
    }
    const isAdd = await updateStatisticById({
      id: goalId,
      data: { ...newDataResult, date: newDate },
    });

    if ('error' in isAdd) {
      openNotificationWithIcon('error', isAdd.error.data.message);
    } else {
      openNotificationWithIcon('success', 'Результат успішно додано!');
      if (isAdd.data.updatedData.status === 'finished') {
        setIsFinished(true);
      }
      return true;
    }
  };

  const getPlanPagesData = () => {
    return data.training.statistics.reduce(
      (accumulator, { statisticsPages, book }) => {
        if (statisticsPages.initialPage !== 0) {
          return (accumulator += statisticsPages.initialPage);
        }
        return (accumulator += book.pages);
      },
      0
    );
  };

  const getPlanDateArray = () => {
    const { start, finish } = data.training;
    if (!!start && !!finish) {
      const dates = [];
      let startDate = new Date(start);

      while (startDate <= new Date(finish)) {
        dates.push(startDate.toISOString().slice(0, 10));
        startDate = new Date(startDate.getTime() + 86400000);
      }

      return dates;
    }
  };

  const getResultData = () => {
    const results = getResult();
    const getData = results.map(({ result }) => result);
    const uniqueDatesMap = new Map();

    getData.forEach(({ date, pages }) => {
      const currentDate = new Date(date);
      const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;

      if (uniqueDatesMap.has(dateKey)) {
        const existingPages = uniqueDatesMap.get(dateKey);
        uniqueDatesMap.set(dateKey, existingPages + pages);
      } else {
        uniqueDatesMap.set(dateKey, pages);
      }
    });
    const totalData = Array.from(uniqueDatesMap);
    return totalData.map(data => ({ date: data[0], pages: data[1] }));
  };

  const onCloseWellDone = () => {
    navigate({ pathname: `/goals` });
  };

  return {
    data,
    isLoading,
    getTimerTitle,
    getTimerDate,
    getBooksQuantity,
    getDateQuantity,
    getLeftBooksQuantity,
    getBooks,
    isMobile,
    isTablet,
    isDesktop,
    onResultAdd,
    getResult,
    getPlanPagesData,
    getPlanDateArray,
    getResultData,
    isFinished,
    calculateBookProgress,
    onCloseWellDone,
  };
};

export default useGoalById;
