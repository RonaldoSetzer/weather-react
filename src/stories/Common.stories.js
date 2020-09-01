import React from 'react';
import styled from 'styled-components';

import { Title, List } from '../components/ui';

export const title = () => <Title>Title</Title>;

export const titleWithUppercase = () => <Title uppercase>Title</Title>;

export const titleWithCaptalize = () => <Title capitalize>title</Title>;

export const list = () => (
  <>
    <h1>List</h1>
    <List>
      <li>list doesn't have styles</li>
      <li>list doesn't almost a minimun of line-height</li>
      <li>list has padding-top of 0.5rem</li>
      <li>list has padding-bottom of 0.5rem</li>
    </List>
  </>
);

export default {
  title: 'Design System/Common',
};
