import moment from 'moment';
import 'moment/locale/uk';
const useProgressChart = (planData, resultData) => {
  const dates =
    planData &&
    planData.dates?.map(item => {
      return moment(item).locale('uk').format('DD.MM/dd.');
    });

  const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  function getPageCounts() {
    if (!!planData?.dates) {
      const days = planData.dates.length;
      const averagePageCount = Math.ceil(planData.pages / days);
      const pageCountArray = new Array(days).fill(averagePageCount);
      const remainder = planData.pages % days;
      for (let i = 0; i < remainder; i++) {
        pageCountArray[i]++;
      }
      return pageCountArray;
    }
  }

  const transPlanDateToDate = dateString => {
    const [year, month, day] = dateString.split('-');

    return new Date(year, month - 1, day);
  };
  const transResultDateToDate = dateString => {
    const [year, month, day] = dateString.split('-');

    return new Date(year, month, day);
  };

  const getResultPages = () => {
    return planData.dates
      ?.map(date => {
        const date1 = transPlanDateToDate(date);
        const currentDate = new Date();
        const isSame = resultData?.find(({ date: resultDate }) => {
          const date2 = transResultDateToDate(resultDate);

          return isSameDate(date1, date2);
        });

        if (currentDate > date1) {
          return isSame ? isSame.pages : 0;
        }
        return undefined;
      })
      .filter(value => value !== undefined);
  };

  const labels = dates;
  const options = {
    type: 'shadowLine',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Мій прогрес',
      },
      transitions: {
        zoom: {
          animation: {
            duration: 1000,
            easing: 'easeOutCubic',
          },
        },
      },
    },
    scales: {
      y: {
        grid: { display: false },
        ticks: {
          beginAtZero: true,
        },
        min: 0,
        max: !!getPageCounts() && getPageCounts()[1] * 2,
      },
      x: {
        min: 0,
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'План',
        data: getPageCounts(),
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        borderWidth: 2,
        borderJoinStyle: 'round',
        cubicInterpolationMode: 'default',
        tension: 0.4,
      },
      {
        label: 'Факт',
        data: getResultPages(),
        borderColor: ' #FF6B08',
        backgroundColor: '#FF6B08',
        borderWidth: 2,
        borderJoinStyle: 'round',
        cubicInterpolationMode: 'default',
        tension: 0.4,
      },
    ],
  };

  return { options, data };
};

export default useProgressChart;
