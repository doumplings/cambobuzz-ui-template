import { getPostsWithStats } from "./post.service";

export type SharesType = {
  id: number;
  description: string;
  postId: number;
  userId: number;
};

export const getAllShares = async (): Promise<SharesType[]> => {
  const shares = await fetch("/data/share.json").then((res) => res.json());

  return shares.data;
};

export const getSharesByUserId = async (userId: number) => {
  const shares = await getAllShares();

  const userShare = shares?.filter((data) => data.userId !== userId);

  return userShare.length === shares.length ? [] : userShare;
};

export const getSharesCountByPostId = async (postId: number) => {
  const shares = await getAllShares();

  const postShares = shares?.filter((data) => data?.postId === postId);

  return postShares.length;
};
