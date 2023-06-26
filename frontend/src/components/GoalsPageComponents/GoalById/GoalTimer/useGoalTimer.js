import { useCallback } from 'react';
import { useState, useEffect } from 'react';
const useGoalTimer = referenceDate => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const DAYS = 'days',
    HOURS = 'hours',
    MINUTES = 'minutes',
    SECONDS = 'seconds';

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  const getTimeLeft = (latestDate, earliestDate) => latestDate - earliestDate;
  const computeTimeUnits = timeLeft => {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };
  const getTime = useCallback(() => {
    const currentDate = new Date();
    let endDate = new Date(referenceDate);

    const timeLeft = getTimeLeft(endDate, currentDate);
    if (timeLeft < 0) {
      return;
    }
    const calculateTimeParts = computeTimeUnits(timeLeft);
    setTimeRemaining({
      ...calculateTimeParts,
    });
  }, [referenceDate]);

  const getDatePart = type => addLeadingZero(timeRemaining[type]);
  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [getTime]);

  return {
    DAYS,
    HOURS,
    MINUTES,
    SECONDS,
    getDatePart,
  };
};

export default useGoalTimer;
