export type LikesType = {
  id: number;
  postId: number;
  userId: number;
};

export const getAllLikes = async (): Promise<LikesType[]> => {
  const likes = await fetch("/data/like.json").then((res) => res.json());

  return likes.data;
};

export const getLikesByUserId = async (userId: number) => {
  const likes = await getAllLikes();

  const myLikes = likes?.filter((data) => data?.userId === userId);

  return myLikes.length === likes.length ? [] : myLikes;
};

export const getLikesCountByPostId = async (postId: number) => {
  const likes = await getAllLikes();
  const postLikes = likes?.filter((data) => data.postId === postId);

  return postLikes.length;
};
