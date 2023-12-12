import comment from "../../assets/comment.svg";

interface CommentProps {
  numComments: number | string;
  onCommentClick: () => void;
}

export const CommentButton = ({
  numComments,
  onCommentClick,
}: CommentProps) => {
  return (
    <button
      className="mr-2 w-4 mt-4 flex flex-row gap-2"
      onClick={onCommentClick}
    >
      <img src={comment} alt="Comment" />
      <p className="-translate-y-0.5">{numComments}</p>
    </button>
  );
};
