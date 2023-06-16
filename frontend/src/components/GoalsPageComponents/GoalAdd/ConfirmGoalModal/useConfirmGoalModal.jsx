import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import SelectBooksRestartReadingContent from './SelectBooksRestartReadingContent/SelectBooksRestartReadingContent';
import AddTitleContent from './AddTitleContent/AddTitleContent';

const { confirm } = Modal;

const useConfirmGoalModal = (
  books,
  onCancel,
  onOk,
  isMobile,
  titleGoal,
  setTitleGoal
) => {
  const OK_TYPE = 'ok';
  const CANCEL_TYPE = 'cancel';

  const [selectedBooks, setSelectedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState();
  const [currentStep, setCurrentStep] = useState(0);
  const [isInputError, setIsInputError] = useState(false);
  const isBooks = !!books?.length;
  const inputRef = useRef(null);

  useEffect(() => {
    const commonSteps = [
      {
        title: 'Назва',
        content: (
          <AddTitleContent
            onChange={e => setTitleGoal(e.target.value)}
            value={titleGoal}
            is_error={isInputError}
          />
        ),
      },
      {
        title: 'Підтвердження',
        content: <p>Після створення дані не можна буде змінити!</p>,
      },
    ];
    if (isBooks) {
      commonSteps.unshift({
        title: 'Скинути читання',
        content: (
          <SelectBooksRestartReadingContent
            isMobile={isMobile}
            books={books}
            selectedBooks={selectedBooks}
            setSelectedBooks={setSelectedBooks}
          />
        ),
      });
    }
    setSteps(commonSteps);
  }, [
    books,
    isMobile,
    selectedBooks,
    isBooks,
    isInputError,
    setTitleGoal,
    titleGoal,
  ]);

  useEffect(() => {
    if (
      isInputError &&
      titleGoal &&
      titleGoal?.length !== 0 &&
      isNotBlank(titleGoal)
    ) {
      setIsInputError(false);
    }
  }, [isInputError, titleGoal]);

  function isNotBlank(str) {
    return /\S/.test(str);
  }

  const nextStep = useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep]);
  const prevStep = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const onCancelButton = useCallback(() => {
    setSelectedBooks([]);
    setTitleGoal('');
    onCancel(false);
  }, [onCancel, setTitleGoal]);

  const onOkButton = useCallback(() => {
    setLoading(true);
    onOk(selectedBooks);
    onCancelButton();
    setLoading(false);
  }, [onCancelButton, onOk, selectedBooks]);

  const showConfirm = useCallback(
    type => {
      const title =
        type === OK_TYPE
          ? 'Ви впевнені, що хочете створити ціль?'
          : 'Ви впевненні, що хочете вийти?';
      const content =
        type === OK_TYPE
          ? 'Після підтведження вас перенаправить на сторінку цілі.'
          : 'Дані не будуть збереженні!';
      confirm({
        title: `${title}`,
        icon: <ExclamationCircleFilled />,
        content: `${content}`,

        bodyStyle: {
          padding: '24px 24px 12px',
        },
        onOk() {
          setTimeout(() => {
            type === OK_TYPE && onOkButton();
            type === CANCEL_TYPE && onCancelButton();
          }, 200);
        },
        onCancel() {},
      });
    },
    [onCancelButton, onOkButton]
  );

  const footerContent = useMemo(() => {
    const buttons = [
      <Button key="cancel" onClick={() => showConfirm(CANCEL_TYPE)}>
        Скасувати
      </Button>,
    ];
    const confirmButton = (
      <Button
        key="submit"
        type="primary"
        onClick={() => {
          if (!titleGoal || titleGoal?.length === 0 || !isNotBlank(titleGoal)) {
            setCurrentStep(steps.length - 2);
            setIsInputError(true);
            return;
          }
          isBooks ? showConfirm(OK_TYPE) : onOkButton();
        }}
        loading={loading}
      >
        Підтвердити
      </Button>
    );
    const mobileButton = (
      <Button
        key="selectAll"
        type="dashed"
        onClick={() => setSelectedBooks(books)}
      >
        Вибрати всі
      </Button>
    );
    const nextButton = (
      <Button type="primary" key="next" onClick={() => nextStep()}>
        {isMobile ? '>' : 'Next'}
      </Button>
    );
    const previousButton = (
      <Button key="previous" onClick={() => prevStep()}>
        {isMobile ? '<' : 'Previous'}
      </Button>
    );

    if (!isMobile && isBooks && currentStep === 0) {
      buttons.splice(buttons.length - 2, 0, mobileButton);
    }
    if (currentStep === steps?.length - 1) {
      buttons.splice(1, 0, confirmButton);
    }
    if (steps && currentStep < steps.length - 1) {
      buttons.splice(0, 0, nextButton);
    }
    if (currentStep > 0) {
      buttons.splice(0, 0, previousButton);
    }

    return buttons;
  }, [
    isMobile,
    books,
    loading,
    showConfirm,
    isBooks,
    onOkButton,
    currentStep,
    nextStep,
    steps,
    prevStep,
    titleGoal,
  ]);

  return {
    selectedBooks,
    OK_TYPE,
    CANCEL_TYPE,
    showConfirm,
    footerContent,
    isBooks,
    steps,
    currentStep,
    nextStep,
    prevStep,
    inputRef,
  };
};

export default useConfirmGoalModal;
