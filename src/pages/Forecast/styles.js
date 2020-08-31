import styled from 'styled-components';

export const Background = styled.div`
  ${props => props.background && `background: ${props.background};`}
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.main`
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
