import { Descriptions, Rate } from 'antd';
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

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
  DescriptionsItemLabel,
  DescriptionsItemContent,
  SpaceStyled,
  DropdownStyled,
  ButtonItemsStyled,
} from './BookDrawer.styled';

const BookDrawer = () => {
  const { data, isLoading, isMobile, deleteBookById, isOpen, onCloseDrawer } =
    useBookDrawer();
  const book = data?.book;
  const items = [
    {
      key: 'delete',
      icon: (
        <ButtonItemsStyled
          shape="circle"
          type="ghost"
          icon={<DeleteOutlined style={{ fontSize: '20px' }} />}
          onClick={deleteBookById}
        ></ButtonItemsStyled>
      ),
    },
    {
      key: 'change',
      icon: (
        <ButtonItemsStyled
          shape="circle"
          type="ghost"
          icon={<EditOutlined style={{ fontSize: '20px' }} />}
          // onClick={}
        ></ButtonItemsStyled>
      ),
    },
  ];

  return (
    <DrawerStyled
      placement={!isMobile ? 'right' : 'bottom'}
      onClose={onCloseDrawer}
      open={isOpen}
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
                <DescriptionsItemContent data-status={book.status}>
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
                      <DescriptionsItemLabel>Оцінка</DescriptionsItemLabel>
                    }
                  >
                    <DescriptionsItemContent>
                      <Rate
                        style={{ width: '120px', fontSize: '17px' }}
                        disabled
                        value={book.rating}
                      />
                    </DescriptionsItemContent>
                  </Descriptions.Item>
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
            <SpaceStyled>
              <DropdownStyled
                menu={{
                  items,
                }}
                placement="top"
                getPopupContainer={trigger => trigger.parentElement}
              >
                <ButtonItemsStyled
                  shape="circle"
                  type="ghost"
                  icon={<MoreOutlined style={{ fontSize: '21px' }} />}
                ></ButtonItemsStyled>
              </DropdownStyled>
            </SpaceStyled>
          </BodyStyled>
        </>
      )}
    </DrawerStyled>
  );
};

export default BookDrawer;
