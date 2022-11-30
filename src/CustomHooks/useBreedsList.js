import { useEffect, useState } from "react";

const localCache = {}; //TODO: using Caching

const useBreedsList = (animal) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else if (localCache[animal]) {
      setBreeds(localCache[animal]);
    } else {
      requesBreeds();
      // console.log("useEffect");
    }
  }, [animal]); //eslint-disable-line react-hooks/exhaustive-deps

  async function requesBreeds() {
    setBreeds([]);
    // console.log("before await");
    const response = await fetch(
      `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const { breeds: newBreeds } = await response.json();
    localCache[animal] = newBreeds;
    setBreeds(localCache[animal]);
    // console.log("after await");
  }

  return [breeds];
};

export default useBreedsList;
