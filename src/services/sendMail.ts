import axios from 'axios';

export const sendContactMail = async (
  name: string,
  SendMail: string,
  content: string
) => {
  const data = {
    name,
    SendMail,
    content
  };

  try {
    return await axios.post(`http://localhost:3000/api/contatc`, data);
  } catch (error) {
    return error;
  }
};
