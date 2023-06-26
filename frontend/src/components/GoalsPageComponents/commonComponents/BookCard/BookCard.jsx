import {
  StyledWrapper,
  StyledTable,
  StyledIcon,
  StyledDeleteButton,
  StyledTitle,
  StyledTableBody,
  ProgressCardStyled,
} from './BooksCard.styled';
import { ReactComponent as BookIcon } from 'images/svg/bookIconGrey.svg';
import { FiTrash } from 'react-icons/fi';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';

const BookCard = ({
  id,
  title,
  author,
  year,
  pages,
  onClick,
  bookProgress,
}) => {
  return (
    <StyledWrapper>
      <StyledIcon>
        <BookIcon />
      </StyledIcon>
      <StyledTitle>
        <EllipsisText text={title} length={50} />
      </StyledTitle>
      <StyledTable>
        <StyledTableBody>
          <tr>
            <td>Автор:</td>
            <td>{author}</td>
          </tr>
          <tr>
            <td>Рік</td>
            <td>{year}</td>
          </tr>
          <tr>
            <td>Стор.:</td>
            <td>{pages}</td>
          </tr>
        </StyledTableBody>
      </StyledTable>
      {bookProgress ? (
        <ProgressCardStyled type="circle" percent={bookProgress} />
      ) : (
        <StyledDeleteButton htmlType="button" onClick={() => onClick(id)}>
          <FiTrash size={20} />
        </StyledDeleteButton>
      )}
    </StyledWrapper>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default BookCard;
