import { getPostsWithStats } from "../../api/post.service";
import { useState, useEffect } from "react";
import { MyPosts } from "../../components/post/MyPosts";
import { Loading } from "../../components/Loading";
import CreatePost from "../../components/post/CreatePost";
import { useUserContext } from "../../context/UserContext";
import { usePostsContext } from "../../context/PostsContext";
import { useNavigate } from "react-router-dom";

const ContentPage = () => {
  const [createPostVisible, setCreatePostVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, isLoggedIn } = useUserContext();
  const { posts, setPosts } = usePostsContext();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getPostsWithStats()
      .then((res) => (posts.length === 0 ? setPosts(res) : null))
      .finally(() => setLoading(false));
    return;
  }, []);

  return (
    <div id="for-you-page" className="top-[7rem] md:top-[8rem]">
      {createPostVisible ? null : (
        <div id="for-you-modal" className="md:w-1/2 w-11/12 transition-all">
          {!loading ? <MyPosts posts={posts} /> : <Loading width={"10rem"} />}
        </div>
      )}
      {user.id === 0 ? null : (
        <CreatePost
          newPostVisible={createPostVisible}
          onSubmitClick={() => setCreatePostVisibility(false)}
          onCloseClick={() => setCreatePostVisibility(false)}
          onCreateClick={() => {
            if (!isLoggedIn) {
              navigate("/login");
            } else {
              setCreatePostVisibility(true);
            }
          }}
        />
      )}
    </div>
  );
};

export default ContentPage;
