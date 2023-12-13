import { useTransition, animated } from "@react-spring/web";
import { TrendingPosts } from "../post/TrendingPosts";

interface SidebarProps {
  isVisible: boolean;
  onSidebarCloseClick: () => void;
}

export default function Sidebar({
  isVisible,
  onSidebarCloseClick,
}: SidebarProps) {
  const transition = useTransition(isVisible, {
    from: { x: -400 },
    enter: { x: 0 },
    leave: { x: -400 },
  });

  return (
    <>
      {isVisible ? (
        <div
          className="absolute h-full w-full bg-slate-500/25 right-0 top-0 z-10"
          onClick={onSidebarCloseClick}
        ></div>
      ) : null}
      {transition((style, item) =>
        item ? (
          <animated.div
            style={style}
            id="sidebar"
            className="h-screen overflow-auto"
          >
            <h2 id="search-title" className="mt-4">
              Search CamboBuzz
            </h2>
            <div className="searchbar z-20">
              <input
                type="search"
                placeholder="Search... "
                className="w-full z-20"
              />
              <button id="search-button" className="relative right-6 z-20">
                <img
                  id="search-pic"
                  src="https://www.svgrepo.com/show/7109/search.svg"
                  alt="Search Icon"
                />
              </button>
            </div>
            <div id="sidebar-trending">
              <h3 id="trending-title">Trending</h3>
              <div className="absolute h-auto top-40 bottom-0 w-full">
                <TrendingPosts />
              </div>{" "}
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}
