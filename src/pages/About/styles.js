import styled from 'styled-components';
import { colorlevels } from '../../utils/colors';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background: var(--background-inverse);
  color: var(--color-inverse);
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100%;
  display: flex;
`;

export const Section = styled.section`
  background: ${props => props.colors && props.colors};
  padding: 1rem;
`;

export const Container = styled.main`
  color: #fff;
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 2rem;
    line-height: 2rem;
  }

  p {
    margin: 0.5rem 0;
  }

  ul {
    margin-left: 2rem;
  }

  b {
    font-weight: bold;
  }

  figure {
    width: 64px;
    height: 64px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0.5rem;
  }

  img {
    display: block;
    margin: -10px -15px;
    width: 150%;
  }
`;

export const Code = styled.div`
  width: 100%;
  background: var(--background-default);
  padding: 1rem;
  font-family: courrier;

  span {
    color: var(--color-inverse);
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const SocialButton = styled.a`
  max-width: 100px;
  padding: 0.3rem;
  color: #665642;
  display: flex;
  align-items: center;
  background: ${colorlevels.blue[3]};
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  margin-right: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

export const Tag = styled.li`
  padding: 0.3rem;
  background: #665642;
  color: #fff;
  font-size: 0.8rem;
  line-height: 0.8rem;
  border-radius: 5px;
  border: none;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;
