import { Input } from 'antd';

import styled from 'styled-components';

export const InputErrorTextStyled = styled.p`
  color: red;
  font-size: 12px;
`;

export const InputTitleStyled = styled(Input)`
  border-color: ${props => (props.is_error === 'true' ? 'red' : '#d9d9d9')};
`;
