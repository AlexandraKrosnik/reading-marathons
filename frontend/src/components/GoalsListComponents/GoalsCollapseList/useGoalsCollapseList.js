import { useEffect, useState } from 'react';
import { useGetTrainingsQuery } from 'redux/RTKQuery/booksApi';

const useGoalsCollapseList = () => {
  const { data } = useGetTrainingsQuery();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [planTrainings, setPlanTrainings] = useState([]);
  const [activeTrainings, setActiveTrainings] = useState([]);
  const [finishedTrainings, setFinishedTrainings] = useState([]);

  const PLAN = 'planned';
  const ACTIVE = 'active';
  const FINISHED = 'finished';

  useEffect(() => {
    const updateTrainingState = (prevState, training) => {
      const isInclude = prevState.find(tr => tr?._id === training?._id);
      if (isInclude) {
        return prevState;
      }
      return [...prevState, { ...training, key: training?._id }];
    };
    if (data && isFirstRender) {
      data.trainings.forEach(training => {
        switch (training.status) {
          case PLAN: {
            setPlanTrainings(prevState =>
              updateTrainingState(prevState, training)
            );
            break;
          }
          case ACTIVE: {
            setActiveTrainings(prevState =>
              updateTrainingState(prevState, training)
            );
            break;
          }
          case FINISHED: {
            setFinishedTrainings(prevState =>
              updateTrainingState(prevState, training)
            );
            break;
          }
          default:
            break;
        }
      });
      setIsFirstRender(false);
    }
  }, [data, isFirstRender]);

  return {
    planTrainings,
    activeTrainings,
    finishedTrainings,
    PLAN,
    ACTIVE,
    FINISHED,
    data,
  };
};

export default useGoalsCollapseList;
