import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import moment from 'moment';

import 'moment/locale/uk';
import { Line } from 'react-chartjs-2';

import { Container, GraphContainer } from './ProgressChart.styled';

import { useGetTrainingByIdQuery } from 'redux/RTKQuery/booksApi';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export default function ProgressChart({ getPagesCount, getDatesBetweenDates }) {
  const id = '';
  const { data: trainings } = useGetTrainingByIdQuery(id);

  const statisticsId = trainings?.training[0]?.statistics;

  // const planAmountOfPages = stats?.data?.statistic?.plan?.map(item => {
  //   return item.pages;
  // });
  // const realAmountOfPages = stats?.data?.statistic?.result?.map(item => {
  //   return item.pages;
  // });

  // const dates = stats?.data?.statistic?.plan?.map(item => {
  //   return moment(item.date).locale('uk').format('DD.MM/dd.');
  // });

  const dates =
    getDatesBetweenDates &&
    getDatesBetweenDates.map(item => {
      return moment(item).locale('uk').format('DD.MM/dd.');
    });

  function getPageCounts() {
    if (!!getDatesBetweenDates) {
      const days = getDatesBetweenDates.length;
      const averagePageCount = Math.ceil(getPagesCount / days);
      const pageCountArray = new Array(days).fill(averagePageCount);
      const remainder = getPagesCount % days;
      for (let i = 0; i < remainder; i++) {
        pageCountArray[i]++;
      }
      return pageCountArray;
    }
  }

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
        // data: realAmountOfPages,
        borderColor: ' #FF6B08',
        backgroundColor: '#FF6B08',
        borderWidth: 2,
        borderJoinStyle: 'round',
        cubicInterpolationMode: 'default',
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      {getPagesCount && getDatesBetweenDates && (
        <Container>
          <GraphContainer>
            <Line options={options} data={data} />
          </GraphContainer>
        </Container>
      )}
    </>
  );
}
