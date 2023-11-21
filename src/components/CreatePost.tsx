import { useState } from "react";

const CreatePost = () => {
  const [newPostVisible, setNewPostVisible] = useState(false);

  return (
    <>
      {newPostVisible ? (
        <div id="create-post-page">
          <div id="create-post-modal">
            <form action="#">
              <input
                type="text"
                placeholder="New Post..."
                className="rounded"
              />{" "}
              <br />
              <button
                id="create-post-submit-btn"
                type="submit"
                className="float-right font-bold text-xl mt-2 hover:bg-gray-500/20 rounded px-2"
              >
                Post
              </button>
            </form>
            <button
              id="create-post-cancel-btn"
              className="float-left text-xl mt-2 hover:bg-gray-500/20 rounded px-2"
              onClick={() => setNewPostVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button id="create-post-btn" onClick={() => setNewPostVisible(true)}>
          <img id="create-post-img" src="src/assets/add.svg" alt="Add Button" />
        </button>
      )}
    </>
  );
};

export default CreatePost;
