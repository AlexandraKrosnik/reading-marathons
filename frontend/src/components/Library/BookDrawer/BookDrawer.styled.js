import { Spin, Drawer, Descriptions } from 'antd';
import styled from 'styled-components';

export const DrawerStyled = styled(Drawer)`
  .ant-drawer-content-wrapper,
  .ant-drawer-content {
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
  .ant-drawer-mask {
    background: rgb(0 0 0 / 27%);
  }
  .ant-drawer-body {
    padding: 0;
    /* overflow-y: hidden; */
  }
  .ant-drawer-body::-webkit-scrollbar {
    display: none;
  }
  .ant-drawer-content {
    /* position: relative; */
  }
  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    .ant-drawer-content-wrapper,
    .ant-drawer-content {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 0;
    }
  }
`;
export const SpinStyled = styled(Spin)`
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-spin-dot.ant-spin-dot-spin {
    font-size: 62px;
    & .ant-spin-dot-item {
      width: 28px;
      height: 28px;
    }
  }
`;
export const HeaderStyled = styled.div`
  position: relative;
`;

export const HeadStyled = styled.div`
  position: fixed;
  display: block;
  height: 100px;
  width: 100%;
  background-color: #fad9c3;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  z-index: 2;
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 500px;
    border-top-right-radius: 0px;
  }
`;
export const MiddleStyled = styled.div`
  width: 100%;
  height: 100px;
  display: block;
  position: absolute;
  display: block;
  top: 100px;
  background-color: white;
  z-index: 1;
`;

export const BodyStyled = styled.div`
  width: 325px;
  margin: 0 auto;
  padding-top: 200px;
  .ant-descriptions-item-container {
    align-items: baseline;
  }
`;

export const DrawerImgStyled = styled.img`
  position: absolute;
  height: 150px;
  width: auto;
  border-radius: 5px;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 10px);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    top: 20px;
  }
`;

export const TitleStyled = styled.h2`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 17px;
  line-height: 1.2;
  margin-bottom: 15px;
  text-align: center;
`;
export const DescriptionsItemLabel = styled.span``;
export const DescriptionsItemContent = styled.span`
  background-color: #e9e9e999;
  padding: 3px 5px;
  border-radius: 10px;
  font-weight: 500;
  margin-left: 10px;
  &[data-status='now'] {
    background-color: #a4edb678;
  }
  &[data-status='plan'] {
    background-color: #fff9034f;
  }
  &[data-status='already'] {
    background-color: #ef8b8b78;
  }
`;
export const DescriptionsStyled = styled(Descriptions)`
  /* background-color: red; */
`;
