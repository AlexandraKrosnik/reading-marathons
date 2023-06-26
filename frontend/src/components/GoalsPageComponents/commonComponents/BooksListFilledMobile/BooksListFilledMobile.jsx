import BookCard from '../BookCard';
import PropTypes from 'prop-types';
import { BooksListStyled } from './BooksListFilledMobile.styled';

const BooksListFilledMobile = ({ books, onClick }) => {
  return (
    <>
      <BooksListStyled>
        {books.map(
          ({ _id, title, author, publication, pages, bookProgress }) => (
            <BookCard
              key={_id}
              id={_id}
              title={title}
              author={author}
              year={publication}
              pages={pages}
              onClick={onClick}
              bookProgress={bookProgress}
            />
          )
        )}
      </BooksListStyled>
    </>
  );
};

BooksListFilledMobile.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publication: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func,
  status: PropTypes.string,
};

export default BooksListFilledMobile;
