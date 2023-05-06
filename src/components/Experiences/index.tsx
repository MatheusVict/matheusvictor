import { ExperiencesItems } from './ExperiencesItems';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="2 meses" description="de experiência" />

      <section>
        <ExperiencesItems
          year="2023"
          title="Dev full-stack"
          description="
          Atuei como
          desenvolvedor full-stack,
          atuei nas construção de uma aplicação voltada
          para o gerenciamento e automação de whatsapp, onde era responsável
          pela criação do Front-End com Reactjs e o Back-End com Nodejs
          e com MongoDB, além de, fazer a integração de APIs externas com internas da empresa.
          utilizando os melhores padrões de código e de projeto e documentação.
          "
        />
      </section>
    </Container>
  );
}
