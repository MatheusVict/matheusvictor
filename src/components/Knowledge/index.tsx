import {
  SiNestjs,
  SiAndroidstudio,
  SiSpring,
  SiKotlin,
  SiQuarkus,
  SiAngular
} from 'react-icons/si';
import { FaReact, FaJava } from 'react-icons/fa';
import { TbBrandGolang } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledge() {
  const { t } = useTranslation();
  return (
    <Container>
      <SectionTitle title={t('knowledges')} />
      <section>
        <KnowledgeItem title="Java" icon={<FaJava />} />
        <KnowledgeItem title="Spring" icon={<SiSpring />} />
        <KnowledgeItem title="Quarkus" icon={<SiQuarkus />} />
        <KnowledgeItem title="Golang" icon={<TbBrandGolang />} />
        <KnowledgeItem title="Angular" icon={<SiAngular />} />
        <KnowledgeItem title="React Js" icon={<FaReact />} />
        <KnowledgeItem title="Nest Js" icon={<SiNestjs />} />
        <KnowledgeItem title="Kotlin" icon={<SiKotlin />} />
        <KnowledgeItem title="Android Nativo" icon={<SiAndroidstudio />} />
      </section>
    </Container>
  );
}
