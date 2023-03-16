import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Project 01"
        type="WebSite"
        imgUrl="https://e0.pxfuel.com/wallpapers/245/340/desktop-wallpaper-ryuko-matoi-kill-la-kill.jpg"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          dolore sit aliquam laboriosam corrupti harum, cupiditate assumenda
          recusandae a perferendis repudiandae iste quasi, doloribus odio est
          dolores ratione quisquam quae?
        </p>
        <button type="button">
          <a href="">Ver Projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
