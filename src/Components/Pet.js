import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, city, state, images, id }) => {
  return (
    <div className="pet-card">
      <img
        data-testid="thumbnail"
        src={
          images?.length
            ? images[0]
            : "http://pets-images.dev-apis.com/pets/none.jpg"
        }
        alt={name}
        className="pet-card__img"
      />
      <div className="pet-card__content">
        <h2 className="pet-card__title">{name}</h2>
        <p>{state + ", " + city}</p>
        <p>{breed + " ~ " + animal}</p>
        <Link to={`details/${id}`} className="pet-card__more">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Pet;
