import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${props => props.color};
`;

export default {
  title: 'Design System/Colors',
  component: ColorBox,
};

export const Yellow = () => <ColorBox color="#ffff00" />;
