import { UserType, getUser } from "./user.service";

export type CommentsType = {
  id: number;
  description: string;
  postId: number;
  userId: number;
  user: UserType | undefined;
};

export const getAllComments = async (): Promise<CommentsType[]> => {
  const comments = await fetch("/data/comment.json").then((res) => res.json());

  return comments.data;
};

export const getCommentsByUserId = async (userId: number) => {
  const comments = await getAllComments();

  const comment = comments?.filter((data) => data?.userId !== userId);

  return comment.length === comments.length ? [] : comment;
};

type CommentsPostIdProps = {
  postId: number;
  includeUser?: boolean;
};

export const getCommentsByPostId = async ({
  postId,
}: CommentsPostIdProps): Promise<CommentsType[]> => {
  const comments = await getAllComments();

  const postComments = comments?.filter((data) => data.postId === postId);

  return Promise.all(
    postComments?.map(async (postComment: CommentsType) => {
      const user = await getUser(postComment.userId);
      return { ...postComment, user };
    })
  );
};

export const getCommentsCountByPostId = async (postId: number) => {
  const comments = await getAllComments();

  const comment = comments?.filter((data) => data?.postId === postId);

  return comment.length;
};
