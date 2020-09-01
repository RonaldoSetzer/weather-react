import React, { useState } from 'react';

import { Form } from './styles';
import { Compass } from '../../assets/icons';
import { requestForecast } from '../../store/modules/weather/actions';

function SearchBox({ dispatch }) {
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(requestForecast(city));
  }

  function handleChange(e) {
    e.preventDefault();
    setCity(e.currentTarget.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Compass />
      <input onChange={handleChange} placeholder="Type a city" />
    </Form>
  );
}

export default SearchBox;
