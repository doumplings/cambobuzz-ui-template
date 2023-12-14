import { useEffect, useState } from "react";
import { PostsType, getTrendingPosts } from "../../api/post.service";
import pfp from "../../assets/pfp.svg";
import { LikeButton } from "./LikeButton";

export const TrendingPosts = () => {
  const [posts, setPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    getTrendingPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div className="grid grid-cols-1 h-full w-full ">
      {posts.map((post) => {
        return (
          <div className="flex flex-row border-b" key={post.id}>
            <img src={pfp} alt="" className="w-8 translate-x-4" />
            <div className="grow flex flex-col justify-center pt-5">
              <p className=" text-center">{post.description}</p>
              <div className="grid place-items-center -translate-y-4">
                <LikeButton numLikes={post.postStats.likesCount} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
