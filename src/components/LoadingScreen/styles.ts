import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const SpinnerContainer = styled.div`
  .sk-wander {
    width: 40px;
    height: 40px;
    position: relative;
  }

  .sk-wander-cube {
    background-color: ${({ theme }) => theme.primary};
    width: 20%;
    height: 20%;
    position: absolute;
    top: 0;
    left: 0;
    --sk-wander-distance: calc(40px * 0.75);
    animation: sk-wander 2s ease-in-out -2s infinite both;
  }
  .sk-wander-cube:nth-child(2) {
    animation-delay: -0.5s;
  }
  .sk-wander-cube:nth-child(3) {
    animation-delay: -1s;
  }

  @keyframes sk-wander {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: translateX(var(--sk-wander-distance)) rotate(-90deg) scale(0.6);
    }
    50% {
      /* Make FF rotate in the right direction */
      transform: translateX(var(--sk-wander-distance))
        translateY(var(--sk-wander-distance)) rotate(-179deg);
    }
    50.1% {
      transform: translateX(var(--sk-wander-distance))
        translateY(var(--sk-wander-distance)) rotate(-180deg);
    }
    75% {
      transform: translateX(0) translateY(var(--sk-wander-distance))
        rotate(-270deg) scale(0.6);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
