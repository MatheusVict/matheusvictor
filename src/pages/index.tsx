/* eslint-disable import/no-absolute-path */
import { GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
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
import enTranslate from '../../public/locales/en/common.json';
import ptTranslate from '../../public/locales/pt/common.json';

interface HomeProps {
  projects: IProject[];
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: enTranslate
      },
      pt: {
        translations: ptTranslate
      }
    },

    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      useSuspense: true
    }
  });

i18n.on('languageChanged', lng => {
  document.documentElement.lang = lng;
});

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Matheus Victor</title>
        <meta
          name="description"
          content="Desenvolvedor Back End apaixonado por transformar
          códigos em soluções incríveis. Especialista em várias tecnologias.
          como Java, Spring, Quarkus, Angular dentre outros"
        />

        <meta property="og:image" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />

        <meta
          property="og:title"
          content="Matheus Victor - Desenvolvedor Back End"
        />
        <meta
          name="twitter:title"
          content="Matheus Victor - Desenvolvedor Back End"
        />

        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />

        <meta
          property="og:description"
          content="Desenvolvedor Freelancer Back End - Conheça o meu portfólio!"
        />
        <meta
          property="twitter:description"
          content="Desenvolvedor Freelancer Back End - Conheça o meu portfólio!"
        />

        <meta
          name="keywords"
          content="desenvolvedor Back End, tecnologias, portfolio, web development, Software Engineer"
        />

        <meta name="author" content="Matheus Victor Henrique da Silva" />

        <meta name="language" content="pt-BR" />

        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />

        <meta
          name="twitter:image:alt"
          content="Imagem que apresenta meu portfólio"
        />

        <meta
          name="googlebot"
          content="desenvolvedor Back End, tecnologias, portfolio, web development"
        />

        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:url"
          content="https://portfolio-kappa-ten-20.vercel.app"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Person',
              name: 'Matheus Victor Henrique da Silva',
              jobTitle: 'Desenvolvedor Back End',
              url: 'https://portfolio-kappa-ten-20.vercel.app',
              image: '/mypic.png',
              sameAs: [
                'https://github.com/MatheusVict',
                'https://www.linkedin.com/in/matheus-victor-henrique',
                'https://gitlab.com/MatheusVict',
                'https://www.youtube.com/@matheusvictorhenrique'
              ]
            })
          }}
        />
      </Head>
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
