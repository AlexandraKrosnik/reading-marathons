import { useEffect, useState } from 'react';
import {
  useGetTrainingByIdQuery,
  useUpdateTrainingByIdMutation,
} from 'redux/RTKQuery/booksApi';

import openNotificationWithIcon from 'components/Notification';
import { Form } from 'antd';
const useResult = () => {
  const [form] = Form.useForm();
  const [results, setResults] = useState();
  const [statisticId, setStatisticId] = useState(undefined);
  const { data: training } = useGetTrainingByIdQuery();
  // const { data: statistic } = useGetStatisticsByIdQuery(statisticId, {
  //   skip: typeof statisticId !== 'string',
  // });
  const [updateStatisticsById] = useUpdateTrainingByIdMutation();

  useEffect(() => {
    if (training?.training.length !== 0) {
      setStatisticId(training?.training[0].statistics);
      // setResults(statistic?.statistic.result);
    }
  }, [training?.training]);

  const onSubmit = async ({ date, pages }) => {
    const newDate = new Date(date.utc());
    const update = await updateStatisticsById({
      id: statisticId,
      data: { date: newDate, pages: Number(pages) },
    });
    if ('error' in update) {
      openNotificationWithIcon('error', update.error.data.message);
    } else {
      openNotificationWithIcon('success', 'Результат успішно додано!');
    }
    form.resetFields();
  };
  return { onSubmit, results, form, training };
};

export default useResult;
