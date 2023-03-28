import styled from 'styled-components';
import TextArea from 'antd/lib/input/TextArea';
import { Button, Form, Modal } from 'antd';

export const RatingModalContent = styled(Modal)`
  width: fit-content;

  .ant-modal-content {
    width: 80vw;

    padding: 25px 20px;
    background-color: ${({ theme }) => theme.colors.white};
    overflow-y: auto;
    border-radius: 7px;

    @media (min-width: ${p => p.theme.breakpoints.desktop}) {
      width: fit-content;
      min-width: 50vw;
    }
  }
  .ant-modal-body {
    padding: 0;
  }
`;
export const FormItem = styled(Form.Item)`
  margin: 0;
  &:first-child {
    margin-bottom: 10px;
  }
  &:nth-child(2) {
    margin-bottom: 30px;
  }

  .ant-form-item-label {
    padding-bottom: 7px;
  }
  .ant-form-item-label > label {
    font-size: 18px;
    line-height: 1.25;
  }
`;

export const StyledRatingBox = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledTextArea = styled(TextArea)`
  padding: 8px;
  resize: none;
  width: 100%;
`;

export const StyledRatingButton = styled(Button)`
  font-family: 'Montserrat';
  height: 40px;
  min-width: 88px;
  font-size: 14px;
  line-height: 1.21;
  font-weight: 500;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 130px;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
`;
