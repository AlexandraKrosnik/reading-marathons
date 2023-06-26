import styled from 'styled-components';
import { Input, Button } from 'antd';
import Container from 'components/Container';
const { Search } = Input;

export const HeaderBackground = styled.div`
  position: sticky;
  padding: 5px 0;

  width: 100%;
  height: 40px;
`;

export const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0;
`;
export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 100%;

  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 50%;
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 40%;
  }
`;

export const SearchInputStyled = styled(Search)`
  width: 90%;

  border-bottom: 1px solid #d9d9d9;
  & .ant-input-search-button {
    height: 30px;
  }
  &:focus,
  &:hover {
    border-bottom-color: var(--ant-primary-5);

    & .ant-btn .anticon {
      color: var(--ant-primary-5);
    }
  }
  &.ant-input-search .ant-input:focus,
  &.ant-input-search .ant-input:hover {
    border-color: green;
  }

  & .ant-input,
  & .ant-input-group-addon .ant-btn {
    border: none;
  }
`;

export const ButtonStyled = styled(Button)`
  border-radius: 50%;
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 20%;
    border-radius: 5px;
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 15%;
  }
`;
