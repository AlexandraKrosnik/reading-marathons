import { WellDoneModalStyled, Text } from './WellDoneModal.styled';
import { ReactComponent as ThumbUpIcon } from 'images/svg/thumbUp.svg';

export default function WellDoneModal({ status, onClose }) {
  return (
    <>
      (
      <WellDoneModalStyled>
        <ThumbUpIcon style={{ fill: '#A6ABB9' }} />
        <Text>
          {(status === 'all' || status === 'pages') &&
            'Ти молодчина! Ти успішно закінчив тренування!'}
          {status === 'date' &&
            'Ти молодчина, але потрібно швидше!  Наступного разу тобі все вдасться'}
        </Text>
      </WellDoneModalStyled>
      )
    </>
  );
}
