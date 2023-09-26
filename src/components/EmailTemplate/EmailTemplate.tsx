import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  sender: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  sender,
  content
}) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333333'
    }}
  >
    <div
      style={{
        backgroundColor: '#f2f2f2',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <h1>Email do portfolio</h1>
    </div>

    <div style={{ padding: '20px' }}>
      <h2>Você recebeu de, {name}!</h2>

      <p>Aqui está o conteudo.</p>

      <p>{content}</p>

      <p
        style={{
          display: 'inline-block',
          backgroundColor: '#ff9900',
          color: '#ffffff',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '4px',
          marginTop: '20px'
        }}
      >
        sender: {sender}
      </p>
    </div>

    <div
      style={{
        backgroundColor: '#f2f2f2',
        padding: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#777777'
      }}
    >
      &copy; {new Date().getFullYear()} Portfolio Email. Todos os direitos
      reservados.
    </div>
  </div>
);
