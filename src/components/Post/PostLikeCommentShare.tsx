import { useState } from "react";
import { LikeButton } from "./LikeButton";
import { CommentButton } from "./CommentButton";
import { ShareButton } from "./ShareButton";
import { PostsType } from "../../api/post.service";
import { CommentPopUp } from "./CommentPopUp";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

interface Props {
  item: PostsType;
}

export const PostLikeCommentShareCard = ({ item }: Props) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [newCommentsCount, setNewCommentsCount] = useState(0);
  const { isLoggedIn } = useUserContext();
  const navigate = useNavigate();

  const handleCommentClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setIsCommentsVisible(!isCommentsVisible);
    }
  };

  return (
    <>
      {item.postStats === undefined ? null : (
        <span className="flex flex-row gap-8 justify-around ">
          <LikeButton numLikes={item.postStats.likesCount} />
          <CommentButton
            numComments={item.postStats.commentsCount + newCommentsCount}
            onCommentClick={handleCommentClick}
          />
          <ShareButton numShares={item.postStats.sharesCount} />
        </span>
      )}
      <CommentPopUp
        onSubmitClick={() => setNewCommentsCount(newCommentsCount + 1)}
        postId={item.id}
        userId={item.user.id}
        commentsVisibility={isCommentsVisible}
      />
    </>
  );
};
