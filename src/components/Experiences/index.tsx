import { ExperiencesItems } from './ExperiencesItems';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="6 meses" description="de experiência" />

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
          Atuo como desenvolvedor freelancer, criando aplicações web e
          mobile com tecnologias modernas, como Spring Boot, Node.js, React e Android nativo.
          Minha missão é entregar soluções sólidas e eficazes para atender às demandas do seu negócio.
          Tenho experiência em projetos variados, desde Landing Pages até sistemas de gerenciamento de
          estoque e aplicativos de adoção de animais. Além disso, também dedico parte do meu tempo como
          desenvolvedor voluntário para a ONG dos Escoteiros.
          Minha abordagem é focada em compreender suas necessidades e fornecer soluções tecnológicas que
          façam a diferença. Estou comprometido em entregar resultados de qualidade que agreguem valor ao
          seu negócio.
          "
        />
      </section>
    </Container>
  );
}
