import LibraryForm from 'components/Library/LibraryForm/LibraryForm';
import Modal from 'components/modals/Modal/Modal';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledBackBtn, AddBookContent } from './MobileAddBookComponent.styled';
import { ReactComponent as BackIcon } from '../assets/back.svg';

const MobileAddBookComponent = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const onCloseModal = () => {
    navigate({ pathname: '/library', search });
  };
  return (
    <Modal onClose={onCloseModal}>
      <AddBookContent>
        <StyledBackBtn onClick={onCloseModal}>
          <BackIcon />
        </StyledBackBtn>
        <LibraryForm />
      </AddBookContent>
    </Modal>
  );
};

export default MobileAddBookComponent;
