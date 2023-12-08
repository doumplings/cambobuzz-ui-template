import heart from "../../assets/heart.svg";
import comments from "../../assets/comment.svg";
import shares from "../../assets/share.svg";
import pfp from "../../assets/pfp.svg";
import { StatisticType } from "../../api/user.service";

interface StatsBarProps {
  userStats: StatisticType | undefined;
}

const StatsBar = ({ userStats }: StatsBarProps) => {
  return (
    <div className="absolute w-full h-36 grid md:grid-cols-4 gap-4 -translate-y-1 place-items-center p-4 ">
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={heart} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">
          {userStats?.likeCount}
        </p>
        <p className="text-m font-semibold">Likes</p>
      </div>
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={comments} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">
          {userStats?.commentCount}
        </p>
        <p className="text-m font-semibold">Comments</p>
      </div>
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={shares} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">
          {userStats?.shareCount}
        </p>
        <p className="text-m font-semibold">Shares</p>
      </div>
      <div className="shadow-md w-full aspect-square rounded-md flex flex-col bg-violet-50 items-center justify-center gap-4  max-h-24">
        <img src={pfp} alt="" className="w-8 mt-2" />
        <p className="text-center text-m font-normal ">
          {userStats?.postCount}
        </p>
        <p className="text-m font-semibold">Posts</p>
      </div>
    </div>
  );
};

export default StatsBar;
