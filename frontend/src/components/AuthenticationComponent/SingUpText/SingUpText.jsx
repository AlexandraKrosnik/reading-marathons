import {
  AppName,
  BulletsTitle,
  BulletList,
  Bullet,
  AboutAppText,
  TextPartStyled,
} from './SingUpText.styled';

// import { Overlay } from '../AuthenticationComponent.styled';
export default function SingUpText() {
  return (
    <>
      {/* <Overlay /> */}
      <AboutAppText>
        <AppName>Books Reading</AppName>
        <TextPartStyled>
          <BulletsTitle>Допоможе вам</BulletsTitle>
          <BulletList>
            <Bullet>Швидше сформулювати свою ціль і розпочати читати</Bullet>
            <Bullet>Пропорційно розподілити навантаження на кожний день</Bullet>
            <Bullet>Відстежувати особистий успіх</Bullet>
          </BulletList>
        </TextPartStyled>
        <TextPartStyled>
          <BulletsTitle>Також ви зможете</BulletsTitle>
          <BulletList>
            <Bullet>Формувати особисту думку незалежну від інших</Bullet>
            <Bullet>
              Підвищити свої професійні якості опираючись на нові знання
            </Bullet>
            <Bullet>Стати цікавим співрозмовником</Bullet>
          </BulletList>
        </TextPartStyled>
      </AboutAppText>
    </>
  );
}
