import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';

export function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus Serviços?
          </>
        }
        description={
          <>Preencha o formulário abaixo que irei retornar em breve</>
        }
      />

      <Form />
    </Container>
  );
}
