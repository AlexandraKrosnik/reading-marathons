import { useState } from 'react';

const useGoalsListComponents = () => {
  const [searchTotalFilter, setSearchFilter] = useState({});

  const handleSearch = searchParams => {
    // console.log(searchParams);
    setSearchFilter(searchParams);
    // setSearchFilter(prevFilters => ({
    //   ...prevFilters,
    //   search: searchParams,
    // }));
  };

  return {
    searchTotalFilter,
    handleSearch,
  };
};

export default useGoalsListComponents;
