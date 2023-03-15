import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Ultimos projetos" />

      <section>
        <ProjectItem
          img="https://images.pling.com/img/00/00/46/57/62/1309060/e197b0dc3d4f9a36a0cabfbdbab00e4bba12.png"
          title="Projeto 01"
          type="WebSite"
          slug="teste"
        />
        <ProjectItem
          img="https://149366088.v2.pressablecdn.com/wp-content/uploads/2016/10/digitalocean-penguin-linux-wallpaper.jpg"
          title="Projeto 02"
          type="WebSite"
          slug="teste"
        />
        <ProjectItem
          img="https://c4.wallpaperflare.com/wallpaper/726/754/357/kali-linux-kali-linux-nethunter-linux-unix-lenovo-hd-wallpaper-preview.jpg"
          title="Projeto 03"
          type="WebSite"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projects">Ver todos os projetos</Link>
      </button>
    </Container>
  );
}
