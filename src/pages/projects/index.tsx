import { GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
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
      <Head>
        <title>Projetos | Matheus Victor</title>
        <meta
          name="description"
          content="
          Olá sou Matheus Victor Henrique da Silva
          Está é minha página de projetos,
          onde utilizo os mais diversos projetos tanto no Back-End quanto no Front-End.
          Possui as mais diversas tecnologias seja de desenvolvimento web (web development),
          machine learning,
          mobile, dentre outros
          "
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="
          Olá, sou Matheus Vicor, sou desenvolvedor Full-stack,
          Este é a página de projetos do meu Portfolio!
          "
        />
      </Head>
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

  const projects = projectsResponse.results
    .sort((a, b) => {
      const dateA = new Date(a.first_publication_date);
      const dateB = new Date(b.first_publication_date);
      return dateB.getTime() - dateA.getTime();
    })
    .map(proj => ({
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
