import { ToastContext } from "../context/ToastContext";
import { useContext, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

const initialCodeBlock = `  // ToastContext.jsx`;

const codeBlock = `  // ToastContext.jsx
  import { createContext, useState, useEffect } from "react";
  import ToastMessage from "../components/ToastMessage";

  export const ToastContext = createContext(null);

  const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
      const toastTimeout = setTimeout(() => {
        if (toasts.length > 0) {
          const updatedToasts = toasts.slice(1); // Remove the first toast
          setToasts(updatedToasts);
        }
      }, 2000);

      return () => {
        clearTimeout(toastTimeout);
      };
    }, [toasts]);

    const addToast = (type, title, message) => {
      const toastKey = crypto.randomUUID();
      const removeToast = () => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.key !== toastKey),
        );
      };
      setToasts([
        ...toasts,
        <ToastMessage
          key={toastKey}
          dataKey={toastKey}
          type={type}
          title={title}
          removeToast={removeToast}
        >
          {message}
        </ToastMessage>,
      ]);
    };

    // This gets exposed to components using the context
    const contextValue = {
      toasts,
      setToasts,
      addToast,
    };

    return (
      <ToastContext.Provider value={contextValue}>
        {children}
      </ToastContext.Provider>
    );
  };`;

const ProjectToast = () => {
  const { addToast, setToasts } = useContext(ToastContext);
  const [toggle, setToggle] = useState(false);

  const buttonClass =
    "cursor-pointer select-none  border-b border-slate-600 bg-slate-300 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg";
  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-2 max-w-none bg-slate-400 p-4 text-lg text-slate-950 lg:mx-8 lg:mb-8 lg:p-8 [&>code]:bg-red-300">
          <h2>Project Toast</h2>
          <section className="lg:w-[80%]">
            <h3>Description</h3>
            <p>
              Custom toast message system. It is built using React&apos;s
              context, state and useEffect. To do so, I&apos;ve created a
              context which exposes access to toast message state to any
              component in the app. Meaning that any component can invoke the
              exposed <code>addToast()</code> function, and add a new{" "}
              <code>ToastMessage</code> component to the context&apos;s state.
              After a given time, the context&apos;s <code>useEffect</code>{" "}
              removes the ToastMessage component in the FIFO fashion.
              <br />
              <br />
              The <code>addToast()</code> function takes three arguments -{" "}
              <code>type</code>, <code>title</code>, and <code>message</code>.
            </p>
            <ol className="list-decimal pl-0 marker:text-slate-600 lg:list-inside">
              <b>TODO</b>
              <li>
                Customize toast messages based on type of message and position
              </li>
              <li>Add ability to close the toast</li>
              <li>Add and export standarized set of messages</li>
              <li>Fix clipping animations</li>
            </ol>
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className="cursor-pointer"
            >
              <Highlight
                theme={themes.jettwaveDark}
                code={toggle ? codeBlock : initialCodeBlock}
                language="jsx"
              >
                {({ style, tokens, getLineProps, getTokenProps }) => (
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
        <div className=" mb-8 mt-4 w-full self-center bg-slate-600 py-1 pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
          {" "}
          toast-notifications
        </div>
        <div className="flex flex-col justify-center lg:flex-row [&>button]:m-2 [&>button]:p-4">
          <button
            className={buttonClass}
            onClick={() => {
              addToast("error", "Error message", "Error message example");
            }}
          >
            Error message
          </button>
          <button
            className={buttonClass}
            onClick={() => {
              addToast("success", "Success message", "Success message example");
            }}
          >
            Success message
          </button>
          <button
            className={buttonClass}
            onClick={() => {
              addToast("info", "Info message", "Info message example");
            }}
          >
            Info message
          </button>
          <button
            className={buttonClass}
            onClick={() => {
              setToasts([]);
            }}
          >
            Close all notifications
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectToast;
