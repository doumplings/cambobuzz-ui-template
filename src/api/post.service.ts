import { getCommentsCountByPostId } from "./comment.service";
import { getLikesCountByPostId } from "./like.service";
import { getSharesCountByPostId } from "./share.service";
import { UserType, getUser } from "./user.service";

export type PostsType = {
  id: number;
  user?: UserType;
  postStats?: PostStatsType;
  description: string;
  viewCount: number;
  userId: number;
};

type GetAllPostParams = {
  includeUser?: boolean;
};

export const getAllPosts = async (
  { includeUser }: GetAllPostParams = {
    includeUser: false,
  }
): Promise<PostsType[]> => {
  const posts = await fetch("/data/post.json").then((res) => res.json());

  if (includeUser) {
    return Promise.all(
      posts?.data?.map(async (post: PostsType) => {
        const user = await getUser(post.userId);
        return { ...post, user };
      })
    );
  } else {
    return posts.data;
  }
};

export const getPostByUserId = async (userId: number): Promise<PostsType[]> => {
  const posts = await getAllPosts();

  const myPosts = posts?.filter((data: PostsType) => data?.userId === userId);

  return myPosts;
};

export const getPost = async (id: number) => {
  const posts = await getAllPosts();

  const post = posts?.find((data) => data?.id === id);

  return post;
};

export type PostStatsType = {
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
};

export const getPostsWithStats = async (): Promise<PostsType[]> => {
  //get all posts with user
  const posts = await getAllPosts({ includeUser: true });

  return Promise.all(
    posts?.map(async (post: PostsType) => {
      const postStats: PostStatsType = {
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
      };
      const likesCount = await getLikesCountByPostId(post.id);
      const commentsCount = await getCommentsCountByPostId(post.id);
      const sharesCount = await getSharesCountByPostId(post.id);

      Object.assign(postStats, {
        likesCount: likesCount,
        commentsCount: commentsCount,
        sharesCount: sharesCount,
      });

      return { ...post, postStats };
    })
  );
};

export const getMyPosts = async (userId: number): Promise<PostsType[]> => {
  //get all post with user and stats
  //filter with userid
  const posts = await getPostsWithStats();

  return posts?.filter((data) => data.userId === userId);
};