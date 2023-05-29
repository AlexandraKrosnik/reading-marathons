import { Checkbox } from 'antd';

import { InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const SelectBooksStyled = styled.div`
  position: relative;
`;

export const SelectBooksTitleStyled = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export const CheckboxGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxStyled = styled(Checkbox)`
  & + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`;

export const IconInfoStyled = styled(InfoCircleOutlined)`
  position: absolute;
  top: 5px;
  right: 0;
  color: ${p => p.theme.colors.accentColor};
`;
