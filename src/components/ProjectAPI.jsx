import { useState, useEffect, useRef, useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import ToastMessage from "./ToastMessage";
// import Dropdown from "./Dropdown";
import autoAnimate from "@formkit/auto-animate";

const ProjectAPI = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState("");
  const [showPayload, setShowPayload] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [currentRequest, setCurrentRequest] = useState("");
  const payloadRef = useRef(null);
  const parent = useRef(null);
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  const resetPayload = () => {
    payloadRef.current.value = "";
  };

  const handleFetch = async (url, method, payload) => {
    setIsLoading(true);
    if (method === "GET") {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response.ok) {
          setData(result);
          addToast("success", "Data sent successfully", result.toString());
        } else {
          setData(result);
          addToast("error", "Result not ok", result.toString());
        }
        setIsLoading(false);
      } catch (error) {
        addToast("error", "Network error", error.toString());
        setErrorMessage(error);
        setIsLoading(false);
      }
    } else if (method === "POST") {
      try {
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer",
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (response.ok) {
          setData(result);
          addToast("success", "Data sent successfully", result.toString());
        } else {
          setData(result);
          addToast("error", "Result not ok", result.toString());
        }
      } catch (error) {
        setErrorMessage(error);
        addToast("error", "Network error", error.toString());
      }
    }
  };
  let optionsList = (
    <>
      <button
        className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg"
        onClick={() => {
          handleFetch("http://127.0.0.1:3000", "GET", null);
          setShowPayload(false);
          resetPayload();
          setCurrentRequest("GET /");
        }}
      >
        <b>GET</b> /
      </button>
      <button
        className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg"
        onClick={() => {
          handleFetch("http://127.0.0.1:3000/animals", "GET", null);
          setShowPayload(false);
          resetPayload();
          setCurrentRequest("GET /animals");
        }}
      >
        <b>GET</b> /animals
      </button>
      <button
        className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg"
        onClick={() => {
          setShowPayload(true);
          setCurrentRequest("POST /animals");
        }}
      >
        <b>POST</b> /animals
      </button>
      <button
        className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg"
        onClick={() => {
          setShowPayload(false);
          resetPayload();
          setCurrentRequest("GET /example");
        }}
      >
        <b>GET</b> /example
      </button>
    </>
  );

  const schema = (body) => {
    return {
      type: "object",
      properties: {
        animal: { type: body },
      },
    };
  };

  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-2 mb-8 max-w-none bg-slate-400 p-4 text-base text-slate-950 lg:mx-8 lg:p-8 lg:text-lg">
          <h2>Description</h2>
          <section className="">
            <p>
              The following shows React performing a <code>HTTP GET</code>{" "}
              request inside a <code>useEffect</code> hook. The request is sent
              to a local <code>fastify</code> instance. The reply body contains
              a test <code>JSON</code> message.{" "}
              <span className="block w-fit bg-red-300 px-2">
                Due to locality of the <code>fastify</code> application, this
                deployed example will not work at the moment.
              </span>
            </p>
            <ol className="list-decimal marker:text-slate-600">
              <li>Animate the menu</li>
              <li>Add more routes</li>
              <li>
                Connect to <code>mongoDb</code>
              </li>
              <li>Enable post requests</li>
              <li>
                Deploy server-side code to serverless environment - either{" "}
                <code>Cloudflare Workers</code> or <code>Vercel</code>
              </li>
            </ol>
          </section>
        </article>
        <div className=" mb-4 mt-4 w-full self-center bg-slate-600 py-1 pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
          {" "}
          API calls
        </div>
        <div className="mx-2 my-8 flex flex-col gap-4  lg:mx-8 lg:flex-row">
          {/* <button
            className=" w-fit self-center bg-slate-300 px-4 py-2 font-mono text-base shadow-md active:bg-slate-200 active:shadow-lg"
            onClick={() => {
              setIsFetch(!isFetch);
            }}
          >
            Connect to Fastify
          </button> */}
          <div ref={parent} className="flex flex-col lg:w-64">
            <button
              className="dropdown-label cursor-pointer select-none  bg-slate-300 px-4 py-2 font-mono text-base shadow-md hover:brightness-110 active:shadow-lg active:brightness-90"
              onClick={reveal}
            >
              Fastify API
            </button>
            {show ? optionsList : null}
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex h-40 select-none flex-col overflow-auto rounded-sm bg-slate-400 p-4 font-mono text-base shadow-md">
              <span className="pb-1 text-slate-900">
                Request: <span className="font-bold">{currentRequest}</span>
              </span>
              <hr className="border-slate-600 p-1" />
              <span className="text-slate-900">
                <span className="block"> Server response: </span>
                <code>{JSON.stringify(data)}</code>
              </span>
            </div>
            <textarea
              ref={payloadRef}
              className={`block w-full resize-none bg-slate-200 p-4 font-mono text-base shadow-md outline-none transition-colors duration-200 disabled:bg-slate-600`}
              placeholder={
                showPayload ? "Enter POST payload" : "No payload in GET"
              }
              disabled={!showPayload}
              rows={showPayload ? 5 : 1}
              onChange={(e) => {
                setPayload(e.target.value);
              }}
            ></textarea>
            <button
              className="bg-slate-400 px-8  py-2 font-mono text-base transition-all hover:bg-slate-300 active:scale-90  active:bg-slate-300     active:shadow-lg lg:w-fit lg:self-end"
              onClick={() => {
                handleFetch(
                  "http://127.0.0.1:3000/animals",
                  "POST",
                  schema(payload),
                );
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAPI;
