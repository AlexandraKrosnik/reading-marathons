import { Tooltip } from 'antd';
import {
  CheckboxStyled,
  CheckboxGroupStyled,
  IconInfoStyled,
  SelectBooksStyled,
  SelectBooksTitleStyled,
} from './SelectBooksRestartReadingContent.styled';
import PropTypes from 'prop-types';
import useSelectBooksRestartReadingContent from './useSelectBooksRestartReadingContent';
const SelectBooksRestartReadingContent = ({
  isMobile,
  books,
  selectedBooks,
  setSelectedBooks,
}) => {
  const { handleCheckboxChange, handleSelectAllCheckboxChange, isChecked } =
    useSelectBooksRestartReadingContent(selectedBooks, setSelectedBooks, books);
  return (
    <SelectBooksStyled>
      <SelectBooksTitleStyled>
        Виберіть книги, які хочете почати читати з початку!
      </SelectBooksTitleStyled>
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

        {books?.map(book => (
          <CheckboxStyled
            key={book._id}
            checked={isChecked(book._id)}
            onChange={event => handleCheckboxChange(book, event)}
          >
            {book.title}
          </CheckboxStyled>
        ))}
      </CheckboxGroupStyled>
    </SelectBooksStyled>
  );
};

SelectBooksRestartReadingContent.propTypes = {
  books: PropTypes.array,
  selectedBooks: PropTypes.array,
  isMobile: PropTypes.bool.isRequired,
  setSelectedBooks: PropTypes.func,
};
export default SelectBooksRestartReadingContent;
