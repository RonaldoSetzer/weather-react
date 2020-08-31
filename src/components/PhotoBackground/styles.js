import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.background && `background: url(${props.background});`}
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
