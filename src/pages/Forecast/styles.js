import styled from 'styled-components';

export const Background = styled.div`
  ${props => props.background && `background: ${props.background};`}
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Container = styled.main`
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ShadowBox = styled.div`
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
