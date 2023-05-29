const useSelectBooksRestartReadingContent = (
  selectedBooks,
  setSelectedBooks,
  books
) => {
  const handleCheckboxChange = (book, event) => {
    setSelectedBooks(prevSelectedBooks => {
      if (event.target.checked) {
        return [...prevSelectedBooks, book];
      } else {
        return prevSelectedBooks.filter(
          selectedBook => selectedBook._id !== book._id
        );
      }
    });
  };

  const handleSelectAllCheckboxChange = event => {
    if (event.target.checked) {
      setSelectedBooks(books);
    } else {
      setSelectedBooks([]);
    }
  };

  const isChecked = bookId => {
    return selectedBooks.some(selectedBook => selectedBook._id === bookId);
  };

  return { handleCheckboxChange, handleSelectAllCheckboxChange, isChecked };
};

export default useSelectBooksRestartReadingContent;
