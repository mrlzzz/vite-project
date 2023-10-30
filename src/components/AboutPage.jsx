const AboutPage = () => {
  return (
    <>
      <div className="flex h-fit min-h-screen w-full">
        <section className="h-fit border-b-2 border-t-2 border-slate-400 bg-slate-700 p-20 font-light text-slate-200  shadow-lg  md:mx-28 md:mt-10 lg:mx-28 lg:mt-10">
          <h1>Hey!</h1>
          <br></br>
          <p className="text-justify text-lg">
            This website is a space, which I use to implement concepts that
            I&apos;ve learnt throughout my studies of React, JavaScript and
            anything related or interesting to me like working with API calls,
            CSS flexbox, markdown files, or animations. I try to describe each
            example with my thought process, potential improvements, and little
            hacks that have been necesssary to make it work - mostly addressed
            to future me.
          </p>
          <br></br>
          <p className="text-justify text-lg">
            The project is filled with bugs, inconsitencies, and dummy
            placeholder data, however the goal is learn and actually build
            something, so all these are acknowledged and welcomed as a part of
            the learning curve.
          </p>
          <br></br>
          <p className="text-justify text-lg">
            The source code for this website is available at:{" "}
            <a
              className="underline-slate-100 group text-base text-slate-400 transition duration-300 "
              style={{ textDecorationColor: "rgb(203 213 225)" }}
              href="https://github.com/mrlzzz/vite-project"
            >
              https://github.com/mrlzzz/vite-project
              <span className="block h-[1px] max-w-0 bg-red-300 transition-all duration-500 group-hover:max-w-full"></span>
            </a>
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
