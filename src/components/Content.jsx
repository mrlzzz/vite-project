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
        path === "/projects" &&
        (prevLocation === "/" || prevLocation === "/blog")
    ) {
        expand = true;
    }

    if (path === "/projects") expand = true;

    return (
        //lg:w-2/3 sm:w-full - dont forget
        <div
            ref={contentRef}
            className={`flex flex-col min-h-screen py-4 mx-auto bg-slate-500 lg:w-2/3 sm:w-full expandable-page
              ${expand ? "expanded-page" : "closed-page"}`}
        >
            {children}
            <a
                className="self-start ml-4 text-sm cursor-pointer hover:text-slate-700"
                onClick={() => {
                    navigate(-1);
                }}
            >
                &larr; Go back
            </a>
        </div>
    );
};

export default Content;
