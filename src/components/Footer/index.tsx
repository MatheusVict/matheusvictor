import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

export function Footer() {
  const { t } = useTranslation();
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          {t('back_to_top')}
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/MatheusVict')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/matheus-victor-henrique/'
              )
            }
          />
          <AiFillYoutube
            onClick={() =>
              handleRedirect('https://www.youtube.com/@matheusvictorhenrique')
            }
          />
          <AiOutlineWhatsApp
            onClick={() => handleRedirect('https://wa.me/5581989520362')}
          />
        </section>
      </div>
    </Container>
  );
}
