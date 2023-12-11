import { useState } from "react";
import heart from "../../assets/heart.svg";
import redheart from "../../assets/redheart.svg";

interface LikeProps {
  numLikes: number | string;
}

export const LikeButton = ({ numLikes }: LikeProps) => {
  const [likeCount, setLikeCount] = useState(numLikes);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    !liked
      ? (setLikeCount(Number(likeCount) + 1), setLiked(true))
      : (setLikeCount(Number(likeCount) - 1), setLiked(false));
  };

  return (
    <button
      className="mr-2 mt-4 w-4 flex flex-row gap-2"
      onClick={handleLikeClick}
    >
      <img src={!liked ? heart : redheart} alt="Like" />
      <p className="-translate-y-0.5">{likeCount}</p>
    </button>
  );
};
