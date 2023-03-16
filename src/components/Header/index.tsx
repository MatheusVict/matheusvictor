import { Container } from './styles';
import NavLink from './navLink';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projects" includes />
      </ul>
    </Container>
  );
}
