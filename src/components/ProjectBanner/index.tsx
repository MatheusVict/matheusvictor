import { Container } from './styles';

interface ProjectBannerProps {
  title: string;
  type: string;
  imgUrl: string;
}

export function ProjectBanner({ title, type, imgUrl }: ProjectBannerProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}
