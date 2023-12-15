import { SubmitHandler, useForm } from "react-hook-form";
import { PostsType } from "../../api/post.service";
import { useUserContext } from "../../context/UserContext";
import { usePostsContext } from "../../context/PostsContext";

interface CreatePostProps {
  newPostVisible: boolean;
  onCloseClick: () => void;
  onCreateClick: () => void;
  onSubmitClick: () => void;
}

type formData = {
  newPostDescription: string;
};

const CreatePost = ({
  newPostVisible,
  onCloseClick,
  onCreateClick,
  onSubmitClick,
}: CreatePostProps) => {
  const { register, handleSubmit } = useForm<formData>();
  const { user } = useUserContext();
  const { posts, setPosts } = usePostsContext();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
    const newPost: PostsType = {
      id: posts.length + 1,
      description: data.newPostDescription,
      user: user,
      postStats: {
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
      },
      viewCount: 0,
      userId: user.id || 0,
    };
    data.newPostDescription === ""
      ? null
      : setPosts((prev) => [...prev, newPost]);
  };

  return (
    <>
      {newPostVisible ? (
        <div id="create-post-page" className="">
          <div id="create-post-modal" className="absolute rounded-xl p-2">
            <p>Signed In as : {user.name}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="New Post..."
                className="rounded"
                {...register("newPostDescription", { required: true })}
              />
              <br />
              <button
                id="create-post-submit-btn"
                type="submit"
                className="float-right font-bold text-xl mt-2 hover:bg-gray-500/20 rounded px-2"
                onClick={onSubmitClick}
              >
                Post
              </button>
            </form>
            <button
              id="create-post-cancel-btn"
              className="float-left text-xl mt-2 hover:bg-gray-500/20 rounded px-2"
              onClick={onCloseClick}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button id="create-post-btn" onClick={onCreateClick}>
          <img
            id="create-post-img"
            className="fixed"
            src="src/assets/add.svg"
            alt="Add Button"
          />
        </button>
      )}
    </>
  );
};

export default CreatePost;
