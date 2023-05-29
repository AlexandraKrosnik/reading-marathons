import {
  NumberContainer,
  List,
  Item,
  Number,
  Text,
  Title,
  Section,
} from './MyGoal.styled';
import React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useGetTrainingsQuery,
  useGetStatisticsByIdQuery,
} from 'redux/RTKQuery/booksApi';

const MyGoal = ({ days = 0, books = 0 }) => {
  const [noBooksLeft, setNoBooksLeft] = useState(true);
  const data = [];
  const booksLeft = undefined;

  // const { data: trainings } = useGetTrainingsQuery();
  // const statisticsId = trainings?.training[0]?.statistics;

  // const data = useGetStatisticsByIdQuery(statisticsId, {
  //   skip: !statisticsId,
  // });

  // // const books = data?.data?.statistic?.bookAmount;
  // // const days = data?.data?.statistic?.dayAmount;
  // const booksLeft = data?.data?.statistic?.leftBooks;

  useEffect(() => {
    booksLeft && booksLeft !== undefined && booksLeft !== 0
      ? setNoBooksLeft(false)
      : setNoBooksLeft(true);
  }, [booksLeft]);
  return (
    <>
      <ThemeProvider theme={{ noBooksLeft }}>
        <Section>
          <Title>Моя мета прочитати</Title>
          <NumberContainer>
            <List>
              <Item>
                <Number>{books ? books : 0}</Number>
                <Text>Кількість книжок</Text>
              </Item>
              <Item>
                <Number>{days ? days : 0}</Number>
                <Text>Кількість днів</Text>
              </Item>
              {booksLeft !== undefined && booksLeft !== 0 && (
                <Item>
                  <Number primary>{booksLeft ? booksLeft : 0}</Number>
                  <Text>Залишилоcь книжок</Text>
                </Item>
              )}
            </List>
          </NumberContainer>
        </Section>
      </ThemeProvider>
    </>
  );
};

export default MyGoal;
