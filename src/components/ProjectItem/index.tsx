import Link from 'next/link';
import { Container } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export function ProjectItem({ title, imgUrl, slug, type }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </Link>
    </Container>
  );
}
