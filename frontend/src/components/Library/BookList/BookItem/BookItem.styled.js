import styled from 'styled-components';

import { Progress, Badge, Button } from 'antd';

export const StyledTitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 19px;
  line-height: 1.2;

  margin-bottom: 20px;
`;

export const StyledItem = styled.li`
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.header};
  border-radius: 5px;

  color: ${p => p.theme.colors.mainFontColor};
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 320px;
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 280px;
  }
`;

export const StyledBadge = styled(Badge)`
  display: flex;

  padding: 20px 10px 15px 8px;
  height: 100%;
`;

export const StyledIconBox = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledAuthBox = styled.div`
  /* padding-left: 10px; */
`;

export const StyledImage = styled.img`
  max-width: 90px;
  height: 110px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    max-width: 110px;
  }
`;
export const StyledAuthText = styled.p`
  font-size: 10px;
  color: ${p => p.theme.colors.secondaryFontColor};
`;

export const StyledBookTitle = styled.h3`
  font-family: 'Montserrat';
  /* display: inline; */
  font-weight: 800;
  font-size: 12px;
  line-height: 1.25;
  cursor: pointer;
  margin-bottom: 7px;
`;

export const StyledProgress = styled(Progress)`
  cursor: default;
  .ant-progress-outer {
    padding-right: calc(2em);
  }
  .ant-progress-text {
    width: auto;
    font-size: 10px;
    margin-left: 12px;
  }
`;
export const StyledLS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLSTop = styled.div`
  padding-top: 10px;
  margin-bottom: 10px;
`;
export const Box = styled.div`
  display: flex;
  align-items: flex-top;
  cursor: default;
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
`;

export const PropertyName = styled(StyledText)`
  color: ${p => p.theme.colors.secondaryFontColor};
  width: 45px;
  margin-right: 15px;
`;
export const StyledButton = styled(Button)`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  min-height: 40px;
  min-width: 127px;
  border: none;
  border-radius: 0;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.btnBackground};
  box-shadow: ${p => p.theme.shadows.instrustion};
  margin-left: 18px;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondaryFontColor};
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    min-width: 130px;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  .anticon[tabindex] {
    height: fit-content;
    margin-left: 10px;
  }
`;
