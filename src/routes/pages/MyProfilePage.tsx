import { useEffect, useState } from "react";
import AdminHeader from "../../components/headersAndSidebars/AdminHeader";
import StatsBar from "../../components/userProfile/StatsBar";
import { UserInfo } from "../../components/userProfile/UserInfo";
import { StatisticType, getMyStats } from "../../api/user.service";
import { MyPosts } from "../../components/post/MyPosts";
import { useUserContext } from "../../context/UserContext";
import { usePostsContext } from "../../context/PostsContext";

export const MyProfilePage = () => {
  const [userStats, setUserStats] = useState<StatisticType>();
  const { user } = useUserContext();
  const { posts } = usePostsContext();

  useEffect(() => {
    getMyStats(user.id).then((res) => setUserStats(res));
  }, []);

  const myPosts = posts.filter((post) => post.userId === user.id);

  return (
    <div
      className="absolute w-full h-screen top-0 bottom-0 right-0 bg-slate-50
  md:w-3/4  flex flex-col flex-wrap overflow-auto transition-all"
    >
      <AdminHeader onMailClick={() => console.log("mail clicked")} />
      <div className="absolute top-8 right-0 w-full h-26 p-4">
        <UserInfo />
      </div>
      <div className="absolute top-36 h-36 w-full">
        <StatsBar userStats={userStats} />
      </div>
      <div className="absolute top-[44rem] md:top-72  w-full px-4">
        <MyPosts getOnlyMyPosts={true} posts={myPosts} />
      </div>
    </div>
  );
};
