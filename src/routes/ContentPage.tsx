import { PostsType, getPostsWithStats } from "../api/post.service";
import { useState, useEffect } from "react";
import { MyPosts } from "../components/post components/MyPosts";
import { Loading } from "../components/Loading";
import CreatePost from "../components/post components/CreatePost";
import { useUserContext } from "../utils/UserContext";
import { usePostsContext } from "../utils/PostsContext";

const ContentPage = () => {
  const [createPostVisible, setCreatePostVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newPostDescription, setNewPostDescription] = useState("");
  const { user } = useUserContext();
  const { posts, setPosts } = usePostsContext();

  useEffect(() => {
    setLoading(true);
    getPostsWithStats()
      .then((res) => (posts.length === 0 ? setPosts(res) : null))
      .finally(() => setLoading(false));
    return;
  }, []);

  useEffect(() => {
    const newPost: PostsType = {
      id: posts.length + 1,
      description: newPostDescription,
      user: user,
      postStats: {
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
      },
      viewCount: 0,
      userId: user?.id || 0,
    };

    newPostDescription === "" ? null : setPosts((prev) => [...prev, newPost]);
  }, [newPostDescription]);

  return (
    <div id="for-you-page" className="top-[7rem] md:top-[8rem]">
      {createPostVisible ? null : (
        <div id="for-you-modal" className="md:w-1/2 w-11/12 transition-all">
          {!loading ? <MyPosts posts={posts} /> : <Loading width={"10rem"} />}
        </div>
      )}
      {user.id === 0 ? null : (
        <CreatePost
          userName={user === undefined ? "Guest" : user.name}
          newPostVisible={createPostVisible}
          onSubmit={(newPostDescription) => (
            setNewPostDescription(newPostDescription),
            setCreatePostVisibility(false)
          )}
          onCloseClick={() => setCreatePostVisibility(false)}
          onCreateClick={() => {
            setCreatePostVisibility(true);
          }}
        />
      )}
    </div>
  );
};

export default ContentPage;
