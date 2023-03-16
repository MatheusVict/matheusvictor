import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsContainer';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="project01"
          type="Website"
          slug="teste"
          imgUrl="https://e0.pxfuel.com/wallpapers/245/340/desktop-wallpaper-ryuko-matoi-kill-la-kill.jpg"
        />
        <ProjectItem
          title="project01"
          type="Website"
          slug="teste"
          imgUrl="https://e0.pxfuel.com/wallpapers/245/340/desktop-wallpaper-ryuko-matoi-kill-la-kill.jpg"
        />
        <ProjectItem
          title="project01"
          type="Website"
          slug="teste"
          imgUrl="https://e0.pxfuel.com/wallpapers/245/340/desktop-wallpaper-ryuko-matoi-kill-la-kill.jpg"
        />
        <ProjectItem
          title="project01"
          type="Website"
          slug="teste"
          imgUrl="https://e0.pxfuel.com/wallpapers/245/340/desktop-wallpaper-ryuko-matoi-kill-la-kill.jpg"
        />
      </main>
    </ProjectsContainer>
  );
}
