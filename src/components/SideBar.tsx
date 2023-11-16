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
      {transition((style, item) =>
        item ? (
          <animated.div style={style} id="sidebar">
            <button
              id="sidebar-close-btn"
              className="active"
              onClick={onSidebarCloseClick}
            >
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"
                alt="sidebar icon"
              />
            </button>
            <h2 id="search-title">Search CamboBuzz</h2>
            <div className="searchbar">
              <input type="search" placeholder="Search... " />
              <button id="search-button">
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
