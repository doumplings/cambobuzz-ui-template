import { useLoaderData } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import GrowthGraph from "../components/GrowthGraphWrapper";
import GrowthStats from "../components/GrowthStats";
import StatsBar from "../components/StatsBar";
import TopPost from "../components/TopPost";
import {
  getGrowthStats,
  getMostLiked,
  getUserData,
  getUserStats,
} from "../utils/getUserData";
// import { getUserData } from "../utils/getUserData";

export const loader = async () => {
  const userData = await getUserData();

  return userData;
};

const AdminDashboardPage = () => {
  const user: any = useLoaderData();

  const userStats = getUserStats(user);
  const mostLiked = getMostLiked(user);
  const growthStats = getGrowthStats(user, userStats);

  return (
    <div
      className="absolute w-full h-auto top-0 bottom-0 right-0 bg-violet-100 
      md:w-3/4 flex flex-col flex-wrap overflow-auto transition-all "
    >
      <AdminHeader onMailClick={() => console.log("mail clicked")} />
      <StatsBar userStats={userStats} />
      <GrowthStats growthStats={growthStats} />
      <div
        className="absolute left-0 flex flex-col px-4 pb-4 top-fuller w-full gap-4
            md:bottom-0 md:top-44 md:mb-4 md:ml-4  md:h-auto md:w-3/5 md:p-0"
      >
        <TopPost mostLiked={mostLiked} />
        <GrowthGraph />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
