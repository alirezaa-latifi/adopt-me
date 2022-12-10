import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import DetailSkeleton from "../Skeletons/DetailSkeleton";

class Detail extends Component {
  state = {};
  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.id}`
    );
    const { pets } = await response.json();
    this.setState({ ...pets[0] });
  }

  render() {
    console.log(this.state);

    if (!Object.keys(this.state).length) {
      return (
        <div className="detail container">
          <DetailSkeleton />
        </div>
      );
    }
    const { name, animal, breed, city, state, description, images } =
      this.state;
    return (
      <div className="detail container">
        <Carousel images={images} />
        <h1 className="detail__titile">{name}</h1>
        <span>{`${city}, ${state} ~ `}</span>
        <span>{`${breed}, ${animal.toUpperCase()}`}</span>
        <p className="detail__desc">{description}</p>
      </div>
    );
  }
}

const WrappedDetail = () => {
  const { id } = useParams();
  return <Detail id={id} />;
};

export default WrappedDetail;
