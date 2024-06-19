import styled from 'styled-components';

import device from 'styles/device';
import listStyleImage from 'images/svg/list-style-image.svg';

export const AboutAppText = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: transparent;
  @media ${device.tablet} {
    padding: 55px 50px 0px;
  }
  @media ${device.desktop} {
    padding-top: 85px;
  }
`;
export const TextPartStyled = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #091e3fcc;
`;

export const AppName = styled.h2`
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

export const BulletsTitle = styled.h3`
  align-self: flex-start;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
`;

export const BulletList = styled.ul`
  align-self: flex-start;
  list-style-image: url(${listStyleImage});
`;

export const Bullet = styled.li``;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
