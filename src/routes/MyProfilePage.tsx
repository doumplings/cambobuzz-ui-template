import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import ProfilePage from "../components/ProfilePage";
import StatsBar from "../components/StatsBar";
import { UserInfo } from "../components/UserInfo";
import {
  StatisticType,
  UserType,
  getMyStats,
  getUser,
} from "../api/user.service";
import { MyPosts } from "../components/MyPosts";

export const MyProfilePage = () => {
  const [userStats, setUserStats] = useState<StatisticType>();
  const [user, setUser] = useState<UserType | undefined>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getMyStats(1).then((res) => setUserStats(res));
    getUser(1).then((res) => setUser(res));
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
        <MyPosts getOnlyMyPosts={true} />
      </div>
    </div>
  );
};
