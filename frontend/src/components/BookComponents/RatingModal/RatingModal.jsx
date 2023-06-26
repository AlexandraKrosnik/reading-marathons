import {
  RatingModalContent,
  FormItem,
  StyledBox,
  StyledRatingBox,
  StyledRatingButton,
  StyledTextArea,
} from './RatingModal.styled';

import Loader from 'components/Loader';
import { Form, Rate } from 'antd';
import useRatingModal from './useRatingModal';

const RatingModal = () => {
  const {
    isLoading,
    error,
    form,
    onFinish,
    isDisabled,
    onCloseModal,
    isModalOpen,
    onValuesChange,
    Fields,
  } = useRatingModal();

  return (
    <RatingModalContent
      open={isModalOpen}
      onCancel={onCloseModal}
      footer={null}
      closable={false}
      width="fit-content"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <StyledRatingBox>
          {error ? (
            error.data.message
          ) : (
            <>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                onValuesChange={onValuesChange}
              >
                <FormItem name={Fields.rating.name} label={Fields.rating.label}>
                  <Rate style={{ width: '120px', fontSize: '17px' }} />
                </FormItem>
                <FormItem name={Fields.resume.name} label={Fields.resume.label}>
                  <StyledTextArea autoSize={{ maxRows: 7 }} />
                </FormItem>
                <StyledBox>
                  <StyledRatingButton onClick={onCloseModal}>
                    Назад
                  </StyledRatingButton>
                  <StyledRatingButton
                    type="primary"
                    htmlType="submit"
                    disabled={!isDisabled}
                  >
                    Зберегти
                  </StyledRatingButton>
                </StyledBox>
              </Form>
            </>
          )}
        </StyledRatingBox>
      )}
    </RatingModalContent>
  );
};
export default RatingModal;
