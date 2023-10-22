import { useRef } from "react";
import { useLocation } from "react-router-dom";
import "./styles/Content.css";

const ProjectContent = ({ children }) => {
    const contentRef = useRef(null);
    let prevLocation = useLocation().state;
    let location = useLocation();
    let path = location.pathname;
    let expand = false;
    // Conditions for backgrond expansion on the `/project' route

    if (
        path === "/vite-project/projects" &&
        (prevLocation === "/" || prevLocation === "/blog")
    ) {
        expand = true;
    }

    if (path === "/vite-project/projects") expand = true;

    return (
        //lg:w-2/3 sm:w-full - dont forget
        <div
            ref={contentRef}
            className={` py-4 mx-auto bg-slate-500 lg:w-2/3 sm:w-full expandable-page h-screen
              ${expand ? "expanded-page" : "closed-page"}`}
        >
            <div className="flex flex-wrap flex-row justify-center border-black">
                {children}
            </div>
        </div>
    );
};

export default ProjectContent;
