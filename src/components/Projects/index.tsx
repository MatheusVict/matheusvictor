import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';
import { IProject } from '../../types/Projects.interface';

interface ProjectsProps {
  projects: IProject[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Ultimos projetos" />

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
        <Link href="/projects">Ver todos os projetos</Link>
      </button>
    </Container>
  );
}
