const useResult = training => {
  const getBooksForSelect = () => {
    return training?.statistics
      .map(({ book }) => {
        if (book.status !== 'already') {
          return {
            id: book._id,
            title: book.title,
          };
        }
        return null;
      })
      .filter(Boolean);
  };

  return { getBooksForSelect };
};

export default useResult;
