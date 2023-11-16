import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';

export function ContactForm() {
  const { t } = useTranslation();
  return (
    <Container>
      <SectionTitle
        title={
          <>
            {t('need_my')}
            <br />
            {t('services')}
          </>
        }
        description={<>{t('fill_out_form')}</>}
      />

      <Form />
    </Container>
  );
}
