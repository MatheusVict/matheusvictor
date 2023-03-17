import { Container, SpinnerContainer } from './styles';

export function LoadingScreen() {
  return (
    <Container>
      <SpinnerContainer>
        <div className="sk-wander">
          <div className="sk-wander-cube" />
          <div className="sk-wander-cube" />
          <div className="sk-wander-cube" />
          <div className="sk-wander-cube" />
        </div>
      </SpinnerContainer>
    </Container>
  );
}
