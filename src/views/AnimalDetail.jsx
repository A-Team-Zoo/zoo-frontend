import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimalById } from '../services/animals';

export default function AnimalDetail() {
  const { id } = useParams();
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnimalById(id);

      setAnimal(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h3>{animal.name}</h3>
      <img style={{ width: '200px' }} src={animal.image}></img>
    </>
  );
}
