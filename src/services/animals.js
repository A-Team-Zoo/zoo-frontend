export default async function fetchAnimals() {
  const url = 'http://localhost:7890/api/v1/animals';
  const data = await fetch(url, {
    method: 'GET',
  });
  const response = await data.json();
  return response;
}
