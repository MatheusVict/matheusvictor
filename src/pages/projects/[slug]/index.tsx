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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          officiis est dignissimos magni debitis pariatur quaerat, quos officia
          nemo, molestiae maxime eveniet obcaecati aliquam exercitationem fuga
          animi impedit voluptate. Beatae laborum ab sapiente repellat maiores
          voluptas facere odit? Magnam, quam in temporibus quae reprehenderit,
          odit vel quod dicta nisi non minima tempora! Cumque dicta vitae labore
          ut officiis veritatis facilis ipsa facere error obcaecati numquam
          dignissimos repudiandae inventore, nesciunt doloremque voluptate
          expedita sed aliquam itaque doloribus? Cum asperiores laborum libero.
        </p>
        <button type="button">
          <a href="">Ver Projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
