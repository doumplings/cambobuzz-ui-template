import { useRef, useState } from "react";

export const getUserData = () => {
  const userData = fetch("/api/userData.json?url");
  return userData;
};

export type userStatsType = {
  likes: number;
  comments: number;
  shares: number;
  followers: number;
  views: number;
};

export const getUserStats = (userData: any) => {
  let userStats: userStatsType = {
    likes: 0,
    comments: 0,
    shares: 0,
    followers: 0,
    views: 0,
  };

  const data = userData;

  Object.values(data).forEach((item: any) => {
    item.follower_count === undefined
      ? null
      : (userStats.followers = item.follower_count);
    Object.values(item).forEach((item: any) => {
      item.like_info === undefined
        ? null
        : ((userStats.likes = userStats.likes + item.like_info.like_count),
          (userStats.comments =
            userStats.comments + item.comment_info.comment_count),
          (userStats.views = userStats.views + item.view_info.view_count),
          (userStats.shares = userStats.shares + item.share_count));
    });
  });

  return userStats;
};

export type mostLikedType = {
  buzz: string;
  likes: number;
  comments: number;
  shares: number;
};

export const getMostLiked = (userData: any) => {
  const [mostLiked, setMostLiked] = useState({
    buzz: "",
    likes: 0,
    comments: 0,
    shares: 0,
  });
  const likesRef = useRef(0);
  const data = userData;

  Object.values(data).forEach((item: any) => {
    item.data === undefined
      ? null
      : item.data.like_info.like_count > likesRef.current
      ? ((likesRef.current = item.data.like_info.like_count),
        setMostLiked({
          buzz: item.data.buzz,
          likes: item.data.like_info.like_count,
          comments: item.data.comment_info.comment_count,
          shares: item.data.share_count,
        }))
      : null;
  });

  return mostLiked;
};

export type GrowthStatsType = {
  newFollowers: number;
  growthRate: number;
  viewLikesRatio: number;
};

export const getGrowthStats = (userData: any, userStats: userStatsType) => {
  const data = userData;
  const newFollowers =
    data.follower_info.follower_count - data.follower_info.follower_prev;
  const growthRate = Math.round(
    (newFollowers * 100) / data.follower_info.follower_count
  );
  const viewLikesRatio = Math.round((userStats.likes * 100) / userStats.views);

  const growthStats: GrowthStatsType = {
    newFollowers: newFollowers,
    growthRate: growthRate,
    viewLikesRatio: viewLikesRatio,
  };

  return growthStats;
};
