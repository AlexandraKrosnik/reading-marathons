import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const useBookModal = () => {
  const [action, setAction] = useState();
  const params = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onCloseModal = () => {
    setTimeout(() => {
      if (params?.id) {
        navigate({ pathname: `/library/${params.id}`, search });
      } else {
        navigate({ pathname: `/library`, search });
      }
    }, 150);
    localStorage.removeItem('BookModal');

    setIsModalOpen(false);
  };
  useEffect(() => {
    params?.id ? setAction('change') : setAction('add');
  }, [params]);

  return {
    onCloseModal,
    action,
    isModalOpen,
  };
};
export default useBookModal;
