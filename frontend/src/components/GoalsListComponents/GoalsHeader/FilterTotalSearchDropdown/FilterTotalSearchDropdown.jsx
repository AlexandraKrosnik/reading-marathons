import { Checkbox } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import {
  DropdownStyled,
  FilterIconStyled,
} from './FilterTotalSearchDropdown.styled';
const FilterTotalSearchDropdown = ({ filterParams, setFilterParams }) => {
  const onCheckboxChange = e => {
    setFilterParams(prevState => ({
      ...prevState,
      [e.target.label]: e.target.checked,
    }));
  };

  const items = [
    {
      key: 'titleCheckbox',
      label: (
        <Checkbox
          label="title"
          onChange={onCheckboxChange}
          checked={filterParams.title}
        >
          Пошук по назві
        </Checkbox>
      ),
    },
    {
      key: 'booksCheckbox',
      label: (
        <Checkbox
          label="books"
          onChange={onCheckboxChange}
          checked={filterParams.books}
        >
          Пошук по книгам
        </Checkbox>
      ),
    },
  ];

  return (
    <DropdownStyled
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <FilterIconStyled>
        <FilterOutlined />
      </FilterIconStyled>
    </DropdownStyled>
  );
};

export default FilterTotalSearchDropdown;
