import styled from 'styled-components';
import device from 'styles/device';
import theme from 'styles/theme';

export const TimersMainWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    margin-top: 40px;
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    justify-content: center;
  }

  @media ${device.desktop} {
    margin-top: 0;
    display: flex;
  }
`;

export const TimerWrapper = styled.div`
  width: 280px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 290px;
  }
`;

export const TimerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.goals};

  @media ${device.mobile} {
    height: 60px;
  }

  @media ${device.tablet} {
    height: 60px;
  }

  @media ${device.desktop} {
    height: 60px;
  }
`;

export const TimerHeader = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.secondaryFontColor};
  text-align: center;

  margin-bottom: 8px;
`;

export const Timer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 20px;
  padding-left: 20px;
  & > span {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    color: ${theme.colors.timer};
  }
`;

export const TimerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerNumber = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  color: ${theme.colors.timer};
`;

export const TimerText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${theme.colors.secondaryFontColor};
`;
