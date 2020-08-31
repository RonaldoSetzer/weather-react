import styled from 'styled-components';

export const Title = styled.h1`
  line-height: 1.2rem;
  font-size: 1.2rem;
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

export const List = styled.ul`
  list-style: none;
  padding: 0.5rem 0;

  li {
    margin: 0;
    line-height: 1.2rem;
    font-size: 1rem;
  }
`;

