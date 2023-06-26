import PropTypes from 'prop-types';
import {
  TrainingFormWrapper,
  StyledHeading,
  StyledForm,
  StyledDatePicker,
  StyledSelect,
  SubmitButton,
  CalendarWrapper,
  FlexWrapper,
  StyledInputWrapper,
} from './FormAdd.styled';
import useFormAdd from './useFormAdd';
import moment from 'moment';

const FormAdd = ({
  books,
  selectedBooks,
  startTime,
  finishTime,
  setStartTime,
  setFinishTime,
}) => {
  const {
    Form,
    form,
    handleSubmit,
    validateMessages,
    disabledStartDate,
    disabledFinishDate,
    selectContent,
    onSearchBook,
  } = useFormAdd(selectedBooks, startTime, books);

  return (
    <TrainingFormWrapper>
      <StyledHeading>Моє тренування</StyledHeading>
      <StyledForm
        form={form}
        onFinish={handleSubmit}
        validateMessages={validateMessages}
        initialValues={{
          start: startTime ? moment(startTime, 'YYYY-MM-DD HH:mm:ss') : null,
          finish: finishTime ? moment(finishTime, 'YYYY-MM-DD HH:mm:ss') : null,
        }}
      >
        <CalendarWrapper>
          <Form.Item name="start">
            <StyledDatePicker
              onChange={(_, dateString) => {
                setStartTime(dateString);
              }}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledStartDate}
              showTime
              placeholder="Початок"
              style={{
                margin: '0 20px 0 0',
              }}
              inputReadOnly
            />
          </Form.Item>
          <Form.Item name="finish">
            <StyledDatePicker
              onChange={(_, dateString) => {
                setFinishTime(dateString);
              }}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledFinishDate}
              showTime
              placeholder="Завершення"
              disabled={!startTime}
              showNow={false}
              inputReadOnly
            />
          </Form.Item>
        </CalendarWrapper>
        <FlexWrapper>
          <StyledInputWrapper
            name="books"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <StyledSelect
              mode="multiple"
              showArrow={true}
              placeholder="Обрати книги з бібліотеки"
              maxTagCount="responsive"
              allowClear
              filterOption={onSearchBook}
            >
              {books && selectContent()}
            </StyledSelect>
          </StyledInputWrapper>
          <Form.Item>
            <SubmitButton htmlType="submit">Додати</SubmitButton>
          </Form.Item>
        </FlexWrapper>
      </StyledForm>
    </TrainingFormWrapper>
  );
};

FormAdd.propTypes = {
  books: PropTypes.array.isRequired,
  selectedBooks: PropTypes.func.isRequired,
  startTime: PropTypes.string,
  finishTime: PropTypes.string,
  setStartTime: PropTypes.func.isRequired,
  setFinishTime: PropTypes.func.isRequired,
};

export default FormAdd;
