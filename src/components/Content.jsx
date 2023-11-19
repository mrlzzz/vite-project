import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./styles/Content.css";

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <a
      className="mb-2 ml-2 mt-4 cursor-pointer self-start bg-slate-400 px-2 py-1 text-sm tracking-tight hover:text-slate-700 lg:my-4 lg:ml-8"
      onClick={() => {
        navigate(-1);
      }}
    >
      &larr; Go back
    </a>
  );
};

const Content = ({ children }) => {
  const contentRef = useRef(null);
  let prevLocation = useLocation().state;
  let location = useLocation();
  let path = location.pathname;
  let expand = false;

  // Conditions for backgrond expansion on the `/project' route
  // This solution works only if total pages are 3 - "/", "/blog", and "/projects"
  // After adding more pages, the following becomes much more hectic

  // This component is only here, cuz at the start I tried to do some fancy `page-expand` animation - 21/10/23

  if (
    path === "/vite-project/projects" &&
    (prevLocation === "/vite-project/" || prevLocation === "/vite-project/blog")
  ) {
    expand = true;
  }

  if (path === "/vite-project/projects") expand = true;

  return (
    //lg:w-2/3 sm:w-full - dont forget
    <>
      <div
        ref={contentRef}
        className={`expandable-page mx-auto flex h-fit min-h-screen flex-col justify-between bg-slate-500 sm:w-full lg:w-2/3 lg:py-4
              ${expand ? "expanded-page" : "closed-page"}`}
      >
        {children}
        {path !== "/vite-project/" ? <BackButton></BackButton> : null}
      </div>
    </>
  );
};

export default Content;
