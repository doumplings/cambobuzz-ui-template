import { Link, Outlet } from "react-router-dom";
import close from "../assets/close.svg";

const AdminSidebar = () => {
  return (
    <>
      <div
        className="absolute h-full w-1/4 md:flex
       hidden bg-blue-200 shadow-2xl flex-col p-4 z-10"
      >
        <button>
          <Link to="/for-you">
            <img
              src={close}
              alt="Close button"
              className=" absolute w-6 top-0 left-0 ml-1 mt-1 p-1 rounded hover:bg-blue-300"
            />
          </Link>
        </button>
        <h1 className="relative text-center top-4 text-2xl font-medium text-green-950 border-b pb-4 ">
          Admin Tools
        </h1>

        <button className="relative text-center top-12 py-2 text-base text-green-950 rounded hover:bg-blue-400/50 ">
          <Link to="myprofile">My Profile</Link>
        </button>
        <button className="relative text-center top-20 py-2 text-base text-green-950 rounded hover:bg-blue-400/50 ">
          <Link to="dashboard">Insights</Link>
        </button>
      </div>
      <div
        className="absolute w-full h-auto top-0 bottom-0 right-0 bg-violet-100 
     flex-col flex-wrap overflow-auto "
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminSidebar;
