import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import file from "../markdown/Flexbox.md";

//const markdown = "# Hi, *Pluto*!";

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
            which can help me to style the markdown content.
          </p>
          <div>
            <i>22/10/23</i> - IT WORKS, no vite plugins needed!. So to do it
            <ol className="list-decimal">
              <li>
                Use <code>react-markdown</code>
              </li>
              <li>2asdasda</li>
              <li>2asdasd</li>
            </ol>
          </div>
        </section>
      </article>
      <Markdown className="prose mx-8 mb-4  w-full max-w-full self-center bg-slate-400 p-8 shadow-md lg:prose-lg marker:text-slate-900 lg:max-w-[50vw]">
        {markdown}
      </Markdown>
    </>
  );
};

export default ProjectFlexbox;
