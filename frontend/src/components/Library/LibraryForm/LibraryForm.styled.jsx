import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  font-family: 'Montserrat';

  /* display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto; */

  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    /* margin-bottom: 20px; */
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: fit-content;
    margin: 0 auto;
    /* margin-bottom: 40px; */
  }
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 0;
  flex: 1;
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;

    color: ${p => p.theme.colors.secondaryFontColor};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex: 0;
    width: 400px;

    &:nth-child(odd) {
      margin-right: 30px;
    }
    .ant-row.ant-form-item-row {
      width: 400px;
    }
  }
`;

export const StyledInput = styled(Input)`
  height: 35px;

  border-radius: 0;
  background-color: ${p => p.theme.colors.mainBackground};

  &:hover,
  :focus {
    border-color: ${p => p.theme.colors.mainBackground};
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.input};
  }
`;

export const TitleInput = styled(StyledInput)`
  /* @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 346px;
  } */
`;

export const AuthorInput = styled(StyledInput)`
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 336px;
  }

  /* @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 250px;
  } */
`;

export const StyledBox = styled(Form.Item)`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  height: fit-content;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
  color: var(--ant-primary-color);

  height: 42px;
  min-width: 170px;
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    min-width: 404px;
  }
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    min-width: 270px;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 25px;
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
`;

export const Box = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-top: 0;

    margin-left: 60px;
    /* width: fit-content; */

    /* display: flex;
    align-items: center; */

    /* gap: 32px; */
    /* margin-bottom: 25px; */
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    width: 830px;
  }
`;
