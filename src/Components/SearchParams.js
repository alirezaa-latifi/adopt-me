import { useEffect, useState } from "react";
import useBreedsList from "../CustomHooks/useBreedsList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  console.log("SearchParam");
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedsList(animal);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const response = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const { pets: newPets } = await response.json();
    setPets(newPets);
  }

  return (
    <div className="search-params">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        {/* location ***********************************************/}
        <label className="form__label">
          Location:
          <input
            className="form__item"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        {/* animal **************************************************/}
        <div className="form__selects">
          <label className="form__label">
            Animal:
            <select
              className="form__item"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              }}
              onBlur={(e) => {
                setAnimal(e.target.value);
                setBreed("");
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
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              onBlur={(e) => setBreed(e.target.value)}
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
