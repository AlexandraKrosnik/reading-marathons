import { Button, Tabs } from 'antd';
import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px 0;
  font-family: 'Montserrat';
`;

export const StyledTabs = styled(Tabs)`
  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    .ant-tabs-tab {
      font-size: 11px;
    }
    .ant-tabs-tab + .ant-tabs-tab {
      margin: 0 0 0 23px;
    }
  }
`;

export const AddBtn = styled(Button)`
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  border-radius: 50%;

  position: fixed;
  bottom: 26px;
  left: calc(50% - 26px);
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    left: 87%;
    bottom: 35px;
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    bottom: 50px;
  }
`;

export const TextStyledPrimary = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const TextStyled = styled.span`
  font-family: 'Montserrat';
  display: inline-block;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 20px;

  color: ${p => p.theme.colors.secondaryFontColor};
`;
