import heart from "../../assets/heart.svg";
import comments from "../../assets/comment.svg";
import shares from "../../assets/share.svg";
import { PostsType, getTopPost } from "../../api/post.service";
import { UserType } from "../../api/user.service";
import { useEffect, useState } from "react";

interface TopPostProps {
  posts: PostsType[];
  user: UserType;
}

const TopPost = ({ posts, user }: TopPostProps) => {
  const [topPost, setTopPost] = useState<PostsType>();

  useEffect(() => {
    const topPost = getTopPost(posts, user.id);
    setTopPost(topPost);
  }, []);

  return (
    <div className="px-4 pb-4 pt-2 rounded-md w-full h-full bg-violet-50 overflow-auto shadow-md">
      <h2 className="border-b text-indigo-900">Most Liked Post</h2>
      {topPost === undefined ? (
        <p>No Post to be found</p>
      ) : (
        <>
          <p className="text-md mt-2  text-center overflow-auto">
            {topPost?.description}
          </p>
          <div className="flex gap-4 w-full place-items-left mt-9">
            <img className="w-6" src={heart} alt="Like" />
            <p>{topPost.postStats.likesCount}</p>
            <img className="w-6" src={comments} alt="Comment" />
            <p>{topPost.postStats.commentsCount}</p>
            <img className="w-6" src={shares} alt="Share" />
            <p>{topPost.postStats.sharesCount}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TopPost;
