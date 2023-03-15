import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome" required />
      <Input placeholder="Email" type="email" required />
      <TextArea placeholder="Menssagem" required />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
