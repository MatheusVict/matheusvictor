import { ExperiencesItems } from './ExperiencesItems';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="1 ano e 5 meses" description="de experiência" />

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
          Sou um desenvolvedor freelancer full-stack 
          com foco em aplicações web e mobile. 
          Minha expertise abrange tecnologias modernas, 
          como Spring Boot, Node.js, React e Android nativo. 
          Também uso metodologias ágeis para garantir a qualidade da entrega.
          Além de possuir ampla experiência em diversos projetos, desde sistemas 
          administrativos personalizados até aplicativos Android. 
          Além disso, dedico parte do meu tempo como desenvolvedor 
          voluntário para ONGs, combinando minhas habilidades técnicas 
          com um propósito de impacto social.
          "
        />
      </section>
    </Container>
  );
}
