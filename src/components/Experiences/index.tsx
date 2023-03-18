import { ExperiencesItems } from './ExperiencesItems';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="1 mês" description="de experiência" />

      <section>
        <ExperiencesItems
          year="2023"
          title="Dev full-stack"
          description="
          Atuei como
          desenvolvedor full-stack,
          atuei nas construção de uma aplicação voltada
          para o gerenciamento de whatsapp, onde era responsável
          pela criação do Front com Reactjs e o Back-End com Nodejs
          e com MongoDB Atlas,
          utilizando os melhores padrões de código e de projeto
          "
        />
      </section>
    </Container>
  );
}
