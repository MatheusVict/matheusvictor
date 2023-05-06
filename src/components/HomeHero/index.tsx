import { CodeItem, Container, InfosContainer, TextContainer } from './styles';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src="/mypic.png" alt="minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Matheus</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">// Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Matheus,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Victor</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Oque eu faço </span>
            {'\u007B'}
            <div>
              Função: <span className="blue">Dev Full-stack,</span>
            </div>
            <div>
              Atualmente: <span className="blue">Estudando</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
