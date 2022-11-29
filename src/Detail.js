import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState();
  console.log(pet);
  useEffect(() => {
    requestPet();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPet() {
    const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const {
      pets: [pet],
    } = await response.json();
    setPet(pet);
  }

  return (
    <div className="detail">
      {!pet ? (
        "Loading . . . "
      ) : (
        <div className="detail__box container">
          <h2>{pet.name}</h2>
          <p>{pet.state + ", " + pet.city}</p>
          <p>{pet.breed + " ~ " + pet.animal}</p>
          <p>ID : {pet.id}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
