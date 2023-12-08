import shares from "../../assets/share.svg";

interface ShareProps {
  numShares: number | string;
}

export const ShareButton = ({ numShares }: ShareProps) => {
  return (
    <button className="mr-2 w-4 mt-4 flex flex-row gap-2">
      <img src={shares} alt="Share" />
      <p className="-translate-y-0.5">{numShares}</p>
    </button>
  );
};
