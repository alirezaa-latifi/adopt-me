import "./skeleton.css";

const SkeletonElements = ({ type }) => {
  return <div className={`skeleton ${type}`}></div>;
};

export default SkeletonElements;
