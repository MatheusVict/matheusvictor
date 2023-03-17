import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}
