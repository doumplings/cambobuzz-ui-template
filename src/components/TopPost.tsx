import heart from "../assets/heart.svg";
import comments from "../assets/comment.svg";
import shares from "../assets/share.svg";
import { mostLikedType } from "../utils/getUserData";

interface TopPostProps {
  mostLiked: mostLikedType;
}

const TopPost = ({ mostLiked }: TopPostProps) => {
  return (
    <div className="px-4 pb-4 pt-2 rounded-md w-full h-full bg-violet-50 overflow-auto shadow-md">
      <h2 className="border-b text-indigo-900">Most Liked Post</h2>
      <p className="text-sm mt-1">{mostLiked.buzz}</p>
      <div className="flex gap-4 w-full place-items-left mt-9">
        <img className="w-6" src={heart} alt="Like" />
        <p>{mostLiked.likes}</p>
        <img className="w-6" src={comments} alt="Comment" />
        <p>{mostLiked.comments}</p>
        <img className="w-6" src={shares} alt="Share" />
        <p>{mostLiked.shares}</p>
      </div>
    </div>
  );
};

export default TopPost;
