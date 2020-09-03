import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  background: var(--background-inverse);
  padding: 0.5rem;
  flex: 1;

  svg {
    margin-right: 0.5rem;
    width: 64px;
    height: 64px;
    animation: ${loading} 1s linear infinite;
    transform: translateZ(0);
    ${props =>
      props.isLoading
        ? 'animation-play-state:running;'
        : 'animation-play-state:paused;'}
  }

  input,
  input::placeholder {
    font-size: 2rem;
    width: 100%;
    outline: none;
    border: none;
    color: var(--color-inverse);
  }
`;
