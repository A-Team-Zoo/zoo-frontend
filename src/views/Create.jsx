import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createAnimal } from '../services/animals';

export default function Create() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createAnimal({ name, image });
      history.push('/animals');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Add an Animal to the zoo!
      {error && <p>{error}</p>}
      <input
        id="name"
        value={name}
        placeholder="Animal name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        id="image"
        value={image}
        placeholder="Image url"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>
      <button>Submit</button>
    </form>
  );
}
