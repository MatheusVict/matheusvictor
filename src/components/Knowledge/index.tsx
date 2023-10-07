import { SiNestjs, SiAndroidstudio, SiSpring, SiKotlin } from 'react-icons/si';
import { FaReact, FaJava } from 'react-icons/fa';
import { TbBrandGolang } from 'react-icons/tb';
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
        <KnowledgeItem title="Golang" icon={<TbBrandGolang />} />
        <KnowledgeItem title="Nest Js" icon={<SiNestjs />} />
        <KnowledgeItem title="Kotlin" icon={<SiKotlin />} />
        <KnowledgeItem title="Android Nativo" icon={<SiAndroidstudio />} />
        <KnowledgeItem title="React Js" icon={<FaReact />} />
      </section>
    </Container>
  );
}
