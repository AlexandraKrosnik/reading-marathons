import { Descriptions } from 'antd';
import PropTypes from 'prop-types';
import useBookDrawer from './useBookDrawer';
import {
  SpinStyled,
  DrawerStyled,
  HeadStyled,
  DrawerImgStyled,
  TitleStyled,
  BodyStyled,
  HeaderStyled,
  MiddleStyled,
  DescriptionsStyled,
  DescriptionsItemStyled,
  DescriptionsItemLabel,
  DescriptionsItemContent,
} from './BookDrawer.styled';
import Rating from 'react-rating';
const BookDrawer = ({ onClose, open }) => {
  const { data, isLoading, isMobile } = useBookDrawer(open);
  const book = data?.book;
  return (
    <DrawerStyled
      placement={!isMobile ? 'right' : 'bottom'}
      onClose={onClose}
      open={open}
      closable={false}
      width={!isMobile && '500px'}
    >
      {isLoading && <SpinStyled size="large" />}
      {book && (
        <>
          <HeaderStyled>
            <HeadStyled>
              <DrawerImgStyled src={book.image?.url} alt={book.title} />
            </HeadStyled>
          </HeaderStyled>
          <MiddleStyled></MiddleStyled>

          <BodyStyled>
            <TitleStyled>{book.title}</TitleStyled>
            <DescriptionsStyled layout="horizontal" column={1}>
              <Descriptions.Item
                label={<DescriptionsItemLabel>Автор</DescriptionsItemLabel>}
              >
                <DescriptionsItemContent>{book.author}</DescriptionsItemContent>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <DescriptionsItemLabel>Рік видання</DescriptionsItemLabel>
                }
              >
                <DescriptionsItemContent>
                  {book.publication}
                </DescriptionsItemContent>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <DescriptionsItemLabel>
                    Кількість сторінок
                  </DescriptionsItemLabel>
                }
              >
                <DescriptionsItemContent>{book.pages}</DescriptionsItemContent>
              </Descriptions.Item>
              <Descriptions.Item
                label={<DescriptionsItemLabel>Статус</DescriptionsItemLabel>}
              >
                <DescriptionsItemContent>
                  {book.status === 'plan' && 'Планую прочитати'}
                  {book.status === 'already' && 'Прочитано'}
                  {book.status === 'now' && 'Читаю зараз'}
                </DescriptionsItemContent>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <DescriptionsItemLabel>
                    Кількість прочитаних разів
                  </DescriptionsItemLabel>
                }
              >
                <DescriptionsItemContent>
                  {book.readTimes}
                </DescriptionsItemContent>
              </Descriptions.Item>
              {book.rating && (
                <>
                  <Descriptions.Item
                    label={
                      <DescriptionsItemLabel>Відгук</DescriptionsItemLabel>
                    }
                  >
                    <DescriptionsItemContent>
                      {book.resume}
                    </DescriptionsItemContent>
                  </Descriptions.Item>
                </>
              )}
            </DescriptionsStyled>
          </BodyStyled>
        </>
      )}
    </DrawerStyled>
  );
};

BookDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default BookDrawer;
