import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';
import { IProject } from '../../types/Projects.interface';

interface ProjectsProps {
  projects: IProject[];
}

export function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation();
  return (
    <Container>
      <SectionTitle title={t('latest_projects')} />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">{t('see_all_projects')}</Link>
      </button>
    </Container>
  );
}
