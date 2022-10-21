import { Progress } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Rate, Badge } from 'antd';
import EllipsisText from 'react-ellipsis-text';
import {
  Box,
  PropertyName,
  StyledBookTitle,
  StyledButton,
  StyledIconBox,
  StyledItem,
  StyledList,
  StyledText,
  StyledTitle,
  Wrapper,
  StyledImage,
  StyledAuthBox,
  StyledAuthText,
  StyledProgress,
  StyledLS,
  StyledBadge,
  StyledRating,
  StyledLSTop,
} from './MobileTable.styled';
import Modal from 'components/modals/Modal/Modal';
import RatingModal from 'components/modals/RatingModal';
import useMobileTable from './useMobileTable';

const MobileTable = ({ title, status, data }) => {
  const { setBookId, toggleModal, isModalVisible, onModalClose, bookId } =
    useMobileTable();

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {data.map(item => {
          const progress = Math.floor((item?.leftPages * 100) / item?.pages);
          return (
            <StyledItem key={item._id}>
              <StyledBadge count={item.readTimes} showZero>
                <StyledIconBox>
                  <StyledImage src={item?.image.url} alt="book" />
                  <StyledAuthBox>
                    {/* {!item.rating && (
                      <StyledBookTitle>
                        <EllipsisText text={item?.title} length={50} />
                      </StyledBookTitle>
                    )}

                    <StyledAuthText>{item?.author}</StyledAuthText> */}
                    <StyledProgress percent={progress} />
                  </StyledAuthBox>
                </StyledIconBox>

                <StyledLS>
                  <StyledLSTop>
                    <StyledBookTitle>
                      <EllipsisText text={item?.title} length={50} />
                    </StyledBookTitle>

                    <Box>
                      <PropertyName>Автор:</PropertyName>
                      <StyledText>{item?.author}</StyledText>
                    </Box>
                    <Box>
                      <PropertyName>Рік:</PropertyName>
                      <StyledText>{item?.publication}</StyledText>
                    </Box>
                    <Box>
                      <PropertyName>Стор.:</PropertyName>
                      <StyledText>{item?.pages}</StyledText>
                    </Box>

                    {/* <StyledProgress percent={progress} /> */}
                  </StyledLSTop>

                  {item.rating && (
                    <StyledRating>
                      <Rate
                        style={{ width: '120px', fontSize: '17px' }}
                        disabled
                        value={item?.rating}
                      />
                      <EditOutlined
                        onClick={() => {
                          setBookId(item?._id);
                          toggleModal();
                        }}
                      />
                    </StyledRating>
                  )}
                </StyledLS>
              </StyledBadge>
            </StyledItem>
          );
        })}
      </StyledList>
      {isModalVisible && (
        <Modal onClose={onModalClose}>
          <RatingModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default MobileTable;
