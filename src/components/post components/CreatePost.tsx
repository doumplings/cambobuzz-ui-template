import { useState } from "react";

interface CreatePostProps {
  newPostVisible: boolean;
  onCloseClick: () => void;
  onCreateClick: () => void;
  onSubmit: (newPost: string) => void;
  userName: string;
}

const CreatePost = ({
  newPostVisible,
  onCloseClick,
  onCreateClick,
  onSubmit,
  userName,
}: CreatePostProps) => {
  const [newPost, setNewPost] = useState("");

  return (
    <>
      {newPostVisible ? (
        <div id="create-post-page" className="">
          <div id="create-post-modal" className="absolute rounded-xl p-2">
            <p>Signed In as : {userName}</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="New Post..."
                className="rounded"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />{" "}
              <br />
              <button
                id="create-post-submit-btn"
                type="submit"
                className="float-right font-bold text-xl mt-2 hover:bg-gray-500/20 rounded px-2"
                onClick={() => (onSubmit(newPost), setNewPost(""))}
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
