import { Table, Progress } from 'antd';
import styled from 'styled-components';
import { ReactComponent as BookIcon } from 'images/svg/bookIconGrey.svg';

export const TableStyled = styled(Table)`
  width: 100%;

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 928px;
  }
  .ant-table-thead {
    height: 41px;

    border-top: 1px solid ${p => p.theme.colors.borderColor};
    border-bottom: 1px solid ${p => p.theme.colors.borderColor};

    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;

    color: ${p => p.theme.colors.secondaryFontColor};
  }
  .ant-table-thead > tr {
    height: 41px;

    border-top: 1px solid ${p => p.theme.colors.borderColor};
    border-bottom: 1px solid ${p => p.theme.colors.borderColor};

    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
  }

  .ant-table-thead > tr > th {
    position: relative;
    background-color: #f6f7fb;
    color: ${p => p.theme.colors.secondaryFontColor};
  }
  .ant-table-body {
    height: 200px;
    background-color: #f6f7fb;

    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background-color: #f6f7fb;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${p => p.theme.colors.placeholderFontColor};
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  }
  .ant-table-tbody > tr > td {
    background-color: #f6f7fb;
    vertical-align: baseline;
    padding: 14px;
    /* border: none; */

    @media screen and (max-width: ${p => p.theme.breakpoints.desktop}) {
      padding: 12px;
    }

    &:nth-child(1) {
      width: ${p => (p.theme.isAdd ? '40%' : '35%')};
      padding-left: 40px;
    }

    &:nth-child(2) {
      width: ${p => (p.theme.isAdd ? '24%' : '20%')};
    }
    &:nth-child(n + 3) {
      text-align: center;
      & > span {
        color: ${p => p.theme.colors.accentColor};
      }
    }
    &:last-child {
      width: ${p => (p.theme.isAdd ? '7%' : '14%')};
    }
  }
`;
export const StyledBookIcon = styled(BookIcon)`
  position: absolute;
  z-index: 10;
  top: 23px;
  left: 5px;
`;

export const ProgressStyled = styled(Progress)`
  & > div {
    width: 40px !important;
    height: 40px !important;
  }
  & .ant-progress-text {
    font-size: 0.5em;
  }
`;
