import { GetStaticPaths, GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Aos from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import { createClient } from '../../../services/prismicio';
import { IProject } from '../../../types/Projects.interface';
import { LoadingScreen } from '../../../components/LoadingScreen';
import 'aos/dist/aos.css';

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ProjectContainer>
      <Header />
      <Head>
        <title>{project.title} | Matheus</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main data-aos="fade-up">
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link}>Ver Projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismicClient = createClient({
    accessToken: process.env.PRISMIC_TOKEN
  });

  const projectsResponse = await prismicClient.query(
    Prismic.predicate.at('document.type', 'portfolio')
  );

  const paths = projectsResponse.results.map(proj => ({
    params: {
      slug: proj.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismicClient = createClient({
    accessToken: process.env.PRISMIC_TOKEN
  });

  const { slug } = context.params;

  const projectResponse = await prismicClient.getByUID(
    'portfolio',
    String(slug),
    {}
  );

  const project = {
    slug: projectResponse.uid,
    title: projectResponse.data.title,
    type: projectResponse.data.type,
    description: projectResponse.data.description,
    link: projectResponse.data.online_project.url,
    thumbnail: projectResponse.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
