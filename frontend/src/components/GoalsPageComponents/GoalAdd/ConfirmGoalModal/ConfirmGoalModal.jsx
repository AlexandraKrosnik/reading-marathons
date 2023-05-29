import {
  StepsHeaderStyled,
  ModalStyled,
  StepsContentStyled,
} from './ConfirmGoalModal.styled';
import { Button, message, Steps, theme } from 'antd';

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
          {/* <div
            style={{
              marginTop: 24,
            }}
          >
            {currentStep < steps.length - 1 && (
              <Button type="primary" onClick={() => nextStep()}>
                Next
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            {currentStep > 0 && (
              <Button
                style={{
                  margin: '0 8px',
                }}
                onClick={() => prevStep()}
              >
                Previous
              </Button>
            )}
          </div> */}
        </>
      )}
      {/* {!isBooks && <p>Після створення дані не можна буде змінити!</p>}
      {isBooks && (
        <>
          <Tooltip
            key="tooltip"
            placement="topRight"
            trigger={['click', 'hover', 'focus']}
            title="Якщо ви позначите книгу, то відлік читання почнеться з 1 сторінки, інакше продовжиться з місця, на якому ви закінчили."
          >
            <IconInfoStyled />
          </Tooltip>
          <CheckboxGroupStyled>
            {isMobile && (
              <CheckboxStyled
                key="selectAllCheckbox"
                checked={selectedBooks.length === books.length}
                onChange={handleSelectAllCheckboxChange}
              >
                Вибрати всі
              </CheckboxStyled>
            )}

            {books.map(book => (
              <CheckboxStyled
                key={book._id}
                checked={isChecked(book._id)}
                onChange={event => handleCheckboxChange(book, event)}
              >
                {book.title}
              </CheckboxStyled>
            ))}
          </CheckboxGroupStyled>
        </>
      )} */}
    </ModalStyled>
  );
};

export default ConfirmGoalModal;
