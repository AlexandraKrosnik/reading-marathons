import styled from 'styled-components';
import { Table, Progress, List, Space } from 'antd';
import { BookOutlined } from '@ant-design/icons';
export const TableStyled = styled(Table)`
  & .ant-table-body {
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  }
  & .ant-table-thead {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
  & .ant-table-thead > tr > th {
    padding: 10px 16px;
  }

  & .ant-table-body {
    max-height: 150px;
  }
  & .ant-table-tbody > tr > td:first-child {
    padding: 10px;
    width: 50px;
  }
`;

export const BookOutlinedStyled = styled(BookOutlined)`
  &[data-status='active'] {
    color: ${p => p.theme.colors.accentColor};
  }
  &[data-status='finished'] {
    color: rgb(211, 211, 211);
  }
  &[data-status='planned'] {
    color: rgb(107, 201, 80);
  }
  & > svg {
    width: 30px;
    height: 34px;
  }
`;

export const StatusColumnStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressStyled = styled(Progress)`
  margin-right: 10px;
  &[data-status='list'] > .ant-progress-inner {
    width: 20px !important;
    height: 20px !important;
    font-size: 8px !important;
  }
  & > .ant-progress-inner {
    width: 35px !important;
    height: 35px !important;
    font-size: 14px !important;
  }
  .ant-progress-text {
  }
`;

export const ListStyled = styled(List)`
  overflow-y: auto;
  font-size: 12px;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
  & .ant-list-items {
    height: 90px;
    max-height: 100px;
  }
`;

export const ListItemStyled = styled(List.Item)`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  padding: 5px 0;
`;

export const FilterStyled = styled.div`
  /* @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 80%;
  } */
`;

export const FilterSpaceStyled = styled(Space)`
  /* @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 80%;
  } */
`;
