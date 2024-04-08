import { useTranslation } from 'react-i18next';
import { ExperiencesItems } from './ExperiencesItems';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import { getDifferenceDateInYearsAndMonths } from '../../utils/formatDate';

export function Experiences() {
  const { t } = useTranslation();

  const current = new Date();
  const different= getDifferenceDateInYearsAndMonths(current);

  return (
    <Container>
      <SectionTitle
        title={`${different.years} ${t('time_of_experience_years')} ${different.months} ${t('time_of_experience_months')}`}
        description={t('experience')}
      />

      <section>
        <ExperiencesItems
          year="2023"
          title={t('full_stack_developer')}
          description={t('experience_1')}
        />
        <ExperiencesItems
          year="2023"
          title={t('full_stack_developer')}
          description={t('experience_2')}
        />
        <ExperiencesItems
          year="2023"
          title={t('back_end_developer')}
          description={t('experience_3')}
        />
      </section>
    </Container>
  );
}
