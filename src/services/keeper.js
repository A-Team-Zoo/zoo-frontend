const url = 'http://localhost:7890/api/v1/keepers';

export async function signUpKeeper({ email, password, name }) {
  const data = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password, name }),
  });
  const resp = await data.json();
  return resp;
}
