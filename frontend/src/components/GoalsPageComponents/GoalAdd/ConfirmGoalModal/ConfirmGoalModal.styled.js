import { Steps, Modal } from 'antd';

import styled from 'styled-components';

export const ModalStyled = styled(Modal)`
  .ant-modal-body {
    padding: 30px 35px 20px 25px;
  }

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    max-width: 313px;

    .ant-modal-close {
      top: 2px;
    }
    .ant-modal-close-x {
      font-size: 15px;
      width: 24px;
      height: 24px;
      line-height: 24px;
    }

    .styled-modal {
      width: 300px;
    }
    .ant-modal-footer > .ant-btn {
      padding: 4px 10px;
    }
  }
`;

export const StepsHeaderStyled = styled(Steps)`
  & .ant-steps-item-title {
    font-size: 11px;
    line-height: 24px;
    &::after {
      top: 12px;
    }
  }
  & .ant-steps-item-icon {
    width: 24px;
    height: 24px;
    font-size: 11px;
    line-height: 24px;
  }
`;

export const StepsContentStyled = styled.div`
  padding-top: 20px;
`;
