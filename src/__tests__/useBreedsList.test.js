import { test, expect } from "@jest/globals";
// import { renderHook } from "@testing-library/react-hooks";
import useBreedsList from "../CustomHooks/useBreedsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";

const client = new QueryClient();

// faking the Component
function getBreedsList(animal) {
  let list;
  function TestComponent() {
    list = useBreedsList(animal);
    return null;
  }
  render(
    <QueryClientProvider client={client}>
      <TestComponent />
    </QueryClientProvider>
  );
  return list;
}

test("gives an empty breedslist with no animal", async () => {
  const [breeds, status] = getBreedsList("");
  expect(breeds).toHaveLength(0);
  expect(status).toEqual("loading");
});

/*
test("gives back breeds with an animal", async () => {
  const breeds = [
    "Havanese",
    "Bichon Frise",
    "Poodle",
    "Maltese",
    "Golden Retriever",
    "Labrador",
    "Husky",
  ];
  fetch.mockResponseOnce(
    JSON.stringify({
      animal: "dog",
      breeds,
    })
  );
  const { result, waitForNextUpdate } = renderHook(() => useBreedsList("dog"));

  await waitForNextUpdate(); 

  const [breedList, status] = result.current;
  expect(status).toBe("loaded");
  expect(breedList).toEqual(breeds);
});
*/

/*
Questions
1. How to use renderHook when the components that are using this hook, are wrapped  by a HOC (e.g: QueryClientProvider) 
2. waitForNextUpdate() has a timeout Error! why?  
*/
