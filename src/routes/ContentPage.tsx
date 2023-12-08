import { PostsType, getPostsWithStats } from "../api/post.service";
import { useState, useEffect } from "react";
import { MyPosts } from "../components/post components/MyPosts";
import { Loading } from "../components/Loading";
import CreatePost from "../components/post components/CreatePost";
import { UserType, getMe } from "../api/user.service";

const ContentPage = () => {
  const [createPostVisible, setCreatePostVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [newPostDescription, setNewPostDescription] = useState("");
  const [newPost, setNewPost] = useState<PostsType>();
  const [allPost, setAllPosts] = useState<PostsType[]>([]);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    setLoading(true);
    getPostsWithStats()
      .then((res) => setPosts(res))
      .finally(() => setLoading(false));
    getMe(1).then((res) => setUser(res));
    return;
  }, [createPostVisible === true]);

  useEffect(() => {
    const newPost: PostsType = {
      id: allPost.length === 0 ? posts.length + 1 : allPost.length + 1,
      description: newPostDescription,
      user: user,
      postStats: {
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
      },
      viewCount: 0,
      userId: 1,
    };

    newPostDescription === "" ? null : setNewPost(newPost);
  }, [newPostDescription]);

  useEffect(() => {
    if (newPost === undefined) {
      null;
    } else if (allPost.length === 0) {
      setAllPosts([...posts, newPost]);
    } else {
      setAllPosts((prev) => [...prev, newPost]);
    }
  }, [newPost]);

  return (
    <div id="for-you-page" className="top-[7rem] md:top-[8rem]">
      {createPostVisible ? null : (
        <div id="for-you-modal" className="md:w-1/2 w-11/12 transition-all">
          {!loading ? (
            <MyPosts posts={allPost.length === 0 ? posts : allPost} />
          ) : (
            <Loading width={"10rem"} />
          )}
        </div>
      )}
      <CreatePost
        userName={user === undefined ? "Guest" : user.name}
        newPostVisible={createPostVisible}
        onSubmit={(newPostDescription) => (
          setNewPostDescription(newPostDescription),
          setCreatePostVisibility(false)
        )}
        onCloseClick={() => setCreatePostVisibility(false)}
        onCreateClick={() => {
          setCreatePostVisibility(true), setNewPost(undefined);
        }}
      />
    </div>
  );
};

export default ContentPage;
