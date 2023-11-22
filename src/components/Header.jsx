import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Collapse, Dropdown, initTE } from "tw-elements";

export default function Header() {
  initTE({ Collapse, Dropdown });

  let location = useLocation();
  let navigate = useNavigate();
  // console.log(location.pathname);
  const setInitialActiveLink = (path) => {
    switch (path) {
      case "/vite-project/projects":
        return 2;
      case "/vite-project/":
        return 0;
      case "/vite-project/blog":
        return 1;
      case "/vite-project/info":
        return 3;
    }
  };

  const initialActiveLink = setInitialActiveLink(location.pathname);
  // eslint-disable-next-line no-unused-vars
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState(initialActiveLink);

  const navRef = useRef(null);

  const handleActiveLink = (index) => {
    if (activeLink === index) {
      return;
    } else {
      setActiveLink(index);
    }
  };

  function handleNavigation(path) {
    navigate(path, { state: location.pathname });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20.123) {
        setIsScrolling(true);
        navRef.current.classList.remove("py-2");
      } else {
        setIsScrolling(false);
        navRef.current.classList.add("py-2");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Switching navigation from anchor tags and hrefs to useNavigate broke the animations.

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-10 flex w-full flex-nowrap items-center justify-between  bg-slate-700  py-2 shadow-md shadow-black/10 backdrop-blur-sm duration-300 lg:flex-wrap lg:justify-start"
      >
        <div className="flex flex-wrap items-center justify-between duration-300 sm:w-full lg:mx-auto lg:w-2/3">
          <button
            className="block border-0 bg-transparent px-2 text-slate-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:ring-0 lg:hidden"
            type="button"
            onClick={() => {}}
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Collapsible nav container */}

          <div
            className="!visible hidden flex-grow basis-[100%] items-center duration-300 lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li
                className=" flex items-center hover:cursor-pointer lg:mb-0"
                onClick={() => {
                  // handleNavigation("/vite-project/");
                  handleActiveLink(0);
                }}
                data-te-nav-item-ref
              >
                <Link
                  to={"/vite-project/"}
                  className={`${
                    activeLink === 0
                      ? "text-slate-200 underline decoration-red-300 decoration-2 underline-offset-[4px]"
                      : "text-slate-400"
                  } z-30 w-screen px-3 py-2 text-sm font-medium tracking-tighter transition duration-200 hover:text-slate-200  hover:ease-in-out focus:text-slate-400  disabled:text-black/30 motion-reduce:transition-none lg:w-fit lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400`}
                  data-te-nav-link-ref
                >
                  ABOUT
                </Link>
              </li>
              <li
                className="flex items-center hover:cursor-pointer lg:mb-0"
                data-te-nav-item-ref
                onClick={() => {
                  handleNavigation("/vite-project/blog");
                  handleActiveLink(1);
                }}
              >
                <a
                  className={`${
                    activeLink === 1
                      ? "text-slate-200 underline decoration-red-300 decoration-2 underline-offset-[4px]"
                      : "text-slate-400"
                  } z-30 w-screen px-3  py-2 text-sm font-medium tracking-tighter   transition duration-200  hover:text-slate-200  hover:ease-in-out focus:text-slate-400  disabled:text-black/30 motion-reduce:transition-none lg:w-fit lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400`}
                  data-te-nav-link-ref
                >
                  BLOG
                </a>
              </li>
              <li
                className="flex items-center hover:cursor-pointer lg:mb-0"
                data-te-nav-item-ref
                onClick={() => {
                  handleNavigation("/vite-project/projects");
                  handleActiveLink(2);
                }}
              >
                <a
                  className={`${
                    activeLink === 2
                      ? "text-slate-200 underline decoration-red-300 decoration-2 underline-offset-[4px]"
                      : "text-slate-400"
                  } z-30 w-screen px-3 py-2 text-sm font-medium tracking-tighter   transition duration-200  hover:text-slate-200  hover:ease-in-out focus:text-slate-400  disabled:text-black/30 motion-reduce:transition-none lg:w-fit lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400`}
                  data-te-nav-link-ref
                >
                  PROJECTS
                </a>
              </li>
            </ul>
            <div className=" relative !z-30 flex items-center">
              <li
                className="flex items-center hover:cursor-pointer lg:mb-0"
                data-te-nav-item-ref
                onClick={() => {
                  handleNavigation("/vite-project/info");
                  handleActiveLink(3);
                }}
              >
                <a
                  className={`${
                    activeLink === 3
                      ? "text-slate-200 underline decoration-red-300 decoration-2 underline-offset-[4px]"
                      : "text-slate-400"
                  }  w-screen px-3 py-2 text-sm font-medium tracking-tighter transition duration-200 hover:text-slate-200  hover:ease-in-out focus:text-slate-400  disabled:text-black/30 motion-reduce:transition-none lg:w-fit lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400`}
                  data-te-nav-link-ref
                >
                  INFO
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
