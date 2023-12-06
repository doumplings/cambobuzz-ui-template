export type CommentsType = {
  id: number;
  description: string;
  postId: number;
  userId: number;
};

export const getAllComments = async (): Promise<CommentsType[]> => {
  const comments = await fetch("/data/comment.json").then((res) => res.json());

  return comments.data;
};

export const getCommentsByUserId = async (userId: number) => {
  const comments = await getAllComments();

  const comment = comments?.filter((data) => data?.userId !== userId);

  return comment;
};

export const getCommentsCountByPostId = async (postId: number) => {
  const comments = await getAllComments();

  const comment = comments?.filter((data) => data?.postId === postId);

  return comment.length;
};
