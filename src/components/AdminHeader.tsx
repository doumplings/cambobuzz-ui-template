import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";

interface AdminHeaderProps {
  onMailClick: () => void;
}

const AdminHeader = ({ onMailClick }: AdminHeaderProps) => {
  return (
    <div className="absolute h-8 w-full right-0 top-0 shadow-2xl ">
      <button className="md:hidden">
        <Link to="/for-you">
          <img
            src={close}
            alt="Close button"
            className=" absolute w-6 top-0 left-0 ml-1 mt-1 p-1 rounded hover:bg-blue-300"
          />
        </Link>
      </button>
      <input
        type="search"
        className="hidden px-1 m-1 ml-4 rounded translate-x-4 md:translate-x-0 md:block "
        placeholder="Search..."
      />

      <div className="absolute grid grid-cols-2 place-items-center gap-8 z-10 top-0 left-1/2 -translate-x-1/2 text-lg md:hidden">
        <button className=" text-green-950 rounded hover:bg-blue-400/50 ">
          <Link to="../myprofile">My Profile</Link>
        </button>
        <button className=" text-green-950 rounded hover:bg-blue-400/50 ">
          <Link to="../dashboard">Insights</Link>
        </button>
      </div>

      <img
        src={mail}
        alt=""
        className="absolute top-0 right-0 w-12  px-2 hover:cursor-pointer hover:bg-violet-200"
        onClick={onMailClick}
      />
    </div>
  );
};

export default AdminHeader;
