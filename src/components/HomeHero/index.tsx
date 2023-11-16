import { useTranslation } from 'react-i18next';
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';

export function HomeHero() {
  const { t } = useTranslation();
  return (
    <Container data-aos="fade-up">
      <img src="/mypic.png" alt="minha foto" />
      <div>
        <TextContainer>
          <h1>{t('hello')}</h1>
          <h2>{t('im_called')}</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">// {t('my_apresentation')}</span>
            <span className="purple">{t('what_i_do')} </span>
            {'\u007B'}
            <div>
              {t('stack')}: <span className="blue">{t('stack_name')},</span>
            </div>
            <div>
              {t('currently_working')}: <span className="blue">Freelancer</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">{t('who_i_am')} </span>
            {'\u007B'}
            <div>
              {t('name')}: <span className="blue">Matheus,</span>
            </div>
            <div>
              {t('last_name')}: <span className="blue">Victor</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
