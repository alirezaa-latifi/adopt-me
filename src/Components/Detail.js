import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import DetailSkeleton from "../Skeletons/DetailSkeleton";
import fetchDetail from "../APIs/fetchDetail";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["detail", id], fetchDetail);

  if (isLoading) {
    return (
      <div className="detail container">
        <DetailSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="detail container">
        There is a problem in getting Pet data, Please refresh the page.
      </div>
    );
  }

  const { name, animal, breed, city, state, description, images } =
    data.pets[0];

  return (
    <div className="detail container">
      <Carousel images={images} />
      <div className="detail__header">
        <h1 className="detail__title">{name}</h1>
        <div className="detail__line"></div>
        <button className="detail__cta">Adopt me</button>
      </div>
      <span>{`${city}, ${state} ~ `}</span>
      <span>{`${breed}, ${animal.toUpperCase()}`}</span>
      <p className="detail__desc">{description}</p>
    </div>
  );
};

export default Detail;
