import moment from 'moment';
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import {
  TimerCellStyled,
  TimerCellTextStyled,
  ClockCircleOutlinedStyled,
} from './TimerCell.styled';
import PropTypes from 'prop-types';
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

      setTimeDiff([days, hours, minutes]);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startDateTime]);

  return (
    <TimerCellStyled>
      {!timeDiff && <LoadingOutlined />}
      {timeDiff && (
        <>
          <ClockCircleOutlinedStyled />
          <TimerCellTextStyled>
            <span>{timeDiff[0]}днів</span>
            <span>{timeDiff[1]}год</span>
            <span>{timeDiff[2]}хв</span>
          </TimerCellTextStyled>
        </>
      )}
    </TimerCellStyled>
  );
};
TimerCell.propTypes = {
  startDateTime: PropTypes.string.isRequired,
};

export default TimerCell;
