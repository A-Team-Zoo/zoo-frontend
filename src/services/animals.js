const url = 'http://localhost:7890/api/v1/animals';
export async function fetchAnimals() {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export async function fetchAnimalById(id) {
  const data = await fetch(url + `/${id}`);
  const response = await data.json();
  return response;
}
