import {
  DrawerImgStyled,
  ItemStyled,
  ItemBodyStyled,
  TitleStyled,
  ItemBottomStyled,
  BottomTextStyled,
} from './ResultItem.styled';

const ResultItem = ({ image, title, date, pages }) => {
  return (
    <ItemStyled>
      <DrawerImgStyled src={image?.url} alt={title} />
      <ItemBodyStyled>
        <TitleStyled length={50} text={title} />
        <ItemBottomStyled>
          <BottomTextStyled>{date} </BottomTextStyled>
          <BottomTextStyled>{pages}стр.</BottomTextStyled>
        </ItemBottomStyled>
      </ItemBodyStyled>
    </ItemStyled>
  );
};

export default ResultItem;
