import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 0.5rem 0 1rem;;
`;

export const IconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 180px;
    height: 180px;
  }
`;

export const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  text-align: left;
`;
