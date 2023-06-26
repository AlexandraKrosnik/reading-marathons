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
import { Line } from 'react-chartjs-2';
import { Container, GraphContainer } from './ProgressChart.styled';
import useProgressChart from './useProgressChart';

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

export default function ProgressChart({ planData, resultData }) {
  const { options, data } = useProgressChart(planData, resultData);
  return (
    <>
      {planData?.pages && planData?.dates && (
        <Container>
          <GraphContainer>
            <Line options={options} data={data} />
          </GraphContainer>
        </Container>
      )}
    </>
  );
}
