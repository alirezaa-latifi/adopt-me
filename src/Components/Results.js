import Pet from "./Pet";
import PostCardSkeleton from "../Skeletons/PetCardSkeleton";

const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Results = ({ pets }) => {
  return (
    <div className="results container">
      {!pets.length
        ? skeletonArr.map((el) => <PostCardSkeleton key={el} />)
        : pets.map((pet) => (
            <Pet
              key={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              city={pet.city}
              state={pet.state}
              images={pet.images}
              id={pet.id}
            />
          ))}
    </div>
  );
};

export default Results;
