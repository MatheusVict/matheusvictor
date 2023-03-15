import { AiOutlineGithub, AiFillLinkedin, AiFillGitlab } from 'react-icons/ai';
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
          <AiFillGitlab
            onClick={() => handleRedirect('https://gitlab.com/MatheusVict')}
          />
        </section>
      </div>
    </Container>
  );
}
