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
  & .ant-table-body {
    max-height: 150px;
  }
  & .ant-table-tbody > tr > td,
  & .ant-table-thead > tr > th {
    padding: 10px 16px;
  }
  & .ant-table-tbody > tr > td:first-child {
    padding: 10px;
    width: 50px;
  }
  & .ant-table-tbody > tr > td:nth-child(3) {
    width: 300px;
  }
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    & .ant-table-tbody > tr > td,
    & .ant-table-thead > tr > th {
      padding: 7px 10px;
    }
    & .ant-table-tbody > tr > td {
      font-size: 10px;
    }
    & .ant-table-thead > tr > th {
      font-size: 12px;
    }
    & .ant-table-tbody > tr > td:first-child {
      width: 40px;
      padding: 6px;
    }
    & .ant-table-tbody > tr > td:nth-child(3) {
      width: 200px;
    }
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
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    & > svg {
      width: 28px;
      height: 32px;
    }
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
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    &[data-status='active'] > .ant-progress-text {
      font-size: 10px;
    }
  }
`;

export const BooksListStyled = styled(List)`
  overflow-y: auto;

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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 90px;
    max-height: 100px;
  }
`;

export const BooksListItemStyled = styled(List.Item)`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  padding: 5px 0;
  font-size: 12px;
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 10px;
  }
`;

export const BooksTitleStyled = styled.span`
  font-weight: 500;
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 11px;
  }
`;

export const BooksDateStyled = styled.span`
  font-size: 14px;
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 10px;
  }
`;

export const FilterStyled = styled.div``;

export const FilterSpaceStyled = styled(Space)``;
