import { Button, Tabs, Collapse } from 'antd';
import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px 0;
  font-family: 'Montserrat';
`;

export const StyledButton = styled(Button)`
  display: block;
  min-width: 200px;
  min-height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
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

export const MobileAddBtn = styled(Button)`
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  border-radius: 50%;

  position: fixed;
  bottom: 12px;
  left: calc(50% - 26px);
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

export const CollapseStyled = styled(Collapse)`
  border: none;
  background-color: inherit;
  .ant-collapse-item:last-child > .ant-collapse-content {
    background-color: inherit;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  }
`;
