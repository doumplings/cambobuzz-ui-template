import { GrowthStatsType } from "../../utils/getUserData";

interface GrowthStatsProps {
  growthStats: GrowthStatsType;
}

const GrowthStats = ({ growthStats }: GrowthStatsProps) => {
  return (
    <div
      className="absolute top-fullish  w-full p-4 
      md:p-0 md:bottom-0 md:mb-4 md:top-44 md:right-0 md:w-1/3 md:h-auto md:mr-4
     "
    >
      <div className="w-full h-full bg-violet-50 p-4 rounded-md shadow-md grid grid-cols-1">
        <h2>New Followers This Month</h2>
        <p className="text-center">{growthStats.newFollowers}</p>
        <h2>Account Growth Rate</h2>
        <p className="text-center">{growthStats.growthRate}%</p>
        <h2>View/Likes ratio</h2>
        <p className="text-center">{growthStats.viewLikesRatio}%</p>
      </div>
    </div>
  );
};

export default GrowthStats;
