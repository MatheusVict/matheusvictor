import {
  SiNestjs,
  SiTypescript,
  SiLinux,
  SiAndroidstudio,
  SiSpring
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="React Js" icon={<FaReact />} />
        <KnowledgeItem title="Nest Js" icon={<SiNestjs />} />
        <KnowledgeItem title="Typescript" icon={<SiTypescript />} />
        <KnowledgeItem title="Android studio" icon={<SiAndroidstudio />} />
        <KnowledgeItem title="Spring" icon={<SiSpring />} />
        <KnowledgeItem title="Linux" icon={<SiLinux />} />
      </section>
    </Container>
  );
}
