import { ExperiencesItems } from '../components/ExperiencesItems';
import { SectionTitle } from '../components/SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="1 mês" description="de experiência" />

      <section>
        <ExperiencesItems
          year="2023"
          title="Dev full-stack"
          description="Atuei como desenvolvedor full-stack, participando da construção do back e do front"
        />
        <ExperiencesItems
          year="2023"
          title="Dev full-stack"
          description="Atuei como desenvolvedor full-stack, participando da construção do back e do front"
        />
        <ExperiencesItems
          year="2023"
          title="Dev full-stack"
          description="Atuei como desenvolvedor full-stack, participando da construção do back e do front"
        />
        <ExperiencesItems
          year="2023"
          title="Dev full-stack"
          description="Atuei como desenvolvedor full-stack, participando da construção do back e do front"
        />
      </section>
    </Container>
  );
}
