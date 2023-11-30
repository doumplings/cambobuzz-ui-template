import mail from "../assets/mail.svg";

interface AdminHeaderProps {
  onMailClick: () => void;
}

const AdminHeader = ({ onMailClick }: AdminHeaderProps) => {
  return (
    <div className="absolute h-8 w-full right-0 top-0 shadow-2xl">
      <input
        type="search"
        className="px-1 m-1 ml-4 rounded"
        placeholder="Search..."
      />
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
