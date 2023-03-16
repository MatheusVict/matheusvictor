import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface PropsNav {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: PropsNav) {
  const router = useRouter();

  function verifyIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }

    return path === router.pathname;
  }

  const isActive = verifyIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <span>{title}</span>
      </Link>
    </NavLinkContainer>
  );
}
