import {
  StepsHeaderStyled,
  ModalStyled,
  StepsContentStyled,
} from './ConfirmGoalModal.styled';

import PropTypes from 'prop-types';

import useConfirmGoalModal from './useConfirmGoalModal';
const ConfirmGoalModal = ({
  visible,
  books,
  onOk,
  onCancel,
  isMobile,
  titleGoal,
  setTitleGoal,
}) => {
  const {
    selectedBooks,
    OK_TYPE,
    CANCEL_TYPE,
    showConfirm,
    footerContent,
    steps,
    currentStep,
  } = useConfirmGoalModal(
    books,
    onCancel,
    onOk,
    isMobile,
    titleGoal,
    setTitleGoal
  );

  return (
    <ModalStyled
      key={'confirmModal'}
      open={visible}
      onOk={() => showConfirm(OK_TYPE)}
      onCancel={() => showConfirm(CANCEL_TYPE)}
      okButtonProps={{ disabled: selectedBooks.length === 0 }}
      footer={footerContent}
    >
      {steps && (
        <>
          <StepsHeaderStyled
            current={currentStep}
            responsive={false}
            items={steps.map(item => {
              const stepItem = {
                key: item.title,
              };
              if (!isMobile) {
                stepItem.title = item.title;
              }
              return stepItem;
            })}
          />
          <StepsContentStyled>{steps[currentStep].content}</StepsContentStyled>
        </>
      )}
    </ModalStyled>
  );
};
ConfirmGoalModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  books: PropTypes.array,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  titleGoal: PropTypes.string,
  setTitleGoal: PropTypes.func.isRequired,
};
export default ConfirmGoalModal;
