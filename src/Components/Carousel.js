import { Component } from "react";

class Carousel extends Component {
  state = {
    activeImg: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleClick = (e) => {
    this.setState({ activeImg: +e.target.dataset.index });
  };

  render() {
    const { images } = this.props;
    return (
      <div className="carousel">
        <div className="carousel__big">
          <img src={this.props.images[this.state.activeImg]} alt="animal" />
        </div>
        <div className="carousel__smallers">
          {images.map((src, idx) => (
            // eslint-disable-next-line
            <img
              key={src}
              src={src}
              alt="animal"
              data-index={idx}
              onClick={this.handleClick}
              className={
                this.state.activeImg === idx
                  ? "carousel__small carousel__small--active"
                  : "carousel__small"
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
