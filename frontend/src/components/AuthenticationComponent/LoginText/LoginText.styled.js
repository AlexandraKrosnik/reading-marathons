import styled from 'styled-components';
import theme from 'styles/theme';
import device from 'styles/device';

export const Text = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  font-weight: 500;

  @media ${device.mobile} {
    width: 229px;
    font-size: 20px;
    line-height: 1.23;
  }

  @media ${device.desktop} {
    width: 397px;
    font-size: 24px;
    line-height: 1.58;
  }
`;

export const Author = styled.p`
  padding: 4px 12px;
  border-top: 1px solid ${theme.colors.googleFontColor};
  color: ${theme.colors.googleFontColor};
  font-weight: 600;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media ${device.tablet} {
    padding-top: 70px;
  }
  @media ${device.desktop} {
    padding-top: 100px;
  }
`;
