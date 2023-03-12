import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface PropsNav {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: PropsNav) {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <span>{title}</span>
      </Link>
    </NavLinkContainer>
  );
}
