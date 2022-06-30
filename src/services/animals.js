const url = 'http://localhost:7890/api/v1/animals';
export default async function fetchAnimals() {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export async function fetchAnimalById(id) {
  const data = await fetch(url + `/${id}`);
  const response = await data.json();
  return response;
}

export async function createAnimal({ name, image }) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ name, image }),
  });

  console.log('response', response);
  if (!response.ok) {
    throw new Error('REJECTED! You are not a keeper.');
  }
  return response;
}
