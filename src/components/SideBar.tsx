import { useTransition, animated } from "@react-spring/web";

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
  const trends = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Saepe, voluptatibus! Tempora repellendus nostrum quos earum, mollitia culpa minus fugiat quibusdam molestias amet.",
    "Accusamus delectus quos assumenda animi distinctio numquam iste.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Saepe, voluptatibus! Tempora repellendus nostrum quos earum, mollitia culpa minus fugiat quibusdam molestias amet.",
    "Accusamus delectus quos assumenda animi distinctio numquam iste.",
  ];

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
              {trends.map((item) => {
                return (
                  <li id="trend-list">
                    <img
                      id="trend-pic"
                      src="src\assets\Default_pfp.svg.png"
                      alt="Search Icon"
                    />
                    <p id="list-text">{item}</p>
                  </li>
                );
              })}
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}
