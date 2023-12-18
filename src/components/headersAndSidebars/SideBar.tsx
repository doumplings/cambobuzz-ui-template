import { useTransition, animated } from "@react-spring/web";
import { TrendingPosts } from "../post/TrendingPosts";
import { SubmitHandler, useForm } from "react-hook-form";
import { getPostByDescription } from "../../api/post.service";
import { usePostsContext } from "../../context/PostsContext";

interface SidebarProps {
  isVisible: boolean;
  onSidebarCloseClick: () => void;
}

type Search = {
  description: string;
};

export default function Sidebar({
  isVisible,
  onSidebarCloseClick,
}: SidebarProps) {
  const transition = useTransition(isVisible, {
    from: { x: -400 },
    enter: { x: 0 },
    leave: { x: -400 },
  });
  const { register, handleSubmit } = useForm<Search>();
  const { setPosts } = usePostsContext();

  const onSubmit: SubmitHandler<Search> = (data) => {
    console.log(data);
    getPostByDescription(data.description).then((res) => setPosts(res));
  };

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
            className="h-screen overflow-auto bg-slate-50"
          >
            <h2 id="search-title" className="mt-4">
              Search CamboBuzz
            </h2>
            <div className="searchbar z-20">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-row gap-2 mx-4 mt-4"
              >
                <input
                  type="search"
                  placeholder="Search... "
                  className="w-full z-20 rounded-md px-2 py-0.5 outline"
                  {...register("description")}
                />

                <button type="submit" className="a">
                  <img
                    className="w-6"
                    src="https://www.svgrepo.com/show/7109/search.svg"
                    alt="Search Icon"
                  />
                </button>
              </form>
            </div>
            <div id="sidebar-trending">
              <h3
                id="trending-title"
                className="border-b font-bold translate-y-8 px-4 pb-2 "
              >
                Trending
              </h3>
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
