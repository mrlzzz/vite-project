import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./styles/Content.css";

const Content = ({ children }) => {
  const contentRef = useRef(null);
  let navigate = useNavigate();
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
        className={`expandable-page mx-auto flex h-fit min-h-screen flex-col justify-between bg-slate-500 py-4 sm:w-full lg:w-2/3
              ${expand ? "expanded-page" : "closed-page"}`}
      >
        {children}
        <a
          className="my-4 ml-8 cursor-pointer self-start bg-slate-400 px-2 py-1 text-sm tracking-tight hover:text-slate-700"
          onClick={() => {
            navigate(-1);
          }}
        >
          &larr; Go back
        </a>
      </div>
    </>
  );
};

export default Content;
