import { useEffect, useState } from 'react';
import { useGetTrainingsQuery } from 'redux/RTKQuery/booksApi';
const useGoalsCollapseList = () => {
  const { data, isLoading, isError, isSuccess } = useGetTrainingsQuery();
  const [planTrainings, setPlanTrainings] = useState();
  const [activeTrainings, setActiveTrainings] = useState();
  const [finishedTrainings, setFinishedTrainings] = useState();
  useEffect(() => {
    if (data) {
      data.trainings.map(training => {});
    }
  }, []);

  console.log(data);

  return { data };
};

export default useGoalsCollapseList;
