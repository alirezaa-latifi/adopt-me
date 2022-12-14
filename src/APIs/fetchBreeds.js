async function fetchBreeds({ queryKey }) {
  const animal = queryKey[1];
  if (!animal) return [];
  const response = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!response.ok) throw new Error(`breeds ${animal} fetch not ok`);
  return response.json();
}

export default fetchBreeds;
