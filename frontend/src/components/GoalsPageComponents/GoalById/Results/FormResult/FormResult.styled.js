import theme from 'styles/theme';
import styled from 'styled-components';
import device from 'styles/device';
import { Form, DatePicker, Button, Select } from 'antd';
export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 21px;
  }

  & .ant-form-item {
    margin: 0;
  }

  & .ant-form-item:not(:last-child) {
    margin-right: 18px;
  }
`;
export const BooksContainer = styled.div`
  width: 100%;
  & .ant-form-item {
    width: 100%;
  }
  & .ant-form-item-row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  & .ant-form-item-control-input {
    min-width: 100%;
    border-radius: 4px;
  }
  & .ant-col-10 {
    max-width: 100%;
    flex-grow: 1;
  }
`;

export const SelectStyled = styled(Select)`
  width: 100%;
`;
export const LabelList = styled.div`
  display: flex;

  margin-bottom: 20px;
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    margin-right: 32px;
    margin-bottom: 0;
  }
  & .ant-form-item-row .ant-col-10 {
    max-width: 110px;
    width: 110px;
    margin: 0;
  }
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    & .ant-form-item-row .ant-col-10 {
      max-width: 150px;
      width: 150px;
    }
  }
`;
export const DataPickerStyled = styled(DatePicker)`
  width: 110px;

  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    width: 150px;
  }
`;
export const Label = styled(Form.Item)`
  .ant-form-item-label > label {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    height: 13px;
  }
  .ant-col-24.ant-form-item-label {
    padding: 0;
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional):before {
    display: none;
  }
  .ant-form-item-explain {
    font-size: 10px;
  }
  .ant-input,
  .ant-picker-input > input {
    font-size: 10px;
  }
  .ant-picker,
  .ant-input {
    padding: 11px;
  }
`;

export const BottomDivStyled = styled.div`
  width: 100%;
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
    align-items: flex-end;
    margin-bottom: 21px;
    & .ant-row {
      display: block;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  min-height: 40px;
  padding: 5px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.21;
  background: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.instrustion};
  transition: ${({ theme }) => theme.transition};

  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    min-width: 180px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
    border: none;
  }
`;
