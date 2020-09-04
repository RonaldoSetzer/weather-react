import { Link as RRDLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: var(--background-default);
  color: var(--color-default);
  display: flex;
`;

export const Link = styled(RRDLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: none;
`;
