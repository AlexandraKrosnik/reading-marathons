import { Title, List } from './ListResults.styled';
import ResultItem from './ResultItem/ResultItem';

const ListResults = ({ results, status }) => {
  const pad = value => {
    return String(value).padStart(2, '0');
  };
  const getDate = result => {
    const currentDate = new Date(result.date);
    const day = pad(currentDate.getDate());
    const month = pad(currentDate.getMonth() + 1);
    const year = currentDate.getFullYear();
    const dateResult = `${day}.${month}.${year}`;
    return dateResult;
  };

  return (
    <>
      <Title>Статистика</Title>

      <List data-status={status}>
        {results.map(({ book, result }) => {
          return (
            <ResultItem
              key={result._id}
              image={book.image}
              title={book.title}
              date={getDate(result)}
              pages={result.pages}
            />
          );
        })}
      </List>
      {/* </OverlayScrollbarsComponent> */}
    </>
  );
};

export default ListResults;
