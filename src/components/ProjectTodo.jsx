import TodoTable from "./TodoTable";
import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";

const ProjectTodo = () => {
  const [toggleCode, setToggleCode] = useState(false);
  const codeBlock = `  // Center <td>'s contents
  <td
    style={{ verticalAlign: "middle" }}
    className="bg-red-300 p-0"
  >
    <div className="flex justify-center">
      <Icon type={"editIcon"}></Icon>
      <Icon type={"deleteIcon"}></Icon>
    </div>
 </td>`;
  const initialCodeBlock = `  // Center <td>'s contents`;
  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-2 mb-8 max-w-none bg-slate-400 p-4 text-base text-slate-950 lg:mx-8 lg:p-8 lg:text-lg">
          <h2>Project Todo</h2>
          <section className="lg:w-[80%]">
            <h3>Description</h3>
            <p className="text-justify">
              The following shows a todo list component. Persistent data due to
              use of local storage. Individual todo componenents have their own
              dataset. This component is a good practise of state manipulation,
              given the implementation of adding new tasks, editing them, moving
              around etc.
            </p>
            <h4>Ceveats</h4>
            <p>A quick guide on centering contents of a {"<td>"} tag.</p>
            <div
              onClick={() => {
                setToggleCode(!toggleCode);
              }}
              className="cursor-pointer transition-all duration-150 hover:brightness-110"
            >
              <Highlight
                theme={themes.jettwaveDark}
                code={toggleCode ? codeBlock : initialCodeBlock}
                language="jsx"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span>{i + 1}</span>
                        {line.map((token, key) => (
                          <span
                            style={{ backgroundColor: "red" }}
                            key={key}
                            {...getTokenProps({ token })}
                          />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </section>
        </article>
        <div className="mb-4 mt-4 w-full self-center border-l-4 border-red-300 bg-slate-600 py-1 pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
          {" "}
          Todo Component
        </div>
        <div className="w-full bg-slate-400 py-10">
          <div className="mx-auto w-[80%]">
            <TodoTable id="project-todo"></TodoTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTodo;
