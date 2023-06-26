import { useEffect, useState } from 'react';
const useMyGoal = booksLeft => {
  const [noBooksLeft, setNoBooksLeft] = useState(true);

  useEffect(() => {
    if (booksLeft || booksLeft === 0) {
      setNoBooksLeft(false);
    } else {
      setNoBooksLeft(true);
    }
  }, [booksLeft]);
  return { noBooksLeft };
};

export default useMyGoal;
