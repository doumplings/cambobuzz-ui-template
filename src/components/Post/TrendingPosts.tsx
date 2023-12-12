import { useEffect, useState } from "react";
import { PostsType, getTrendingPosts } from "../../api/post.service";
import pfp from "../../assets/pfp.svg";

export const TrendingPosts = () => {
  const [posts, setPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    getTrendingPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div className="grid grid-cols-1 h-full w-full ">
      {posts.map((post) => {
        return (
          <div className="flex flex-row border-b">
            <img src={pfp} alt="" className="w-8 translate-x-4" />
            <div className="grow ">
              <p className=" text-center mt-8 ">{post.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
