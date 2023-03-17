import { GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { Projects } from '../components/Projects';
import { Knowledge } from '../components/Knowledge';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { createClient } from '../services/prismicio';
import { IProject } from '../types/Projects.interface';
import 'aos/dist/aos.css';

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Knowledge />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
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
