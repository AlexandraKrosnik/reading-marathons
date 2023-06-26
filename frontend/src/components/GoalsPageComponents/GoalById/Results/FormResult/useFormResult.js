import { useEffect, useState } from 'react';

import { Form } from 'antd';
const useFormResult = (onSubmit, data) => {
  const [options, setOptions] = useState();
  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      const optionsData = data.books.map(({ id, title }) => ({
        value: id,
        label: title,
      }));
      setOptions(optionsData);
    }
  }, [data]);

  const onFinish = data => {
    onSubmit({ ...data, pages: Number(data.pages) }).then(result => {
      console.log('result', result);
      if (result) form.resetFields();
    });
  };
  return { form, onFinish, options };
};

export default useFormResult;
