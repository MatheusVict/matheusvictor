import { ExperiencesItems } from './ExperiencesItems';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="7 meses" description="de experiência" />

      <section>
        <ExperiencesItems
          year="2023"
          title="Desenvolvedor full-stack"
          description="
          Atuei como
          desenvolvedor full-stack,
          atuei nas construção de uma aplicação voltada
          para o gerenciamento e automação de whatsapp, onde era responsável
          pela criação do Front-End com Reactjs, Redux, ReactFlow e o Back-End com Nodejs
          e com MongoDB, além de, fazer a integração de APIs externas com internas da empresa.
          utilizando os melhores padrões de código e de projeto e documentação.
          "
        />
        <ExperiencesItems
          year="2023"
          title="Desenvolvedor full-stack"
          description="
          Sou um desenvolvedor freelancer
          especializado na criação de aplicações web e mobile usando tecnologias
          modernas como Spring Boot, Node.js, Nest.js, React e Android nativo. Minha paixão é
          transformar ideias em soluções tecnológicas impactantes. Com experiência em diversos
          projetos, desde Landing Pages até sistemas de gerenciamento e apps de adoção de animais,
          estou comprometido em fornecer resultados de qualidade que agreguem valor aos negócios.
          Também dedico parte do meu tempo como desenvolvedor voluntário para ONGs, unindo minha
          habilidade técnica ao propósito de fazer a diferença.
          "
        />
      </section>
    </Container>
  );
}
