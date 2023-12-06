import {
  PostsType,
  getAllPosts,
  getPostByUserId,
  getPostsWithStats,
} from "../api/post.service";
import { useState, useEffect } from "react";
import { MyPosts } from "../components/MyPosts";

const ContentPage = () => {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPostsWithStats().then((res) => setPosts(res));
  }, []);

  console.log(posts);

  return (
    <div id="for-you-page">
      <div id="for-you-modal" className="md:w-1/2 w-11/12 transition-all">
        <MyPosts />
      </div>
    </div>
  );
};

export default ContentPage;
