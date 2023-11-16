import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { ProjectContainer } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function ProjectItem({ title, type, slug, img }: ProjectItemProps) {
  const { t } = useTranslation();
  return (
    <ProjectContainer imgURL={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          {t('see_more')} <AiOutlineRightCircle />
        </Link>
      </button>
    </ProjectContainer>
  );
}
