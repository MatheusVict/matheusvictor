import { GetStaticPaths, GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import { createClient } from '../../../services/prismicio';
import { IProject } from '../../../types/Projects.interface';
import { LoadingScreen } from '../../../components/LoadingScreen';

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title={project.title}
        type={project.title}
        imgUrl={project.thumbnail}
      />

      <main>
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
