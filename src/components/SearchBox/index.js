import React, { useState } from 'react';

import { Form } from './styles';
import { Compass } from '../../assets/icons';

function SearchBox({ handleSearch, userAddress, isLoading }) {
  const [city, setCity] = useState(userAddress);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(city);
  }

  function handleChange(e) {
    e.preventDefault();
    setCity(e.currentTarget.value);
  }

  return (
    <Form onSubmit={handleSubmit} isLoading={isLoading}>
      <Compass />
      <input
        defaultValue={userAddress}
        onChange={handleChange}
        placeholder="Type a city"
      />
    </Form>
  );
}

export default SearchBox;
