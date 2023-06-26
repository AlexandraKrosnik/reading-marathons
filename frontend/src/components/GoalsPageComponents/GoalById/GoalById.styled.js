import theme from 'styles/theme';
import styled from 'styled-components';
import device from 'styles/device';

export const StyledContainer = styled.div`
  padding: 24px 0;
  @media ${device.desktop} {
    display: flex;

    gap: 40px 20px;
  }
`;
export const TimerListWrapper = styled.div`
  @media screen and (max-width: ${p => p.theme.breakpoints.tablet}) {
    & > div:first-child {
      margin-bottom: 24px;
    }
  }
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    align-items: flex-start;
    justify-content: center;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    & > div:first-child {
      margin-right: 32px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 928px;
    height: fit-content;

    & > div:first-child {
      margin-right: 74px;
    }
  }
`;

export const MyGoalStyled = styled.div`
  width: fit-content;
  @media ${device.mobile} and (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 40px;
  }

  @media ${device.desktop} {
    margin-bottom: 36px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.desktop} {
  }
`;
