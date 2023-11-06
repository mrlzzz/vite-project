import { useState, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import Markdown from "react-markdown";
import mdFlexbox from "../markdown/Flexbox.md";
import mdClosures from "../markdown/Closures.md";

const markdownFiles = [mdFlexbox, mdClosures];

const ProjectFlexbox = () => {
  const [markdown, setMarkdown] = useState("");
  const [mdIndex, setMdIndex] = useState(0);
  const parent = useRef(null);

  useEffect(() => {
    fetch(markdownFiles[mdIndex])
      .then((res) => res.text())
      .then((text) => setMarkdown(text));

    parent.current && autoAnimate(parent.current);
  }, [mdIndex, parent]);

  return (
    <>
      <article className="shadow-m group prose mx-2 max-w-none bg-slate-400 p-4 text-slate-950 lg:mx-8 lg:mb-8 lg:p-8 lg:text-lg">
        <h2>Description</h2>
        <section className="">
          <p>
            The following shows me trying to render a markdown file that I have
            generated while brushing-up on <code>flexbox</code>. As for now, I
            have see using <code>react-markdown</code> or <code>marked</code>{" "}
            for rendering
            <code>.md</code> files inside React (btw. I have seen the{" "}
            <code>.mdx</code> markdown, but I did not check it out yet). Also,
            Tailwind provides a <code>@tailwindcss/typography</code> plugin,
            which can help me to dynamically style the markdown content.
          </p>
          <div>
            <i>22/10/23</i> - IT WORKS, no vite plugins needed!. So to do it
            <ol className="list-decimal">
              <li>
                Import <code>react-markdown</code>
              </li>
              <li>
                Allow parsing markdown assets in vite. Add{" "}
                <code>assetsInclude: [&quot;**/*.md&quot;]</code> in{" "}
                <code>vite.config.js</code>,
              </li>
              <li>
                Include file using <code>Fetch API</code> inside of a{" "}
                <code>useEffect</code>
              </li>
              <li>
                Render the file as a child of <code>Markdown</code> component
                from the <code>react-markdown</code>
              </li>
              <li>
                TODO: I want to render a few markdown files and present them
                below as carousel
              </li>
            </ol>
          </div>
        </section>
      </article>
      <div className=" w-full self-center bg-slate-600 py-1 pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
        {" "}
        ./markdown/{mdIndex === 0 ? "flexbox" : "closures"}.md
      </div>
      <div className="sticky top-1 z-50 mt-4 flex justify-center font-mono text-sm font-semibold">
        <button
          onClick={() => {
            mdIndex === 0 ? setMdIndex(1) : setMdIndex(0);
            parent.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="peer w-fit  bg-slate-300 px-4 uppercase  text-slate-700 transition-all lg:py-1 lg:hover:bg-slate-400 lg:active:bg-slate-600"
        >
          Next file &rarr;
        </button>
        <div className="ml-2 bg-slate-700 px-4 text-slate-300 transition-all duration-300 ease-in-out peer-hover:scale-100 peer-hover:opacity-100 lg:scale-90 lg:py-1 lg:opacity-0">
          {mdIndex === 0 ? "closures.md" : "flexbox.md"}
        </div>
      </div>

      <div
        ref={parent}
        className="mx-2 my-4 w-full  max-w-full self-center bg-slate-400  p-4 shadow-md lg:prose-lg marker:text-slate-900 lg:mx-8 lg:max-w-[50vw] lg:px-8"
      >
        <Markdown className="prose prose-slate w-full max-w-full py-4 lg:py-0">
          {markdown}
        </Markdown>
      </div>
    </>
  );
};

export default ProjectFlexbox;
