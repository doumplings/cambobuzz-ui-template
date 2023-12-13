import pfp from "../../assets/pfp.svg";
import { useEffect, useState } from "react";
import { PostsType } from "../../api/post.service";
import { PostLikeCommentShareCard } from "./PostLikeCommentShare";

interface MyPostsProps {
  posts: PostsType[];
  getOnlyMyPosts?: boolean;
}

export const MyPosts = ({ posts, getOnlyMyPosts }: MyPostsProps) => {
  const [myPosts, setMyPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    setMyPosts(posts);
  }, [posts]);

  return (
    <div>
      <div className="w-full">
        {getOnlyMyPosts ? (
          <h2 className="text-xl border-b-2 mb-4 pb-1">My Posts</h2>
        ) : null}

        {myPosts
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <li
                key={item.id}
                className="bg-violet-50 list-none mb-4 rounded-md shadow-md px-4 pb-4"
              >
                <img
                  id="content-profile-pic"
                  src={pfp}
                  alt=""
                  className="w-8 float-left mt-0 mr-4 mb-4"
                />
                <h4 className="translate-y-5 mb-4 ">{item.user?.name}</h4>{" "}
                <br />
                <p className="text-center">{item.description} </p>
                <PostLikeCommentShareCard item={item} />
              </li>
            );
          })}
        {myPosts.length === 0 ? (
          <p className="absolute text-2xl text-center md:top-32 left-1/2 -translate-x-1/2">
            No Posts Yet
          </p>
        ) : null}
      </div>
    </div>
  );
};
