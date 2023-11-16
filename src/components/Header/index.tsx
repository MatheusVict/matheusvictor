import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import NavLink from './navLink';

export function Header() {
  const { t } = useTranslation();
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title={t('projects')} path="/projects" includes />
      </ul>
    </Container>
  );
}
