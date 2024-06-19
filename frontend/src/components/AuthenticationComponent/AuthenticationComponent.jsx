import SignUpForm from './SignUpForm';
import {
  AuthContainer,
  AuthSection,
  AboutAppWrapper,
  Overlay,
} from './AuthenticationComponent.styled';
import LoginForm from './LoginForm';
import LoginText from './LoginText/LoginText';
import { useMatchMedia } from 'hooks';
import SingUpText from './SingUpText/SingUpText';
export default function AuthenticationComponent({ type }) {
  const { isMobile } = useMatchMedia();
  return (
    <AuthContainer>
      <AuthSection data-status={type}>
        {type === 'singUp' && <SignUpForm />}
        {type === 'login' && <LoginForm />}
        {!isMobile && (
          <AboutAppWrapper data-status={type}>
            <Overlay />
            {type === 'login' && <LoginText />}
            {type === 'singUp' && <SingUpText />}
          </AboutAppWrapper>
        )}
      </AuthSection>
    </AuthContainer>
  );
}
