import React from 'react';
import { useEffect, useState } from 'react';
import fetchAnimals from '../services/animals';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnimals();
      setAnimals(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {animals.map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}
    </div>
  );
}
