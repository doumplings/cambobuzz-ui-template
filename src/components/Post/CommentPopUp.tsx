import pfp from "../../assets/pfp.svg";
import { useState, useEffect, useContext } from "react";
import { CommentsType, getCommentsByPostId } from "../../api/comment.service";
import { UserType, getMe } from "../../api/user.service";
import { UserContext, useUserContext } from "../../Context/UserContext";

interface CommentPopUpProps {
  postId: number;
  userId: number;
  commentsVisibility: boolean;
  onSubmitClick: () => void;
}

export const CommentPopUp = ({
  postId,
  userId,
  commentsVisibility,
  onSubmitClick,
}: CommentPopUpProps) => {
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [newCommentDescription, setNewCommentDescription] = useState("");
  const { user } = useUserContext();
  useEffect(() => {
    getCommentsByPostId({ postId: postId }).then((res) => setComments(res));
    return setComments([]);
  }, []);

  const handleSubmit = () => {
    const newComment: CommentsType = {
      id: comments.length + 1,
      description: newCommentDescription,
      postId: postId,
      userId: userId,
      user: user,
    };
    newCommentDescription === ""
      ? null
      : (setComments((prev) => [...prev, newComment]),
        setNewCommentDescription(""),
        onSubmitClick());
  };

  return commentsVisibility ? (
    <div className="pt-2 mt-2 border-t">
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Your Comment..."
          className="w-full px-2 rounded-md mb-2 text-sm"
          value={newCommentDescription}
          onChange={(e) => setNewCommentDescription(e.target.value)}
        />
        <button
          type="submit"
          className="mb-2 bg-slate-300 rounded-md px-2 text-sm"
          onClick={handleSubmit}
        >
          Done
        </button>
      </div>
      {comments?.map((comment) => {
        return (
          <div className="text-sm border-t p-2 " key={comment.id}>
            <img className="w-4 float-left h-full mr-4 mt-2" src={pfp} alt="" />

            <p className="text-xs">{comment.user?.name}</p>
            <p className="ml-12">{comment.description}</p>
          </div>
        );
      })}
    </div>
  ) : null;
};
