import { useQuery } from "@tanstack/react-query";
import fetchBreeds from "../APIs/fetchBreeds";

const useBreedsList = (animal) => {
  const results = useQuery(["breeds", animal], fetchBreeds);
  return [results?.data?.breeds ?? [], results.status];
};

export default useBreedsList;
