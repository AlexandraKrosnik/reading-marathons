import BookForm from 'components/BookComponents/BookForm/BookForm';
import { StyledBackBtn, BookModalContent } from './BookModal.styled';
import { ReactComponent as BackIcon } from 'images/library/back.svg';
import useBookModal from './useBookModal';
import Loader from 'components/Loader';

const BookModal = () => {
  const { onCloseModal, action, isModalOpen } = useBookModal();
  return (
    <BookModalContent
      open={isModalOpen}
      onCancel={onCloseModal}
      footer={null}
      closable={false}
      width="fit-content"
    >
      <StyledBackBtn onClick={onCloseModal}>
        <BackIcon />
      </StyledBackBtn>
      {action ? <BookForm action={action} /> : <Loader />}
    </BookModalContent>
  );
};
export default BookModal;
