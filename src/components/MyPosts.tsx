import heart from "../assets/heart.svg";
import comments from "../assets/comment.svg";
import shares from "../assets/share.svg";
import pfp from "../assets/pfp.svg";
import { useEffect, useState } from "react";
import { PostsType, getMyPosts, getPostsWithStats } from "../api/post.service";

interface MyPostsProps {
  getOnlyMyPosts?: boolean;
}

export const MyPosts = ({ getOnlyMyPosts }: MyPostsProps) => {
  const [myPosts, setMyPosts] = useState<PostsType[]>();

  useEffect(() => {
    getOnlyMyPosts
      ? getMyPosts(1).then((res) => setMyPosts(res))
      : getPostsWithStats().then((res) => setMyPosts(res));

    return setMyPosts([]);
  }, []);

  return (
    <div>
      <div className="w-full">
        {getOnlyMyPosts ? (
          <h2 className="text-xl border-b-2 mb-4 pb-1">My Posts</h2>
        ) : null}

        {myPosts?.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-violet-50 list-none mb-4 rounded-md shadow-md px-4 pb-4"
            >
              <img
                id="content-profile-pic"
                src={pfp}
                alt=""
                className="w-8 float-left mt-4 mr-4 mb-4"
              />
              <h4 className="translate-y-5 mb-4">{item.user.name}</h4> <br />
              <p className="text-center">{item.description} </p>
              <span className="flex flex-row gap-8 justify-around">
                <button className="mr-2 mt-4 w-4 flex flex-row gap-2 ">
                  <img src={heart} alt="Like" />{" "}
                  <p className="-translate-y-0.5">
                    {item.postStats.likesCount}
                  </p>
                </button>
                <button className="mr-2 w-4 mt-4 flex flex-row gap-2">
                  <img src={comments} alt="Comment" />
                  <p className="-translate-y-0.5">
                    {item.postStats.commentsCount}
                  </p>
                </button>
                <button className="mr-2 w-4 mt-4 flex flex-row gap-2">
                  <img src={shares} alt="Share" />
                  <p className="-translate-y-0.5">
                    {item.postStats.sharesCount}
                  </p>
                </button>
              </span>
            </li>
          );
        })}
      </div>
    </div>
  );
};
