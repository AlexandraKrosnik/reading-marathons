import React from 'react';
import {
  TimerWrapper,
  TimerContainer,
  TimerHeader,
  Timer,
  TimerDisplay,
  TimerNumber,
  TimerText,
} from './GoalTimer.styled';
import useGoalTimer from './useGoalTimer';
import PropTypes from 'prop-types';

const GoalTimer = ({ title, referenceDate }) => {
  const { getDatePart, DAYS, HOURS, MINUTES, SECONDS } =
    useGoalTimer(referenceDate);
  return (
    <TimerWrapper>
      <TimerHeader>{title}</TimerHeader>
      <TimerContainer>
        <Timer>
          <TimerDisplay>
            <TimerNumber>{getDatePart(DAYS)}</TimerNumber>
            <TimerText>ДН</TimerText>
          </TimerDisplay>
          <span>:</span>
          <TimerDisplay>
            <TimerNumber>{getDatePart(HOURS)}</TimerNumber>
            <TimerText>ГОД</TimerText>
          </TimerDisplay>
          <span>:</span>
          <TimerDisplay>
            <TimerNumber>{getDatePart(MINUTES)}</TimerNumber>
            <TimerText>ХВ</TimerText>
          </TimerDisplay>

          <span>:</span>

          <TimerDisplay>
            <TimerNumber>{getDatePart(SECONDS)}</TimerNumber>
            <TimerText>СЕК</TimerText>
          </TimerDisplay>
        </Timer>
      </TimerContainer>
    </TimerWrapper>
  );
};

GoalTimer.propTypes = {
  title: PropTypes.string,
};

export default GoalTimer;
