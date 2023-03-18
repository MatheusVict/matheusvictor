import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FormContainer, Input, TextArea } from './styles';
import { sendContactMail } from '../../../services/sendMail';
import theme from '../../../styles/theme';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (load) return;

    if (!name.trim() || !email.trim() || !content.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoad(true);
      await sendContactMail(name, email, content);
      setName('');
      setEmail('');
      setContent('');

      toast('Mensagem enviada com sucesso', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao enviar o email', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoad(false);
    }
  };

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="Nome"
      />
      <Input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Email"
        type="email"
      />
      <TextArea
        value={content}
        onChange={({ target }) => setContent(target.value)}
        placeholder="Menssagem"
      />
      <button type="submit" disabled={load}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
