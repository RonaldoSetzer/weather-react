import React, { useState } from 'react';

import { Form } from './styles';
import { Compass } from '../../assets/icons';

function SearchBox({ handleSearch }) {
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(city);
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
