import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Form, Field, ErrorMessage } from 'formik';

import { device, theme } from 'styles';

import Subtract from 'images/authPng/Subtract.png';
import readingGirlAuth from 'images/svg/readingGirlAuthForm.svg';
import readingFamily from 'images/authPng/readingFamily.png';

export const FormWrapper = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-content: center;

  align-items: center;

  background-repeat: no-repeat;
  background-position: center;
  background-color: ${theme.colors.white};

  padding-top: 20px;
  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: calc(100vh - 100px);
    min-height: 700px;
    max-height: 780px;
  }

  @media ${device.tablet} {
    padding-top: 25px;
    width: 400px;
  }
  @media ${device.desktop} {
    padding-top: 50px;
  }
`;

export const StyledForm = styled(Form)`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 32px 20px;
  width: 320px;

  @media ${device.tablet} {
    width: 400px;
    background-color: ${p => p.theme.colors.white};
  }

  @media ${device.desktop} {
    padding: 30px 45px 20px;
    width: 400px;
  }
`;

export const GoogleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 28px;
  padding: 8px 14px;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: ${p => p.theme.colors.googleFontColor};
  background-color: ${p => p.theme.colors.white};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  transition: ${p => p.theme.transition.transitionFunction};

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.google};
    background-color: ${p => p.theme.colors.modalBackground};
    color: ${p => p.theme.colors.googleFontColor};
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FieldName = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.214;
  color: ${p => p.theme.colors.secondaryFontColor};

  @media ${device.mobile} {
    font-weight: 600;
  }

  @media ${device.tablet} {
    font-weight: 500;
    color: ${p => p.theme.colors.secondaryFontColor};
  }

  @media ${device.desktop} {
    font-weight: 500;
    color: ${p => p.theme.colors.secondaryFontColor};
  }
`;

export const AccentedMark = styled.span`
  color: ${p => p.theme.colors.accentColor};
`;

export const StyledField = styled(Field)`
  padding: 8px 8px 8px 16px;
  border-radius: 6px;
  border: 0.5px solid ${p => p.theme.colors.inputBackground};
  background-color: ${p => p.theme.colors.inputBackground};
  transition: ${p => p.theme.transition.transitionFunction};

  :hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.headerBackground};
  }
`;

export const ValidationError = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 600;
  color: ${p => p.theme.colors.accentColor};
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px 24px;
  border: none;
  border-radius: 6px;
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  transition: ${p => p.theme.transition.transitionFunction};

  :hover {
    background-color: ${p => p.theme.colors.hover};
  }

  :disabled {
    background-color: ${p => p.theme.colors.headerBackground};
    color: ${p => p.theme.colors.secondaryFontColor};
    cursor: not-allowed;
  }
`;

export const LoginLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
`;

export const StyledLink = styled(Link)`
  text-align: center;

  text-decoration: underline;
`;

export const IsRegistredParagraph = styled.p`
  color: ${p => p.theme.colors.secondaryFontColor};
`;
export const FormBottomStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 263px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${Subtract});
  z-index: 100;
`;

export const FormBottomImage = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${readingFamily});
  /* background-image: url(${readingGirlAuth}); */

  width: 200px;
  height: 150px;

  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
