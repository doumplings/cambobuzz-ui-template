import { useEffect, useState } from "react";
import AdminHeader from "../../components/HeadersAndSidebar/AdminHeader";
import StatsBar from "../../components/UserProfile/StatsBar";
import { UserInfo } from "../../components/UserProfile/UserInfo";
import { StatisticType, getMyStats } from "../../api/user.service";
import { MyPosts } from "../../components/Post/MyPosts";
import { Loading } from "../../components/Loading";
import { useUserContext } from "../../Context/UserContext";
import { usePostsContext } from "../../Context/PostsContext";

export const MyProfilePage = () => {
  const [userStats, setUserStats] = useState<StatisticType>();
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();
  const { posts } = usePostsContext();

  useEffect(() => {
    setLoading(true);
    getMyStats(user.id).then((res) => setUserStats(res));
    setLoading(false);
  }, []);

  const myPosts = posts.filter((post) => post.userId === user.id);

  return (
    <div
      className="absolute w-full h-screen top-0 bottom-0 right-0 bg-violet-100 
  md:w-3/4  flex flex-col flex-wrap overflow-auto transition-all"
    >
      <AdminHeader onMailClick={() => console.log("mail clicked")} />
      <div className="absolute top-8 right-0 w-full h-26 p-4">
        <UserInfo user={user} />
      </div>
      <div className="absolute top-36 h-36 w-full">
        <StatsBar userStats={userStats} />
      </div>
      <div className="absolute top-[44rem] md:top-72  w-full px-4">
        {!loading ? (
          <MyPosts getOnlyMyPosts={true} posts={myPosts} />
        ) : (
          <Loading width="10rem" />
        )}
      </div>
    </div>
  );
};
