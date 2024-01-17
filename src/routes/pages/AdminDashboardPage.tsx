import AdminHeader from "../../components/headersAndSidebars/AdminHeader";
import GrowthGraphWrapper from "../../components/userProfile/GrowthGraphWrapper";
import GrowthStats from "../../components/userProfile/GrowthStats";
import StatsBar from "../../components/userProfile/StatsBar";
import TopPost from "../../components/post/TopPost";
import { useEffect, useState } from "react";
import { StatisticType, getMyStats } from "../../api/user.service";
import { useUserContext } from "../../context/UserContext";
import { usePostsContext } from "../../context/PostsContext";

const AdminDashboardPage = () => {
  const [userStats, setUserStats] = useState<StatisticType>();
  const { user } = useUserContext();
  const { posts } = usePostsContext();

  useEffect(() => {
    getMyStats(user.id).then((res) => setUserStats(res));
  });

  return (
    <div
      className="absolute w-full h-auto top-0 bottom-0 right-0 bg-violet-100 
      md:w-3/4 flex flex-col flex-wrap overflow-auto transition-all "
    >
      <AdminHeader onMailClick={() => console.log("mail clicked")} />
      <div className="absolute top-8 w-full ">
        <StatsBar userStats={userStats} />
      </div>
      <GrowthStats
        growthStats={{
          newFollowers: 0,
          growthRate: 0,
          viewLikesRatio: 0,
        }}
      />
      <div
        className="absolute left-0 flex flex-col px-4 pb-4 top-fuller w-full gap-4
            md:bottom-0 md:top-44 md:mb-4 md:ml-4  md:h-auto md:w-3/5 md:p-0"
      >
        <TopPost posts={posts} user={user} />
        <GrowthGraphWrapper />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
