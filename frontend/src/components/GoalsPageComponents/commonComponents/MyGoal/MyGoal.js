import {
  NumberContainerStyled,
  ListStyled,
  ItemStyled,
  NumberStyled,
  TextStyled,
  TitleStyled,
  SectionStyled,
} from './MyGoal.styled';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import useMyGoal from './useMyGoal';

const MyGoal = ({ days, books, booksLeft }) => {
  const { noBooksLeft } = useMyGoal(booksLeft);

  return (
    <>
      <ThemeProvider theme={{ noBooksLeft }}>
        <SectionStyled>
          <TitleStyled>Моя мета прочитати</TitleStyled>
          <NumberContainerStyled>
            <ListStyled>
              <ItemStyled>
                <NumberStyled>{books ? books : 0}</NumberStyled>
                <TextStyled>Кількість книжок</TextStyled>
              </ItemStyled>
              <ItemStyled>
                <NumberStyled>{days ? days : 0}</NumberStyled>
                <TextStyled>Кількість днів</TextStyled>
              </ItemStyled>
              {(booksLeft || booksLeft === 0) && (
                <ItemStyled>
                  <NumberStyled primary>{booksLeft}</NumberStyled>
                  <TextStyled>Залишилоcь книжок</TextStyled>
                </ItemStyled>
              )}
            </ListStyled>
          </NumberContainerStyled>
        </SectionStyled>
      </ThemeProvider>
    </>
  );
};

export default MyGoal;
