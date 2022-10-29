import styled from 'styled-components';

import { Progress, Badge, Button } from 'antd';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px 64px;
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    gap: 30px 42px;
  }
`;

export const Wrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
