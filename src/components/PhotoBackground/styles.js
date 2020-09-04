import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.background && `background: url(${props.background});`}
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
