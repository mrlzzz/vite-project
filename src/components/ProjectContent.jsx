import { useRef } from "react";
import { useLocation } from "react-router-dom";
import "./styles/Content.css";

const ProjectContent = ({ children }) => {
  const contentRef = useRef(null);
  let prevLocation = useLocation().state;
  let location = useLocation();
  let path = location.pathname;
  let expand = false;
  // Conditions for backgrond expansion on the `/vite-project/project' route

  if (
    path === "/vite-project/projects" &&
    (prevLocation === "/vite-project/" || prevLocation === "/vite-project/blog")
  ) {
    expand = true;
  }

  if (path === "/vite-project/projects") expand = true;

  return (
    //lg:w-2/3 sm:w-full - dont forget
    <div
      ref={contentRef}
      className={` expandable-page mx-auto flex h-fit min-h-screen bg-slate-500 py-8 transition-all sm:w-full lg:w-2/3
              ${expand ? "expanded-page" : "closed-page"}`}
    >
      <div className="mx-8 flex flex-row flex-wrap justify-center gap-6  border-black ">
        {children}
      </div>
    </div>
  );
};

export default ProjectContent;
