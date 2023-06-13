import { FilterOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import styled from 'styled-components';

export const DropdownStyled = styled(Dropdown)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--ant-primary-5); */
  width: 35px;
  height: 100%;
  /* border-top-right-radius: 10%;
  border-bottom-right-radius: 10%; */

  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const FilterIconStyled = styled(Button)`
  border: none;
  border-left: 1px #d9d9d9 solid;
  border-radius: 0 10% 10% 0;
  & > svg {
    height: 16px;
    width: 16px;
    color: var(--ant-primary-6);
  }
`;
