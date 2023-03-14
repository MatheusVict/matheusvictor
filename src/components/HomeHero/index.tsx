import { Container, TextContainer } from './styles';

export function HomeHero() {
  return (
    <Container>
      <img src="/pessoa.webp" alt="minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Matheus</h2>
        </TextContainer>
      </div>
    </Container>
  );
}
