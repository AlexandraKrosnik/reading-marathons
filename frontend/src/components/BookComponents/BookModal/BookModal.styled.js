import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledBackBtn = styled.div`
  position: fixed;
`;

export const BookModalContent = styled(Modal)`
  width: fit-content;
  .ant-modal-content {
    width: 80vw;
    height: 70vh;
    padding: 25px 20px;
    background-color: ${({ theme }) => theme.colors.white};
    overflow-y: auto;
    border-radius: 7px;
    @media (min-width: ${p => p.theme.breakpoints.tablet}) {
      height: 570px;
    }
    @media (min-width: ${p => p.theme.breakpoints.desktop}) {
      width: fit-content;
      min-width: 50vw;
      height: 360px;
    }
  }
  .ant-modal-body {
    padding: 0;
  }
`;
