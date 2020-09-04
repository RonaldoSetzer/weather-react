import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa';

import { Container, Link } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <FaHome size={30} />
        Home
      </Link>
      <Link to="/about">
        <FaUser size={30} />
        About
      </Link>
    </Container>
  );
}

export default Header;
