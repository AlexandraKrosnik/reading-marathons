import { useMatchMedia } from 'hooks';
import {
  HeaderBackground,
  SearchStyled,
  ContainerStyled,
  ButtonStyled,
} from './GoalsHeader.styled';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const GoalsHeader = () => {
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate({ pathname: '/goals/addGoal' });
  };
  return (
    <HeaderBackground>
      <ContainerStyled>
        <SearchStyled placeholder="Search goal..." />
        <ButtonStyled
          type="primary"
          icon={<PlusOutlined />}
          onClick={onButtonClick}
        >
          {!isMobile && 'Додати ціль'}
        </ButtonStyled>
      </ContainerStyled>
    </HeaderBackground>
  );
};

export default GoalsHeader;
