import { useTransition, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

interface SidebarProps {
  isVisible: boolean;
  onSidebarCloseClick: () => void;
}

export default function ProfileDrawer({
  isVisible,
  onSidebarCloseClick,
}: SidebarProps) {
  const transition = useTransition(isVisible, {
    from: { x: 400 },
    enter: { x: 0 },
    leave: { x: 400 },
  });

  return (
    <>
      {isVisible ? (
        <div
          className="absolute h-full w-full z-10 bg-slate-500/25 left-0 top-0"
          onClick={onSidebarCloseClick}
        ></div>
      ) : null}
      {transition((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="absolute right-0 z-20 bg-blue-300 h-full w-64 shadow-2xl flex flex-col pt-16 px-4"
          >
            <button className="w-full top-12 text-left rounded p-2 hover:bg-blue-400/50">
              <Link to="profile" onClick={onSidebarCloseClick}>
                Profile
              </Link>
            </button>{" "}
            <br />
            <button className=" w-full top-24 text-left rounded p-2 hover:bg-blue-400/50">
              <Link to="admin/dashboard" onClick={onSidebarCloseClick}>
                Dashboard
              </Link>
            </button>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}
