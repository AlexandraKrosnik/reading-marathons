import theme from 'styles/theme';
import styled from 'styled-components';
import device from 'styles/device';
import SmallLine from 'images/svg/smLine.svg';
import LargeLine from 'images/svg/lgLine.svg';

export const Title = styled.h2`
  display: flex;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;

  &::before,
  ::after {
    content: url(${SmallLine});
    margin-top: -5px;
    margin-left: 4px;
    margin-right: 4px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: start;
    align-items: start;
    font-size: 14px;
    margin-bottom: 7px;
    &::before {
      content: none;
    }
    &::after {
      content: url(${LargeLine});
      margin-top: -5px;
      margin-left: 8px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 4px;
    margin-left: 0;
    justify-content: center;

    &::before,
    &::after {
      content: url(${SmallLine});
      margin-top: -5px;
      margin-left: 4px;
      margin-right: 4px;
    }
  }
`;

export const List = styled.ul`
  width: 245px;
  padding-right: 7px;
  margin: 0 auto;
  overflow-y: auto;
  height: 147px;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.placeholderFontColor};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &[data-status='finished'] {
    height: 250px;
  }

  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
  }
  @media ${device.tablet} {
    height: 165px;
    margin: 0;
  }
`;
