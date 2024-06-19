import {
  Box,
  FormItem,
  StyledButtonBox,
  StyledButton,
  StyledForm,
  StyledInput,
  Wrapper,
  StyledInputNumber,
} from './BookForm.styled';
import UploadImages from 'components/UploadImage';
import { Divider, Radio, Select, Space, message } from 'antd';
import {
  useAddCollectionMutation,
  useGetCollectionAllQuery,
} from 'redux/RTKQuery/booksApi';

import useForm from './useForm';
import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import "./bookForm.css";

const BookForm = ({ action }) => {
  const {
    options,
    form,
    onAdd,
    Fields,
    yupSync,
    isLoading,
    setSelectedFile,
    isAddCompleted,
    onStatusChange,
    isDisabledReadTimes,
    isChange,
    data,
    onValuesChange,
    isDisabledButton,
    initialImage,
    showConfirmUpdate,
  } = useForm(action);


  const [newOption, setNewOption] = useState('');
  const [addCollection] = useAddCollectionMutation();


  const addNewCollection = async (e) => {
    const result = await addCollection({ name: newOption });

    if ('error' in result) {
      message.error(result.error.data.message);
    } else {
      message.success('Колекцію успішно додано!');
      setNewOption('');
    }
  };

  return (
    <StyledForm
      form={form}
      layout="vertical"
      onFinish={isChange ? showConfirmUpdate : onAdd}
      autoComplete="off"
      initialValues={{
        readTimes: 0,
        status: data?.book?.status === 'now' ? 'now' : 'plan',
      }}
      onValuesChange={onValuesChange}
    >
      <Wrapper>
        <UploadImages
          name={Fields.image.name}
          onChange={setSelectedFile}
          isAdd={isAddCompleted}
          url={initialImage}
        />

        <Box>
          <FormItem
            name={Fields.title.name}
            label={Fields.title.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.author.name}
            label={Fields.author.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.publication.name}
            label={Fields.publication.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.pages.name}
            label={Fields.pages.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.collections.name}
            label={Fields.collections.label}
            rules={[yupSync]}
          >
            <Select
              placeholder="Виберіть назву колекцій"
              mode="multiple"
              options={options}
              placement="bottomLeft"
              dropdownRender={menu => (
                <>
                  {menu}
                  <Divider
                    style={{
                      margin: '8px 0',
                    }}
                  />
                  <Space
                    style={{
                      padding: '0 8px 4px',
                    }}
                  ></Space>
                  <div className='select-input__add-new-option'>
                  <StyledInput
                    placeholder="..."
                    value={newOption}
                    onChange={e => {
                      setNewOption(e.target.value);
                    }}
                  />
                  <StyledButton
                    type="text"
                    icon={<PlusOutlined />}
                    onClick={addNewCollection}
                  >Додати колекцію</StyledButton>
                  </div>
                </>
              )}
            />
          </FormItem>
          <FormItem
            name={Fields.readTimes.name}
            label={Fields.readTimes.label}
            rules={[yupSync]}
          >
            <StyledInputNumber min={1} disabled={isDisabledReadTimes} />
          </FormItem>
          <FormItem
            name={Fields.status.name}
            label={Fields.status.label}
            rules={[yupSync]}
          >
            <Radio.Group onChange={onStatusChange}>
              {isChange && data?.book?.status === 'now' ? (
                <Radio value="now"> Читаю </Radio>
              ) : (
                <>
                  <Radio value="already"> Прочитана </Radio>
                  <Radio value="plan"> Не прочитана </Radio>
                </>
              )}
            </Radio.Group>
          </FormItem>
          {isChange && <></>}
        </Box>
      </Wrapper>
      <StyledButtonBox>
        <StyledButton
          disabled={isLoading || isDisabledButton}
          htmlType="submit"
        >
          {isChange ? 'Редагувати' : 'Додати'}
        </StyledButton>
      </StyledButtonBox>
    </StyledForm>
  );
};

export default BookForm;
