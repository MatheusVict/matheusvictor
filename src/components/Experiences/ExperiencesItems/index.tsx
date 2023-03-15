import { ItemContainer } from './styles';

interface PropsExperiencesItem {
  year: string;
  title: string;
  description: string;
}

export function ExperiencesItems({
  year,
  title,
  description
}: PropsExperiencesItem) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
