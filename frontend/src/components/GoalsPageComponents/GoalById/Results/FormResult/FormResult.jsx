import moment from 'moment';
import {
  Label,
  FormStyled,
  LabelList,
  DataPickerStyled,
  ButtonStyled,
  BooksContainer,
  SelectStyled,
  BottomDivStyled,
} from './FormResult.styled';
import useFormResult from './useFormResult';
import { Input } from 'antd';
const FormResult = ({ onSubmit, data }) => {
  const { form, onFinish, options } = useFormResult(onSubmit, data);
  return (
    <>
      {data && (
        <FormStyled
          form={form}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="vertical"
          onFinish={onFinish}
        >
          <BooksContainer>
            <Label
              name="book"
              label="Книга"
              rules={[
                {
                  required: true,
                  message: 'Please choose book!',
                },
              ]}
            >
              <SelectStyled
                mode="selectBooks"
                placement="bottomRight"
                placeholder="Книги"
                options={options}
              />
            </Label>
          </BooksContainer>
          <BottomDivStyled>
            <LabelList>
              <Label
                name="date"
                label="Дата"
                rules={[
                  {
                    required: true,
                    message: 'Please input date!',
                  },
                ]}
              >
                <DataPickerStyled
                  placeholder=""
                  disabledDate={current => {
                    const startDate = moment(data.start);
                    const finishDate = moment(data.finish);
                    const today = moment().startOf('day');

                    return (
                      current.isBefore(startDate, 'day') ||
                      (current.isAfter(finishDate, 'day') &&
                        !current.isSame(today, 'day')) ||
                      current.isAfter(today, 'day')
                    );
                  }}
                />
              </Label>
              <Label
                name="pages"
                label="К-сть сторінок"
                rules={[
                  {
                    required: true,
                    message: 'Please input pages!',
                  },
                ]}
              >
                <Input autoComplete="off" />
              </Label>
            </LabelList>
            <ButtonStyled htmlType="submit">Додати</ButtonStyled>
          </BottomDivStyled>
        </FormStyled>
      )}
    </>
  );
};

export default FormResult;
