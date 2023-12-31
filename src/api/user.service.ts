import { getCommentsByUserId } from "./comment.service";
import { getLikesByUserId } from "./like.service";
import { getPostByUserId } from "./post.service";
import { getSharesByUserId } from "./share.service";

export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type StatisticType = {
  likeCount: number;
  commentCount: number;
  followerCount: number;
  shareCount: number;
  postCount: number;
};

export const getAllUser = async (): Promise<UserType[]> => {
  const res = await fetch("/data/user.json").then((res) => res.json());
  return res.data || [];
};

export const getUser = async (id: number): Promise<UserType | undefined> => {
  const users = await getAllUser();

  const user = users.find((data) => data?.id === id);

  return user;
};

export const getMe = async (id: number): Promise<UserType | undefined> => {
  return getUser(id);
};

export const getMyStats = async (userId: number): Promise<StatisticType> => {
  const stats: StatisticType = {
    commentCount: 0,
    followerCount: 0,
    likeCount: 0,
    shareCount: 0,
    postCount: 0,
  };

  //Get self
  //   const me = await getUser(userId);

  //Get Post by user id
  //Count Post
  const myPosts = await getPostByUserId(userId);
  const postCount = myPosts.length;

  //Get Comment by user id
  //Count Comment
  const myComments = await getCommentsByUserId(userId);
  const commentCount = myComments.length;

  //Get Like by user id
  //Count Like
  const myLikes = await getLikesByUserId(userId);
  const likeCount = myLikes.length;

  //Get Shares by userId
  //Count shares
  const myShares = await getSharesByUserId(userId);
  const sharesCount = myShares.length;

  //Get Follower user id
  //Count Follower

  //assign to object
  Object.assign(stats, {
    postCount: postCount,
    commentCount: commentCount,
    likeCount: likeCount,
    shareCount: sharesCount,
  });
  return { ...stats };
};

export const getNewUserId = async () => {
  const users = await getAllUser();

  return users.length + 1;
};

export const getUserbyEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserType | undefined> => {
  const users = await getAllUser();
  const user = users?.filter(
    (data) => data.email === email && data.password === password
  );

  return user[0] || undefined;
};

export const getUserByEmail = async (email: string) => {
  const users = await getAllUser();
  const user = users?.filter((data) => data.email === email);

  return user[0] || undefined;
};

export const setUserToLocalStorage = (user: UserType) => {
  const jsonUser = JSON.stringify(user);
  localStorage.setItem("user", jsonUser);
};

export const getUserFromLocalStorage = (): UserType | undefined => {
  const localId = localStorage.getItem("user");
  if (localId === null) {
    return undefined;
  } else {
    return JSON.parse(localId);
  }
};
