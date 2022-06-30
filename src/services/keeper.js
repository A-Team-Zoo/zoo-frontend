const url = 'http://localhost:7890/api/v1/keepers';

export async function signUpKeeper({ email, password, name }) {
  const keeper = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password, name }),
  });
  if (!keeper.ok) {
    throw new Error('REJECTED! You are not a keeper.');
  }
  return keeper;
}

export async function signInKeeper({ email, password }) {
  const keeper = await fetch(url + '/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!keeper.ok) {
    throw new Error('Invalid email or password');
  }
  return keeper;
}
