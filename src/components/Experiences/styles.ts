import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media screen and (min-width: 701px) and (max-width: 999px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: rem;
    }
  }
`;
