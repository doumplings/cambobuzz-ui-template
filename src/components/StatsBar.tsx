import heart from "../assets/heart.svg";
import comments from "../assets/comment.svg";
import shares from "../assets/share.svg";
import pfp from "../assets/pfp.svg";
import { userStatsType } from "../utils/getUserData";

interface StatsBarProps {
  userStats: userStatsType;
}

const StatsBar = ({ userStats }: StatsBarProps) => {
  return (
    <div className="absolute w-full h-36 grid md:grid-cols-4 gap-4 top-7 place-items-center p-4 ">
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={heart} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">{userStats.likes}</p>
        <p className="text-m font-semibold">Likes</p>
      </div>
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={comments} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">{userStats.comments}</p>
        <p className="text-m font-semibold">Comments</p>
      </div>
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={shares} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">{userStats.shares}</p>
        <p className="text-m font-semibold">Shares</p>
      </div>
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={pfp} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">{userStats.shares}</p>
        <p className="text-m font-semibold">Followers</p>
      </div>
    </div>
  );
};

export default StatsBar;
