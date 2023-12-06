import { useLoaderData } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import GrowthGraphWrapper from "../components/GrowthGraphWrapper";
import GrowthStats from "../components/GrowthStats";
import StatsBar from "../components/StatsBar";
import TopPost from "../components/TopPost";
import {
  GrowthStatsType,
  getGrowthStats,
  getMostLiked,
  getUserStats,
} from "../utils/getUserData";
import { GraphDataContext } from "../utils/GraphDataContext";
import { useEffect, useState } from "react";
import { StatisticType, getMyStats } from "../api/user.service";

export const loader = async () => {
  const [user, userGraphData] = await Promise.all([
    fetch("/api/userData.json?url").then((res) => res.json()),
    fetch("/api/userDataYear.json?url").then((res) => res.json()),
  ]);

  return { user, userGraphData };
};

const AdminDashboardPage = () => {
  const { user, userGraphData }: any = useLoaderData();
  const [myStats, setMyStats] = useState<StatisticType>();

  useEffect(() => {
    getMyStats(1).then((res) => setMyStats(res));
  }, []);

  const userStats = getUserStats(user);
  const mostLiked = getMostLiked(user);
  const growthStats = getGrowthStats(user, userStats);

  return (
    <div
      className="absolute w-full h-auto top-0 bottom-0 right-0 bg-violet-100 
      md:w-3/4 flex flex-col flex-wrap overflow-auto transition-all "
    >
      <AdminHeader onMailClick={() => console.log("mail clicked")} />
      <div className="absolute top-8 w-full ">
        <StatsBar userStats={myStats} />
      </div>
      <GrowthStats growthStats={growthStats} />
      <div
        className="absolute left-0 flex flex-col px-4 pb-4 top-fuller w-full gap-4
            md:bottom-0 md:top-44 md:mb-4 md:ml-4  md:h-auto md:w-3/5 md:p-0"
      >
        <TopPost mostLiked={mostLiked} />
        <GraphDataContext.Provider value={userGraphData}>
          <GrowthGraphWrapper />
        </GraphDataContext.Provider>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
