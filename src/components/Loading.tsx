import loading from "../assets/loading.svg";

interface LoadingProps {
  width: string;
}

export const Loading = ({ width }: LoadingProps) => {
  return (
    <div className="grid place-items-center">
      <img
        src={loading}
        alt=""
        className={`absolute top-20 animate-spin w-[${width}]`}
        // className="absolute top-20 animate-spin w-"
      />
    </div>
  );
};
