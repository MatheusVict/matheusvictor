import {
  SiNestjs,
  SiAngular,
  SiAndroidstudio,
  SiSpring
} from 'react-icons/si';
import { FaReact, FaJava } from 'react-icons/fa';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="Java" icon={<FaJava />} />
        <KnowledgeItem title="Spring" icon={<SiSpring />} />
        <KnowledgeItem title="Android Nativo" icon={<SiAndroidstudio />} />
        <KnowledgeItem title="Nest Js" icon={<SiNestjs />} />
        <KnowledgeItem title="Angular" icon={<SiAngular />} />
        <KnowledgeItem title="React Js" icon={<FaReact />} />
      </section>
    </Container>
  );
}
