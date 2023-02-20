import PropTypes from 'prop-types';
import { StyledList, Wrapper } from './BookList.styled';
import { BookItem } from './BookItem/BookItem';

const BookList = ({ data }) => {
  return (
    <Wrapper>
      {data && (
        <StyledList>
          {data.map(item => !!item && <BookItem key={item._id} item={item} />)}
        </StyledList>
      )}
    </Wrapper>
  );
};

BookList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookList;
