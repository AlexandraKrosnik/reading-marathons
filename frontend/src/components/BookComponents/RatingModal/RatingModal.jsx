import {
  RatingModalContent,
  FormItem,
  StyledBox,
  StyledRatingBox,
  StyledRatingButton,
  StyledRatingLabel,
  StyledRatingResumeText,
  StyledRatingText,
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
    rating,
    setRating,
    resume,
    setResume,
    isDisabled,
    onCloseModal,
    isModalOpen,
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
              >
                <StyledRatingText>Обрати рейтинг книги</StyledRatingText>
                <Rate
                  style={{ width: '120px', fontSize: '17px' }}
                  value={rating}
                  onChange={value => {
                    setRating(value);
                  }}
                />
                <FormItem name={'resume'}>
                  <StyledRatingLabel>
                    <StyledRatingResumeText>Резюме</StyledRatingResumeText>
                    <StyledTextArea
                      value={resume}
                      onChange={e => {
                        setResume(e.currentTarget.value);
                      }}
                      autoSize={{ maxRows: 7 }}
                    />
                  </StyledRatingLabel>
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
