import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
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
          Voltar ao topo
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/MatheusVict')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/matheus-victor-henrique-270640236/'
              )
            }
          />
          <AiFillYoutube
            onClick={() => handleRedirect('https://www.youtube.com/@matheusvictorhenrique')}
          />
          <AiOutlineWhatsApp
            onClick={() => handleRedirect('https://wa.me/5581989520362')}
          />
        </section>
      </div>
    </Container>
  );
}
