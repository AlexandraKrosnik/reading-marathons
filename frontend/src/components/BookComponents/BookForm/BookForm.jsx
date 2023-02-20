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
import { Radio } from 'antd';

import useForm from './useForm';

const BookForm = ({ action }) => {
  const {
    form,
    onAdd,
    Fields,
    yupSync,
    isLoading,
    setSelectedFile,
    isAddCompleted,
    onChangeStatus,
    disabledReadTimes,
    isChange,
    data,
  } = useForm(action);

  return (
    <StyledForm
      form={form}
      layout="vertical"
      onFinish={onAdd}
      autoComplete="off"
      initialValues={{
        readTimes: 0,
        status: data?.book?.status === 'now' ? 'now' : 'plan',
      }}
    >
      <Wrapper>
        <UploadImages
          onChange={setSelectedFile}
          isAdd={isAddCompleted}
          url={data?.book?.image?.url}
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
            name={Fields.status.name}
            label={Fields.status.label}
            rules={[yupSync]}
          >
            <Radio.Group onChange={onChangeStatus}>
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
          <FormItem
            name={Fields.readTimes.name}
            label={Fields.readTimes.label}
            rules={[yupSync]}
          >
            <StyledInputNumber min={1} disabled={disabledReadTimes} />
          </FormItem>
          {isChange && <></>}
        </Box>
      </Wrapper>
      <StyledButtonBox>
        <StyledButton disabled={isLoading} htmlType="submit">
          {isChange ? 'Редагувати' : 'Додати'}
        </StyledButton>
      </StyledButtonBox>
    </StyledForm>
  );
};

export default BookForm;
