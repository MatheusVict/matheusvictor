import { TbBrandNextjs } from 'react-icons/tb';
import { SiNestjs, SiTypescript, SiPython, SiKotlin } from 'react-icons/si';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="Next Js" icon={<TbBrandNextjs />} />
        <KnowledgeItem title="Nest Js" icon={<SiNestjs />} />
        <KnowledgeItem title="Typescript" icon={<SiTypescript />} />
        <KnowledgeItem title="kotlin" icon={<SiKotlin />} />
        <KnowledgeItem title="Python" icon={<SiPython />} />
      </section>
    </Container>
  );
}
