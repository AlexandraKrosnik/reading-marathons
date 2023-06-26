import styled from 'styled-components';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export const CollapseStyle = styled(Collapse)`
  background-color: inherit;
  & > .ant-collapse-item {
    border-bottom: 0px;
  }
  & > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
  }
`;
export const PanelStyle = styled(Panel)`
  margin-bottom: 24px;
  &.ant-collapse-item-active > .ant-collapse-header {
    padding-bottom: 0;
  }
  &
    > .ant-collapse-header
    > .ant-collapse-expand-icon
    + .ant-collapse-header-text {
    flex: none;
    width: fit-content;
    background-color: gray;
    border-radius: 5px;
    padding: 2px 3px;
  }
  &.ant-collapse-item-active
    > .ant-collapse-header
    > .ant-collapse-expand-icon
    + .ant-collapse-header-text {
    border-radius: 5px 5px 0 0;
  }
  &.ant-collapse-item-active
    > .ant-collapse-content-active
    > .ant-collapse-content-box {
    padding-top: 0px;
  }
  &[data-status='active'] {
    & .ant-collapse-expand-icon + .ant-collapse-header-text {
      background-color: rgb(250 129 48 / 80%);
    }
  }
  &[data-status='finished'] {
    & .ant-collapse-expand-icon + .ant-collapse-header-text {
      background-color: rgb(211, 211, 211);
    }
  }
  &[data-status='planned'] {
    & .ant-collapse-expand-icon + .ant-collapse-header-text {
      background-color: rgb(107, 201, 80);
    }
  }
`;
