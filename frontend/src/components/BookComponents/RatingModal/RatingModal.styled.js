import styled from 'styled-components';
import TextArea from 'antd/lib/input/TextArea';
import { Button, Form, Modal } from 'antd';

export const RatingModalContent = styled(Modal)`
  width: fit-content;
  /* margin: 0 auto; */
  .ant-modal-content {
    width: 80vw;
    /* height: 80vh; */
    padding: 25px 20px;
    background-color: ${({ theme }) => theme.colors.white};
    overflow-y: auto;
    border-radius: 7px;
    @media (min-width: ${p => p.theme.breakpoints.tablet}) {
      /* height: 450px; */
    }
    @media (min-width: ${p => p.theme.breakpoints.desktop}) {
      width: fit-content;
      min-width: 50vw;
      /* height: 350px; */
    }
  }
  .ant-modal-body {
    padding: 0;
  }
`;

export const StyledRatingBox = styled.div`
  width: 100%;
  /* max-width: 280px; */
  /* max-height: 395px; */
  /* padding: 20px 20px 30px; */
  /* margin: auto; */
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /* max-width: 608px; */
    /* max-height: 399px; */
  }
`;

export const StyledRatingText = styled.p`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 12px;
  }
`;
export const StyledRatingResumeText = styled.span`
  font-size: 16px;
  line-height: 1.25;
`;

export const StyledTextArea = styled(TextArea)`
  margin-bottom: 20px;
  margin-top: 8px;
  padding: 8px;
  resize: none;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 28px;
    margin-top: 12px;
  }
`;

export const StyledRatingButton = styled(Button)`
  font-family: 'Montserrat';
  height: 40px;
  min-width: 98px;
  font-size: 14px;
  line-height: 1.21;
  font-weight: 500;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 130px;
  }
`;

export const StyledRatingLabel = styled.label`
  position: relative;
  display: block;
  width: 100%;
  margin-top: 20px;
`;

export const StyledBox = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
`;

export const FormItem = styled(Form.Item)`
  margin: 0;
`;
