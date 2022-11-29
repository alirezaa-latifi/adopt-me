import SkeletonElements from "./SkeletonElements";
import "./skeleton.css";

const PostCardSkeleton = () => {
  return (
    <div className="postcard-skeleton">
      <SkeletonElements type="img img--circle" />
      <div>
        <SkeletonElements type="title" />
        <SkeletonElements type="subtitle" />
        <SkeletonElements type="subtitle" />
        <SkeletonElements type="btn" />
      </div>
    </div>
  );
};
export default PostCardSkeleton;
