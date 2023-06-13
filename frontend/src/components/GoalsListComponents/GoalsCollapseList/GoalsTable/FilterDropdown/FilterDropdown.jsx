import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { forwardRef } from 'react';
const FilterDropdown = forwardRef(
  (
    {
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      handleSearch,
      handleReset,
      dataIndex,
    },
    ref
  ) => {
    return (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={e => e.stopPropagation()}
      >
        <Input
          ref={ref}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
          >
            Search
          </Button>
          <Button
            onClick={() =>
              clearFilters && handleReset(clearFilters, confirm, dataIndex)
            }
            size="small"
          >
            Reset
          </Button>
        </Space>
      </div>
    );
  }
);

export default FilterDropdown;
