import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Results from "./Results";
import useBreedsList from "../CustomHooks/useBreedsList";
import fetchPets from "../APIs/fetchPets";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedsList(animal);
  const result = useQuery(["pets", searchParams], fetchPets);
  const pets = result?.data?.pets ?? [];
  return (
    <div className="search-params">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setSearchParams({
            location: formData.get("location") ?? "",
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
          });
        }}
      >
        {/* location ***********************************************/}
        <label className="form__label">
          Location:
          <input className="form__item" type="text" name="location" />
        </label>
        {/* animal **************************************************/}
        <div className="form__selects">
          <label className="form__label">
            Animal:
            <select
              name="animal"
              className="form__item"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
              onBlur={(e) => {
                setAnimal(e.target.value);
              }}
            >
              <option></option>
              {ANIMALS.map((an) => (
                <option key={an} value={an}>
                  {an.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          {/* breed *************************************************/}
          <label className="form__label">
            Breed:
            <select
              className="form__item"
              disabled={!breeds.length}
              name="breed"
            >
              <option></option>
              {breeds.map((br) => (
                <option key={br} value={br}>
                  {br}
                </option>
              ))}
            </select>
          </label>
        </div>
        {/* submit ************************************************/}
        <button className="form__btn">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
