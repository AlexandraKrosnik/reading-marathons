import PropTypes from 'prop-types';
import { EditOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import EllipsisText from 'react-ellipsis-text';
import {
  Box,
  PropertyName,
  StyledBookTitle,
  StyledIconBox,
  StyledItem,
  StyledText,
  StyledImage,
  StyledAuthBox,
  StyledProgress,
  StyledLS,
  StyledBadge,
  StyledRating,
  StyledLSTop,
} from './BookItem.styled';
import useBookItem from './useBookItem';

export const BookItem = ({ item }) => {
  const {
    _id,
    leftPages,
    pages,
    readTimes,
    image,
    title,
    author,
    publication,
    rating,
    status,
  } = item;
  const { showDrawer, showRatingModal } = useBookItem();

  const progress = Math.floor((leftPages * 100) / pages);
  return (
    <>
      <StyledItem key={_id}>
        <StyledBadge count={readTimes} showZero>
          <StyledIconBox
            onClick={() => {
              showDrawer(_id);
            }}
          >
            <StyledImage src={image?.url} alt="book" />
            <StyledAuthBox>
              <StyledProgress percent={progress} />
            </StyledAuthBox>
          </StyledIconBox>
          <StyledLS>
            <StyledLSTop>
              <StyledBookTitle
                onClick={() => {
                  showDrawer(_id);
                }}
              >
                <EllipsisText text={title} length={50} />
              </StyledBookTitle>

              <Box>
                <PropertyName>Автор:</PropertyName>
                <StyledText>{author}</StyledText>
              </Box>
              <Box>
                <PropertyName>Рік:</PropertyName>
                <StyledText>{publication}</StyledText>
              </Box>
              <Box>
                <PropertyName>Стор.:</PropertyName>
                <StyledText>{pages}</StyledText>
              </Box>
            </StyledLSTop>

            {(status !== 'plan' || readTimes > 0) && (
              <StyledRating>
                <Rate
                  style={{ width: '120px', fontSize: '17px' }}
                  disabled
                  value={rating}
                />
                <EditOutlined
                  onClick={() => {
                    showRatingModal(_id);
                  }}
                />
              </StyledRating>
            )}
          </StyledLS>
        </StyledBadge>
      </StyledItem>
    </>
  );
};

BookItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    leftPages: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    readTimes: PropTypes.number.isRequired,
    image: PropTypes.shape({
      public_id: PropTypes.string,
      url: PropTypes.string,
    }).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publication: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
  setBookId: PropTypes.func,
  toggleModal: PropTypes.func,
};
