import styled from 'styled-components';

export const StyledList = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }

  & li:not(:last-child) {
    margin-bottom: 20px;
  }

  & .step-text {
    display: flex;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.21;

    & svg {
      margin-right: 12px;
    }
  }

  & .sup-step-text {
    display: flex;
    align-items: baseline;
    padding-left: 34px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;

    & span {
      display: block;
      width: 10px;
      margin-right: 8px;
    }
  }
`;

export const StyledStepText = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 19px;
    margin-bottom: 16px;
    margin-top: ${props => props.marTopTablet};
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};
  padding: 30px 20px;
  width: 280px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px;
    width: 608px;
  }
`;
