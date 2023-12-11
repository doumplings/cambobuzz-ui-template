import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { PostsType } from "../api/post.service";

type PostsContextType = {
  posts: PostsType[];
  setPosts: Dispatch<SetStateAction<PostsType[]>>;
};

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<PostsType[]>([]);

  return (
    <PostsContext.Provider value={{ posts: posts, setPosts: setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  const postsContext = useContext(PostsContext);

  if (postsContext === undefined) {
    throw new Error("usePostsContext is undefined");
  }

  const { posts, setPosts } = postsContext;
  return { posts, setPosts };
};
