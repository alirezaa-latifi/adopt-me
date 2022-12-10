async function fetchPets({ queryKey }) {
  const { animal, breed, location } = queryKey[1];

  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!response.ok)
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);

  return response.json();
}

export default fetchPets;
