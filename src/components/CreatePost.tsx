import { useState } from "react";

const CreatePost = () => {
  const [newPostVisible, setNewPostVisible] = useState(false);

  return (
    <>
      {newPostVisible ? (
        <div id="create-post-page">
          <div id="create-post-modal">
            <form action="#">
              <input type="text" placeholder="New Post..." /> <br />
              <button id="create-post-submit-btn" type="submit">
                Post
              </button>
            </form>
            <button
              id="create-post-cancel-btn"
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
