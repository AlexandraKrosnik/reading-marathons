import { Section, Title } from './Results.styled';
import FormResult from './FormResult/index';
import ListResults from './ListResults/ListResults';
import useResult from './useResult';
import { Empty } from 'antd';

const Results = ({ training, onSubmit, results }) => {
  const { getBooksForSelect } = useResult(training);

  return (
    <>
      {training && (
        <Section data-status={training.status}>
          <Title>Результати</Title>
          {training && training.status === 'active' && (
            <FormResult
              onSubmit={onSubmit}
              data={{
                start: training.start,
                finish: training.finish,
                books: getBooksForSelect(),
              }}
            />
          )}
          {results &&
            results?.length !== 0 &&
            training.status !== 'planned' && (
              <ListResults results={results} status={training.status} />
            )}
          {results?.length === 0 && training.status === 'active' && (
            <p>Додайте свої перші результати!</p>
          )}
          {results?.length === 0 && training.status === 'planned' && (
            <Empty
              description={
                <span>
                  Тут поки пусто.
                  <br /> Тут будуть ваші результати
                </span>
              }
            />
          )}
        </Section>
      )}
    </>
  );
};

export default Results;
