import { useMatchMedia } from 'hooks';
import React, { useState } from 'react';
import {
  HeaderBackground,
  SearchInputStyled,
  ContainerStyled,
  ButtonStyled,
  SearchStyled,
} from './GoalsHeader.styled';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import FilterTotalSearchDropdown from './FilterTotalSearchDropdown/FilterTotalSearchDropdown';

const GoalsHeader = ({ handleSearch }) => {
  const { isMobile } = useMatchMedia();

  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate({ pathname: '/goals/addGoal' });
  };

  return (
    <HeaderBackground>
      <ContainerStyled>
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
