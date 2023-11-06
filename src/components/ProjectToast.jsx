import { ToastContext } from "../context/ToastContext";
import { useContext } from "react";

const ProjectToast = () => {
  const { addToast, setToasts } = useContext(ToastContext);
  const buttonClass =
    "cursor-pointer select-none  border-b border-slate-600 bg-slate-300 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg";
  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-2 max-w-none bg-slate-400 p-4 text-lg text-slate-950 lg:mx-8 lg:mb-8 lg:p-8">
          <h2>Description</h2>
          <section className="">
            <p>Custom built notification system</p>
            <ol className="list-decimal text-base marker:text-slate-600 lg:list-inside">
              <b>TODO: </b>
              <li>
                Customize toast messages based on type of message and position
              </li>
              <li>Add ability to close the toast</li>
              <li>Add and export standarized set of messages</li>
              <li>Fix clipping animations</li>
            </ol>
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
