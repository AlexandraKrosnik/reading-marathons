import { Space, Table, Tag } from 'antd';
import styled from 'styled-components';
import { ReactComponent as BookIcon } from 'images/svg/bookIconGrey.svg';

export const TableStyled = styled(Table)`
  width: 100%;
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
  .ant-table-tbody > tr > td {
    background-color: #f6f7fb;
    vertical-align: baseline;
    padding: 14px;
    @media screen and (max-width: ${p => p.theme.breakpoints.desktop}) {
      padding: 12px;
    }
    :nth-child(1) {
      width: 40%;
      padding-left: 40px;
    }
    :nth-child(2) {
      width: 24%;
    }
    :nth-child(n + 3) {
      text-align: center;
    }
    :last-child {
      width: 7%;
    }
  }
`;
export const StyledBookIcon = styled(BookIcon)`
  position: absolute;
  z-index: 10;
  top: 21px;
  left: 0;
`;
