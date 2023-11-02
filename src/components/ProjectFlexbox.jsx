import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import file from "../markdown/Flexbox.md";

const ProjectFlexbox = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <article className="shadow-m group prose mx-8 mb-8 max-w-none bg-slate-400 p-8 text-slate-950 lg:text-lg">
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
      <div className=" w-full self-center bg-slate-600 py-1 pr-10 text-right font-mono text-sm font-light italic text-slate-400">
        {" "}
        ./markdown/flexbox.md
      </div>
      <Markdown className="prose mx-8 my-4  w-full max-w-full self-center bg-slate-400 p-8 shadow-md lg:prose-lg marker:text-slate-900 lg:max-w-[50vw]">
        {markdown}
      </Markdown>
    </>
  );
};

export default ProjectFlexbox;
