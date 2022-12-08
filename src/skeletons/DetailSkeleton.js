import "./skeleton.css";

const DetailSkeleton = () => {
  return (
    <div className="detail container">
      <div className="loading">
        <div className="loading-item loading-item-1"></div>
        <div className="loading-item loading-item-2"></div>
        <div className="loading-item loading-item-3"></div>
      </div>
      <h2 style={{ textAlign: "center", marginTop: "3rem", color: "#666" }}>
        ~ LOADING ~
      </h2>
    </div>
  );
};
export default DetailSkeleton;
