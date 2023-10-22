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
            <section className="bg-slate-400 shadow-md text-slate-950 mx-4 mb-4 p-2">
                <b>Description</b>
                <p>
                    The following shows me trying to render a markdown file that
                    I have generated while brushing-up on <code>flexbox</code>
                </p>
                <p>
                    As for now, I see using{" "}
                    <code>
                        <a href="https://www.npmjs.com/package/react-markdown">
                            react-markdown
                        </a>
                    </code>{" "}
                    or{" "}
                    <code>
                        <a
                            href="
                https://www.npmjs.com/package/marked"
                        >
                            marked
                        </a>
                    </code>{" "}
                    for rendering the <code>.md</code> files inside React{" "}
                    <span className="text-sm">
                        (btw. I have seen the <code>.mdx</code> markdown, but I
                        didn't check it out yet).
                    </span>
                </p>
                <p>
                    Also, Tailwind provides a{" "}
                    <code>
                        <a href="https://tailwindcss.com/docs/typography-plugin">
                            @tailwindcss/typography
                        </a>
                    </code>{" "}
                    plugin, which can help me to style the markdown content
                </p>
                <p>
                    <i>22/10/23</i> - IT WORKS, no vite plugins needed!. So to
                    do it
                </p>
                <ol className="list-decimal list-inside">
                    <li>
                        Use <code>react-markdown</code>
                    </li>
                    <li>2asdasda</li>
                    <li>2asdasd</li>
                </ol>
            </section>
            <Markdown className="prose bg-slate-400 shadow-md mx-4 mb-4 p-2 marker:text-slate-900">
                {markdown}
            </Markdown>
        </>
    );
};

export default ProjectFlexbox;
