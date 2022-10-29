import PropTypes from 'prop-types';
import { StyledList, Wrapper } from './BookList.styled';
import Modal from 'components/modals/Modal/Modal';
import RatingModal from 'components/modals/RatingModal';
import useBookList from './useBookList';
import { BookItem } from './BookItem/BookItem';

const BookList = ({ data }) => {
  const { isModalVisible, onModalClose, bookId, setBookId, toggleModal } =
    useBookList();
  return (
    <Wrapper>
      {data && (
        <StyledList>
          {data.map(
            item =>
              !!item && (
                <BookItem
                  key={item._id}
                  item={item}
                  setBookId={setBookId}
                  toggleModal={toggleModal}
                />
              )
          )}
        </StyledList>
      )}

      {isModalVisible && (
        <Modal onClose={onModalClose}>
          <RatingModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )}
    </Wrapper>
  );
};

BookList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookList;
