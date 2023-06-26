import styled from 'styled-components';
import { ClockCircleOutlined } from '@ant-design/icons';
export const TimerCellStyled = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 11px;
  }
`;

export const TimerCellTextStyled = styled.div`
  display: flex;
  margin-left: 5px;

  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    margin-left: 10px;
    flex-direction: column;
    font-size: 12px;
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    & > span:not(:last-child) {
      margin-right: 3px;
    }
  }
`;

export const ClockCircleOutlinedStyled = styled(ClockCircleOutlined)`
  & > svg {
    color: var(--ant-primary-color-deprecated-t-50);
  }
  @media (max-width: ${p => p.theme.breakpoints.desktop}) {
    & > svg {
      width: 1.8em;
      height: 1.8em;
    }
  }
`;
