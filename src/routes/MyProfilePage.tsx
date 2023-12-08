import { useEffect, useState } from "react";
import AdminHeader from "../components/headers and sidebars/AdminHeader";
import StatsBar from "../components/userprofile/StatsBar";
import { UserInfo } from "../components/userprofile/UserInfo";
import {
  StatisticType,
  UserType,
  getMyStats,
  getUser,
} from "../api/user.service";
import { MyPosts } from "../components/post components/MyPosts";
import { Loading } from "../components/Loading";
import { PostsType, getMyPosts } from "../api/post.service";

export const MyProfilePage = () => {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [userStats, setUserStats] = useState<StatisticType>();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType | undefined>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setLoading(true);
    getMyStats(1).then((res) => setUserStats(res));
    getUser(1).then((res) => setUser(res));
    getMyPosts(1).then((res) => setPosts(res));
    setLoading(false);
  }, []);

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
          <MyPosts getOnlyMyPosts={true} posts={posts} />
        ) : (
          <Loading width="10rem" />
        )}
      </div>
    </div>
  );
};
