import styled from 'styled-components';

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
