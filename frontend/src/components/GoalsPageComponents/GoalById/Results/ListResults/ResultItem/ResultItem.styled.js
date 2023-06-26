import theme from 'styles/theme';
import device from 'styles/device';
import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';
export const ItemStyled = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 4px 0;

  &:not(:last-child) {
    margin-bottom: 10px;

    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
  }
`;
export const DrawerImgStyled = styled.img`
  height: 60px;
  width: auto;
  border-radius: 5px;
  margin-right: 10px;

  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
  }
`;

export const ItemBodyStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleStyled = styled(EllipsisText)`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 12px;

  color: ${p => p.theme.colors.mainFontColor};
`;

export const ItemBottomStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BottomTextStyled = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: 12px;
`;
