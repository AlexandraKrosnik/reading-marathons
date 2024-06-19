import styled from 'styled-components';
import { device, theme } from 'styles';
import Container from 'components/Container';
import { Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import Subtract from 'images/authPng/Subtract.png';
import readingFamily from 'images/authPng/readingFamily.png';
import books from 'images/authPng/books.png';

import tabletBackground from 'images/auth-background/signup-background-tablet.jpg';
import desktopBackground from 'images/auth-background/signup-background-desktop.jpg';

export const AuthContainer = styled(Container)`
  height: 100vh;
  padding: 0;
`;

export const AuthSection = styled.section`
  margin: 0 auto;
  padding-top: 10px;

  height: calc(100vh - 100px);
  min-height: 760px;
  max-height: 790px;
  &[data-status='login'] {
    min-height: 650px;
    max-height: 700px;
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: center;

    height: 100vh;

    padding-top: 40px;
  } ;
`;

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

  height: 100%;

  @media ${device.tablet} {
    width: 400px;
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

export const LinkWrapper = styled.div`
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
  height: 173px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-image: url(${Subtract});
  z-index: 100;
`;

export const FormBottomImage = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &[data-status='login'] {
    top: 40%;
    width: 200px;
    height: 200px;
    background-image: url(${books});
  }
  &[data-status='singUp'] {
    top: 50%;
    width: 200px;
    height: 150px;
    background-image: url(${readingFamily});
  }
`;

export const AboutAppWrapper = styled.div`
  position: relative;
  background-size: cover;
  height: 100%;

  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    width: 676px;
    background-image: url(${tabletBackground});
  }

  @media ${device.desktop} {
    background-image: url(${desktopBackground});
  }
`;

export const TitleTextStyled = styled.h2`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }

  @media ${device.tablet} {
    margin-bottom: 48px;
  }

  @media ${device.desktop} {
    margin-bottom: 48px;
  }
`;

export const MainTextStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 55px 50px 0px;
  }
  @media ${device.desktop} {
    padding-top: 85px;
  }
`;

export const LoginTextStyled = styled.p`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.12;
  text-align: center;

  margin-bottom: 15px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #f6f7fb6e;
`;
