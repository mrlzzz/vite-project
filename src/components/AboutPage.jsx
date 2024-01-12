import autoAnimate from "@formkit/auto-animate";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  // md:mx-28 md:mt-10 lg:mx-28 lg:mt-10
  return (
    <>
      <div ref={parent} className="h-fit min-h-screen w-full">
        <section className="mx-2 my-1  flex h-fit flex-col border-b-2 border-t-2 border-slate-400 bg-slate-700 px-3 py-4  font-light text-slate-300 shadow-lg lg:m-10 lg:px-12 lg:py-10  ">
          <div className="">
            <div className="max-w-2xl">
              <h1>Hey!</h1>
              <br></br>
              <p className="text-base lg:text-lg">
                This website is a space, which I use to implement concepts that
                I&apos;ve learnt throughout my studies of React, JavaScript and
                anything related or interesting to me - like, working with API
                calls, CSS flexbox, markdown files, or animations. I try to
                describe each example with my thought process, potential
                improvements, and little hacks that have been necesssary to make
                it work - mostly addressed to future me.
              </p>
              <br></br>
              <p className="text-base lg:text-lg">
                I have also deployed a second website that serves as a gallery
                for design mockups and landing pages. Over there, I practise my
                styling skills by replicating designs that I like.
              </p>
              <br></br>
              <p className="text-base lg:text-lg">
                The project is filled with bugs, inconsitencies, and dummy
                placeholder data, however the goal is learn and actually build
                something, so all these are acknowledged and welcomed as a part
                of the learning curve.
              </p>
              <br></br>
              <p className="text-justify text-base">Sincerely,</p>
              <p className="text-justify text-base">Pawel</p>
              <br></br>
              <br></br>
            </div>
            <hr className=" mt-8 border-white/50"></hr>
            <div className="my-8 text-center text-sm font-bold uppercase tracking-tight">
              Links
            </div>
            <div className="flex flex-col gap-4 border-l-4 border-red-300  pl-2 text-lg md:gap-2">
              <span>
                This website:{" "}
                <a
                  className="group inline text-base text-red-300 decoration-red-300 underline-offset-4 transition duration-300 ease-in-out hover:underline"
                  href="https://github.com/mrlzzz/vite-project"
                >
                  https://github.com/mrlzzz/vite-project
                  {/* <span className="block h-[1px] max-w-0 bg-red-300 transition-all duration-500 group-hover:max-w-full"></span> */}
                </a>
                <span className="font-mono text-sm"> [SOURCE CODE]</span>
                <br />
              </span>
              <span>
                Backend API:{" "}
                <a
                  className="group inline text-base text-red-300 decoration-red-300 underline-offset-4 transition duration-300 ease-in-out hover:underline"
                  href="https://github.com/mrlzzz/vite-project-express"
                >
                  https://github.com/mrlzzz/vite-project-express
                </a>
                <span className="font-mono text-sm"> [SOURCE CODE]</span>
                <br />
              </span>
              <span>
                Car rental portfolio:{" "}
                <a
                  className="group inline text-base text-red-300 decoration-red-300 underline-offset-4 transition duration-300 ease-in-out hover:underline"
                  href="https://portfolio-car-rental.vercel.app/"
                >
                  https://portfolio-car-rental.vercel.app
                </a>
                <br />
              </span>
              <span>
                Car rental{" "}
                <a
                  className="group inline text-base text-red-300 decoration-red-300 underline-offset-4 transition duration-300 ease-in-out hover:underline"
                  href="https://github.com/mrlzzz/portfolio-car-rental"
                >
                  https://github.com/mrlzzz/portfolio-car-rental
                </a>
                <span className="font-mono text-sm"> [SOURCE CODE]</span>
                <br />
              </span>
              <span>
                Landing-page gallery:{" "}
                <a
                  className="group  inline text-base text-red-300 decoration-red-300 underline-offset-4 transition duration-300 ease-in-out hover:underline"
                  href="https://mrlzzz.github.io/react-landing-page/"
                >
                  https://mrlzzz.github.io/react-landing-page
                </a>
                <br />
              </span>
              <span>
                {" "}
                Landing-page:{" "}
                <a
                  className="group  inline text-base text-red-300 decoration-red-300 underline-offset-4 transition duration-300 ease-in-out hover:underline"
                  href="https://github.com/mrlzzz/react-landing-page"
                >
                  https://github.com/mrlzzz/react-landing-page
                </a>
                <span className="font-mono text-sm"> [SOURCE CODE]</span>
              </span>
            </div>
            <br />
          </div>
          <hr className=" mt-8 border-white/50"></hr>
          <div className="my-8 text-center text-sm font-bold uppercase tracking-tight">
            React Projects
          </div>
          <div className="flex flex-col flex-wrap md:w-[60%] md:flex-row md:justify-center md:gap-x-4 md:self-center ">
            <div className="flex items-center">
              <Link
                className="my-2 w-full rounded-sm  border-l-red-300  bg-slate-300/70 px-8  py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95  md:w-fit"
                to="/vite-project/projects/react-forms"
              >
                React form
              </Link>
              {/* <div className="ml-4">
                {" "}
                - React form hook with user data validation
              </div> */}
            </div>
            <div className="flex items-center ">
              <Link
                className="my-2 w-full rounded-sm border-red-300 bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                to="/vite-project/projects/flexbox"
              >
                Markdown
              </Link>
              {/* <div className="ml-4">
                {" "}
                - Parsing markdown files into React&apos;s component
              </div> */}
            </div>
            <div className="flex items-center ">
              <Link
                className="my-2  w-full rounded-sm  bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                to="/vite-project/projects/toast"
              >
                Toast
              </Link>
              {/* <div className="ml-4">
                {" "}
                - Toast messages using useContext() hook
              </div> */}
            </div>
            <div className="flex items-center ">
              <Link
                className="my-2  w-full rounded-sm  bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                to="/vite-project/projects/api"
              >
                API
              </Link>
              {/* <div className="ml-4"> - Integration with backend API</div> */}
            </div>
            <div className="flex items-center ">
              <Link
                className="my-2  w-full  rounded-sm  bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                to="/vite-project/projects/todo"
              >
                Todo
              </Link>
              {/* <div className="ml-4">
                {" "}
                - Reusable and interactive todo task&apos;s component
              </div> */}
            </div>
            <div className="flex items-center ">
              <Link
                className="my-2  w-full rounded-sm  bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                to="/vite-project/projects/physics"
              >
                Physics
              </Link>
              {/* <div className="ml-4">
                {" "}
                - Parsing markdown files into React&apos;s component
              </div> */}
            </div>
            <div className="flex items-center ">
              <Link
                className="my-2  w-full rounded-sm  bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                to="/vite-project/projects/chart"
              >
                Chart (WIP)
              </Link>
              {/* <div className="ml-4">
                {" "}
                - Parsing markdown files into React&apos;s component
              </div> */}
            </div>
          </div>
          <div className="mb-8 mt-12 text-center text-sm font-bold uppercase tracking-tight">
            Website Projects
          </div>
          <div className="flex flex-col flex-wrap md:w-[60%] md:flex-row md:justify-center md:gap-x-4 md:self-center ">
            <div className="flex items-center ">
              <a
                className="my-2  w-full rounded-sm  border-red-300 bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                href="https://mrlzzz.github.io/react-landing-page/"
              >
                Landing page (WIP)
              </a>
            </div>
            <div className="flex items-center ">
              <a
                className="my-2  w-full rounded-sm  border-red-300 bg-slate-300/70 px-8 py-1 text-center text-lg font-bold uppercase tracking-tighter text-slate-700 transition duration-150 hover:brightness-90 active:scale-95 md:w-fit"
                href="https://portfolio-car-rental.vercel.app/"
              >
                Car Rental Portfolio (WIP)
              </a>
            </div>
          </div>
          <hr className="mt-8 border-white/50"></hr>
          <div className="mt-4 text-right text-sm">2024</div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
