import { Text, Author, TextWrapper } from './LoginText.styled';
import { ReactComponent as QuoteIcon } from '../../../images/svg/quote.svg';
import quote from './staticLoginText.json';
export default function LoginText() {
  const values = Object.values(quote);
  const randomValue = values[parseInt(Math.random() * values.length)];

  return (
    <TextWrapper>
      <QuoteIcon />
      <Text>{randomValue.quote}</Text>
      <Author>{randomValue.author}</Author>
    </TextWrapper>
  );
}
