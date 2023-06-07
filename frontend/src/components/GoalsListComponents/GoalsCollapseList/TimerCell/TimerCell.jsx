import moment from 'moment';
import { useEffect, useState } from 'react';
import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';

const TimerCell = ({ startDateTime }) => {
  const [timeDiff, setTimeDiff] = useState();
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = moment();
      const startDate = moment(startDateTime);
      const duration = moment.duration(startDate.diff(currentTime));
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const formattedTimeDiff = ` ${days}днів ${hours}год ${minutes}хв`;
      setTimeDiff(formattedTimeDiff);
    }, 1000); // оновлення кожну секунду

    return () => {
      clearInterval(timer); // зупинка таймера при розмонтуванні компонента
    };
  }, [startDateTime]);
  return (
    <>
      {timeDiff && (
        <>
          <ClockCircleOutlined />
          <span>{timeDiff}</span>
        </>
      )}
      {!timeDiff && <LoadingOutlined />}
    </>
  );
};

export default TimerCell;
