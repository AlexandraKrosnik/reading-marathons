import styled from 'styled-components';
import { StyledBtn } from '../ReadTable/ReadTable.styled';
import { Progress, Badge } from 'antd';

export const StyledTitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 19px;
  line-height: 1.2;

  margin-bottom: 20px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledItem = styled.li`
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.header};

  color: ${p => p.theme.colors.mainFontColor};
`;

export const StyledBadge = styled(Badge)`
  display: flex;

  padding: 20px 10px 10px 2px;
`;

export const StyledIconBox = styled.div`
  margin-right: 10px;
`;
export const StyledAuthBox = styled.div`
  padding-left: 10px;
`;

export const StyledImage = styled.img`
  max-width: 90px;
  margin-bottom: 10px;
`;
export const StyledAuthText = styled.p`
  font-size: 10px;
  color: ${p => p.theme.colors.secondaryFontColor};
`;

export const StyledBookTitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 12px;
  line-height: 1.25;

  margin-bottom: 7px;
`;

export const StyledProgress = styled(Progress)`
  width: 100%;
  /* margin-top: 20px; */
`;
export const StyledLS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLSTop = styled.div`
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
`;

export const PropertyName = styled(StyledText)`
  color: ${p => p.theme.colors.secondaryFontColor};
  width: 60px;
`;

export const StyledButton = styled(StyledBtn)`
  min-width: 127px;
  margin-left: 18px;

  color: ${p => p.theme.colors.white};
`;

export const Wrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  padding-bottom: 5px;
  .anticon[tabindex] {
    height: fit-content;
    margin-left: 10px;
  }
`;
