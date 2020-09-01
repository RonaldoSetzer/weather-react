import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Container } from './styles';
import { requestBingImageOfDay } from '../../store/modules/background/actions';

function PhotoBackground({ children }) {
  const dispatcher = useDispatch();
  const { url } = useSelector(state => state.background);

  useEffect(() => {
    dispatcher(requestBingImageOfDay());
  }, []);

  return <Container background={url}>{children}</Container>;
}

export default PhotoBackground;
