import theme from 'styles/theme';
import styled from 'styled-components';
import device from 'styles/device';

export const Section = styled.div`
  width: 280px;
  padding: 22px;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.header};
  &[data-status='finished'],
  &[data-status='planned'] {
    height: 340px;
  }
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    width: 704px;
    padding: 30px 80px;
    &[data-status='planned'] {
      height: 250px;
    }
  }

  @media ${device.mobile} {
    height: 440px;
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    left: 976px;
    top: 487px;
    width: 288px;
    height: 440px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 12px;
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
    line-height: 17px;
  }
`;
