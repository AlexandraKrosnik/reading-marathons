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
import useBookList from '../useBookList';
import useBookDrawer from 'components/Library/BookDrawer/useBookDrawer';
import BookDrawer from 'components/Library/BookDrawer';
import useBookItem from './useBookItem';

export const BookItem = ({ item, toggleModal, setBookId }) => {
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
  } = item;
  const {
    openDrawer,
    showDrawer,
    onCloseDrawer,
    setBookId: drawerId,
    bookId,
  } = useBookItem();

  const progress = Math.floor((leftPages * 100) / pages);
  return (
    <>
      <StyledItem
        key={_id}
        onClick={() => {
          // drawerId(_id);
          // console.log(bookId);
          showDrawer(_id);
        }}
      >
        <StyledBadge count={readTimes} showZero>
          <StyledIconBox>
            <StyledImage src={image?.url} alt="book" />
            <StyledAuthBox>
              <StyledProgress percent={progress} />
            </StyledAuthBox>
          </StyledIconBox>
          <StyledLS>
            <StyledLSTop>
              <StyledBookTitle>
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

            {rating && (
              <StyledRating>
                <Rate
                  style={{ width: '120px', fontSize: '17px' }}
                  disabled
                  value={rating}
                />
                <EditOutlined
                  onClick={() => {
                    setBookId(_id);
                    toggleModal();
                  }}
                />
              </StyledRating>
            )}
          </StyledLS>
        </StyledBadge>
      </StyledItem>
      <BookDrawer onClose={onCloseDrawer} open={openDrawer} />
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
