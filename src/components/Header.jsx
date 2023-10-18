import "tw-elements";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Makes the dropdown menu work
import { Collapse, Dropdown, initTE } from "tw-elements";
// Makes the dropdown menu work
initTE({ Collapse, Dropdown });

export default function Header() {
    // eslint-disable-next-line no-unused-vars
    const [isScrolling, setIsScrolling] = useState(false);
    const navRef = useRef(null);
    let location = useLocation();
    let navigate = useNavigate();

    function handleNavigation(path) {
        navigate(path, { state: location.pathname });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
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
                className="sticky top-0 flex flex-nowrap duration-300 w-full items-center justify-between bg-slate-700 py-2 shadow-md shadow-black/10 lg:flex-wrap lg:justify-start"
            >
                <div className="lg:w-2/3 sm:w-full flex flex-wrap items-center lg:mx-auto justify-between duration-300">
                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:ring-0 lg:hidden"
                        type="button"
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
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto duration-300"
                        id="navbarSupportedContent1"
                        data-te-collapse-item
                    >
                        <ul
                            className="list-style-none mr-auto flex flex-col lg:flex-row"
                            data-te-navbar-nav-ref
                        >
                            <li
                                className="flex items-center lg:mb-0 hover:cursor-pointer"
                                onClick={() => {
                                    handleNavigation("/");
                                }}
                                data-te-nav-item-ref
                            >
                                <a
                                    className="w-screen lg:w-fit px-3 py-2 hover:bg-slate-800 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    data-te-nav-link-ref
                                >
                                    About
                                </a>
                            </li>
                            <li
                                className="flex items-center lg:mb-0 hover:cursor-pointer"
                                data-te-nav-item-ref
                                onClick={() => {
                                    handleNavigation("/blog");
                                }}
                            >
                                <a
                                    className="w-screen lg:w-fit px-3 py-2 hover:bg-slate-800 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    data-te-nav-link-ref
                                >
                                    Blog
                                </a>
                            </li>
                            <li
                                className="flex items-center lg:mb-0 hover:cursor-pointer"
                                data-te-nav-item-ref
                                onClick={() => {
                                    handleNavigation("/projects");
                                }}
                            >
                                <a
                                    className="w-screen lg:w-fit px-3 py-2 hover:bg-slate-800 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    data-te-nav-link-ref
                                >
                                    React Thingies
                                </a>
                            </li>
                        </ul>
                        <div className="relative flex items-center">
                            <li
                                className="flex items-center lg:mb-0 hover:cursor-pointer"
                                data-te-nav-item-ref
                                onClick={() => {
                                    handleNavigation("/info");
                                }}
                            >
                                <a
                                    className="w-screen lg:w-fit px-3 py-2 hover:bg-slate-800 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    data-te-nav-link-ref
                                >
                                    Info
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
