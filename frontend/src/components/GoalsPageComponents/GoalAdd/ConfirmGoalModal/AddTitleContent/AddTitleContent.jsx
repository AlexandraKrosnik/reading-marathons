import { Typography } from 'antd';
import {
  InputErrorTextStyled,
  InputTitleStyled,
} from './AddTitleContent.styled';

const { Text } = Typography;
const AddTitleContent = ({ onChange, value, is_error }) => {
  return (
    <>
      <p>
        Дайте назву челенджу:<Text style={{ color: 'red' }}> * </Text>
      </p>
      <InputTitleStyled
        placeholder="Назва..."
        onChange={onChange}
        value={value}
        is_error={is_error.toString()}
      />
      {is_error && (
        <InputErrorTextStyled>Назва обов'язкова!</InputErrorTextStyled>
      )}
    </>
  );
};

export default AddTitleContent;
