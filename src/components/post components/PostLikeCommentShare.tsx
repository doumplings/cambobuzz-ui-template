import { useState } from "react";
import { LikeButton } from "./LikeButton";
import { CommentButton } from "./CommentButton";
import { ShareButton } from "./ShareButton";
import { PostsType } from "../../api/post.service";
import { CommentPopUp } from "./CommentPopUp";

interface Props {
  item: PostsType;
}

export const PostLikeCommentShareCard = ({ item }: Props) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [newCommentsCount, setNewCommentsCount] = useState(0);

  return (
    <>
      {item.postStats === undefined ? null : (
        <span className="flex flex-row gap-8 justify-around">
          <LikeButton numLikes={item.postStats.likesCount} />
          <CommentButton
            numComments={item.postStats.commentsCount + newCommentsCount}
            onCommentClick={() => setIsCommentsVisible(!isCommentsVisible)}
          />
          <ShareButton numShares={item.postStats.sharesCount} />
        </span>
      )}
      <CommentPopUp
        onSubmitClick={() => setNewCommentsCount(newCommentsCount + 1)}
        postId={item.id}
        userId={1}
        commentsVisibility={isCommentsVisible}
      />
    </>
  );
};
