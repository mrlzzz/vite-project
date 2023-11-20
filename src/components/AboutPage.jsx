import autoAnimate from "@formkit/auto-animate";
import { useRef, useEffect } from "react";

const AboutPage = () => {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  // md:mx-28 md:mt-10 lg:mx-28 lg:mt-10
  return (
    <>
      <div ref={parent} className="h-fit min-h-screen w-full">
        <section className="mx-2 my-1 flex h-fit border-b-2 border-t-2 border-slate-400 bg-slate-700 px-3 py-4  font-light text-slate-300 shadow-lg lg:m-10 lg:px-12 lg:py-10  ">
          <div className="">
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
              The project is filled with bugs, inconsitencies, and dummy
              placeholder data, however the goal is learn and actually build
              something, so all these are acknowledged and welcomed as a part of
              the learning curve.
            </p>
            <br></br>
            <p className="border-l-4 border-red-300 pl-2 text-base lg:text-base">
              The source code for this website is available at:{" "}
              <a
                className="underline-slate-100 group text-base text-slate-400 transition duration-300 "
                style={{ textDecorationColor: "rgb(203 213 225)" }}
                href="https://github.com/mrlzzz/vite-project"
              >
                https://github.com/mrlzzz/vite-project
                {/* <span className="block h-[1px] max-w-0 bg-red-300 transition-all duration-500 group-hover:max-w-full"></span> */}
              </a>
              <br />
              Backend API source code is available at:{" "}
              <a
                className="underline-slate-100 group p-1 text-base text-slate-400 transition duration-300 "
                style={{ textDecorationColor: "rgb(203 213 225)" }}
                href="https://github.com/mrlzzz/vite-project-express"
              >
                https://github.com/mrlzzz/vite-project-express
                {/* <span className="block h-[1px] max-w-0 bg-red-300 transition-all duration-500 group-hover:max-w-full"></span> */}
              </a>
            </p>
            <br></br>
            <p className="text-justify text-base">Sincerely,</p>
            <p className="text-justify text-base">Pawel</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
