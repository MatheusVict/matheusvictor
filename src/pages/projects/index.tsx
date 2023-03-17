import { GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsContainer';
import { createClient } from '../../services/prismicio';
import { IProject } from '../../types/Projects.interface';
import 'aos/dist/aos.css';

interface ProjectsProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ProjectsContainer data-aos="zoom-out-right">
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismicClient = createClient({
    accessToken: process.env.PRISMIC_TOKEN
  });

  const projectsResponse = await prismicClient.query(
    Prismic.predicate.at('document.type', 'portfolio')
  );
  const projects = projectsResponse.results.map(proj => ({
    slug: proj.uid,
    title: proj.data.title,
    type: proj.data.type,
    description: proj.data.description,
    link: proj.url,
    thumbnail: proj.data.thumbnail.url,
    online_project: proj.data.online_project.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
