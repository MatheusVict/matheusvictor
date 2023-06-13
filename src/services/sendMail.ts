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
    return await axios.post(`${process.env.URL}/api/contatc`, data);
  } catch (error) {
    return error;
  }
};
