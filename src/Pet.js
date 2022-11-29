import { Link } from "react-router-dom";

const Pet = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.images[0]} alt={pet.name} className="pet-card__img" />
      <div className="pet-card__content">
        <h2 className="pet-card__title">{pet.name}</h2>
        <p>{pet.state + ", " + pet.city}</p>
        <p>{pet.breed + " ~ " + pet.animal}</p>
        <Link to={`details/${pet.id}`} className="pet-card__more">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Pet;
