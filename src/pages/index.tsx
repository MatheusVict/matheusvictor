import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { Projects } from '../components/Projects';
import { Knowledge } from '../components/Knowledge';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledge />
      </main>
    </HomeContainer>
  );
}
