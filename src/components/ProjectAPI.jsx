import { useState, useEffect, useRef, useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import formatDate from "../utils/FormatDate";
import autoAnimate from "@formkit/auto-animate";

// https://vite-project-express.vercel.app
// http://localhost:9001

const DOMAIN_URL = "https://vite-project-express.vercel.app";

const ProjectAPI = () => {
  const [data, setData] = useState([
    {
      user: "",
      content: "",
      date: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [payload, setPayload] = useState("");
  const [showPayload, setShowPayload] = useState(false);
  const [show, setShow] = useState(false);
  const [currentRequest, setCurrentRequest] = useState({
    method: "METHOD",
    path: "path",
    url: "url",
  });
  const payloadRef = useRef(null);
  const parent = useRef(null);
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  const resetPayload = () => {
    setPayload("");
  };

  const handleFetchPOST = async (url, body) => {
    setIsSubmitting(true);
    console.log("POST launching!");
    try {
      console.log("POST launching! in the try");
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
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (response.ok) {
        addToast(
          "success",
          "Data sent successfully",
          "Response: " + result.toString(),
        );
        setTimeout(() => {
          setIsSubmitting(false);
          setPayload("");
          resetPayload();
        }, 2000);
      } else {
        addToast("error", "Result not ok", result.toString());
        setIsSubmitting(false);
      }
    } catch (error) {
      addToast("error", "Network error", error.toString());
      setIsSubmitting(false);
    }
  };

  const handleFetchDELETE = async (url) => {
    setIsLoading(true);
    console.log("DELETE launching!");
    try {
      console.log("DELETE launching! in the try");
      const response = await fetch(url, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
      });

      const result = await response.json();

      if (response.ok) {
        addToast(
          "success",
          "Data removed successfully",
          "Response: " + result.toString(),
        );
        setTimeout(() => {
          setIsSubmitting(false);
          setPayload("");
          resetPayload();
        }, 2000);
      } else {
        addToast("error", "Result not ok", result.toString());
        setIsSubmitting(false);
      }
    } catch (error) {
      addToast("error", "Network error", error.toString());
      setIsSubmitting(false);
    }
  };

  const handleFetchGET = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setData([...result]);
        addToast(
          "success",
          "Request sent successfully",
          "Received all messages from the server",
        );
      } else {
        addToast("error", "Result not ok", JSON.stringify(result));
      }
      setIsLoading(false);
    } catch (error) {
      addToast("error", "Network error", error.toString());
      setIsLoading(false);
    }
  };

  const handleFetch = async () => {
    switch (currentRequest.method) {
      case "GET":
        handleFetchGET(currentRequest.url);
        break;
      case "POST":
        handleFetchPOST(
          currentRequest.url,
          schema({
            content: payload,
            user: "mrl",
            date: Date.now(),
          }),
        );
        break;
      case "DELETE":
        handleFetchDELETE(currentRequest.url);
        break;
    }
  };

  let optionsList = (
    <>
      <button
        className="dropdown-content cursor-pointer select-none border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg"
        onClick={() => {
          setShowPayload(false);
          resetPayload();
          setCurrentRequest({
            method: "GET",
            path: "/guestbook/all",
            url: `${DOMAIN_URL}/guestbook/all`,
          });
        }}
      >
        <b>GET</b> <span className="text-sm">/guestbook/all</span>
      </button>

      <button
        className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg"
        onClick={() => {
          setShowPayload(true);
          setCurrentRequest({
            method: "POST",
            path: "/guestbook/new",
            url: `${DOMAIN_URL}/guestbook/new`,
          });
        }}
      >
        <b>POST</b> <span className="text-sm">/guestbook/new</span>
      </button>
      <button
        className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg"
        onClick={() => {
          setShowPayload(false);
          setCurrentRequest({
            method: "DELETE",
            path: "/guestbook/delete/all",
            url: `${DOMAIN_URL}/guestbook/delete/all`,
          });
        }}
      >
        <b>DELETE</b> <span className="text-sm">/guestbook/delete/all</span>
      </button>
      <button
        className="dropdown-content cursor-pointer select-none border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono text-base  shadow-md transition-all active:shadow-lg enabled:hover:bg-slate-200 enabled:active:scale-95 enabled:active:bg-slate-300 disabled:cursor-default disabled:brightness-90"
        onClick={() => {
          setShowPayload(false);
          resetPayload();
          setCurrentRequest({
            method: "GET",
            path: "/guestbook/example",
            url: "",
          });
        }}
        disabled={true}
      >
        <b>GET</b> <span className="text-sm">/example</span>
      </button>
      <button
        className="dropdown-content cursor-pointer select-none border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono text-base  shadow-md transition-all active:shadow-lg enabled:hover:bg-slate-200 enabled:active:scale-95 enabled:active:bg-slate-300 disabled:cursor-default disabled:brightness-90 "
        onClick={() => {
          setShowPayload(false);
          resetPayload();
          setCurrentRequest({
            method: "GET",
            path: "/guestbook/users/mrl",
            url: "",
          });
        }}
        disabled={true}
      >
        <b>GET</b> <span className="text-sm">/guestbook/users/mrl</span>
      </button>
    </>
  );

  const schema = (body) => {
    return {
      type: "object",
      properties: {
        message: { type: body },
      },
    };
  };

  let messages = data.map((message, index) => (
    <span className="block select-text" key={index}>
      {" "}
      <span className="text-slate-600">
        {typeof message.date === "number"
          ? formatDate(message.date) + " "
          : message.date + " "}
      </span>
      <span className="font-bold">{message.user + " "}</span>
      <span className="font-bold">{message.date === "" ? "" : ": "}</span>
      <span className="font-sans">{message.content}</span>
    </span>
  ));

  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-2 mb-8 max-w-none bg-slate-400 p-4 text-base text-slate-950 lg:mx-8 lg:p-8 lg:text-lg">
          <h2>Description</h2>
          <section className="">
            <p>
              The following shows React performing a <code>HTTP GET</code>{" "}
              request inside a <code>useEffect</code> hook. The request is sent
              to a local <code>Node</code> instance. The reply body contains a
              test <code>JSON</code> message.{" "}
              <span className="block w-fit bg-red-300 px-2">
                Due to locality of the <code>Node</code> application, this
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
        <div className="mb-4 mt-4 w-full self-center bg-slate-600 py-1 pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
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
            Connect to Node
          </button> */}
          <div ref={parent} className="flex flex-col lg:w-64">
            <button
              className="dropdown-label cursor-pointer select-none  bg-slate-300 px-4 py-2 font-mono text-base shadow-md hover:brightness-110 active:shadow-lg active:brightness-90"
              onClick={reveal}
            >
              <span>Node API</span>
              <br />
              <span className="text-sm">☆ Choose a request ☆</span>
            </button>
            {show ? optionsList : null}
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="scrollbar flex h-60 select-none flex-col overflow-auto rounded-sm bg-slate-400 p-4 font-mono text-base shadow-md">
              <span className="pb-1 text-slate-900">
                Current request:{" "}
                <span className=" rounded-sm bg-slate-700 px-4 py-1 text-slate-300 transition-all duration-300 ease-in-out">
                  <span className="font-bold">
                    {currentRequest.method + " "}{" "}
                  </span>
                  <span className="text-sm">{currentRequest.path}</span>
                </span>
              </span>
              <hr className="border-slate-600 p-1" />
              <span className="text-slate-900 ">
                <span className="block">
                  {currentRequest.method === "METHOD" ? (
                    <span>
                      &larr; Use the Node API menu to choose a request
                    </span>
                  ) : (
                    <span>Fetched data: </span>
                  )}
                </span>

                <div className="">{messages}</div>
              </span>
            </div>
            {isSubmitting ? (
              <textarea
                className={`block w-full resize-none bg-slate-300 p-4 font-mono text-base shadow-md outline-none transition-colors duration-200`}
                disabled={true}
                placeholder="Submitting message..."
                rows={3}
              ></textarea>
            ) : (
              <textarea
                value={isSubmitting ? "Submitting message..." : payload}
                ref={payloadRef}
                className={`block w-full resize-none bg-slate-200 p-4 font-mono text-base shadow-md outline-none transition-colors duration-200 disabled:bg-slate-600`}
                placeholder={
                  showPayload
                    ? "Enter POST payload"
                    : `No payload in ${
                        currentRequest.method + " " + currentRequest.path
                      }`
                }
                disabled={!showPayload}
                rows={showPayload ? 3 : 1}
                onChange={(e) => {
                  setPayload(e.target.value);
                }}
              ></textarea>
            )}
            <div className="text-right ">
              <button
                className="bg-slate-400 px-8  py-2 font-mono text-base transition-all hover:brightness-110 active:scale-90  active:shadow-lg    active:brightness-90 lg:w-fit lg:self-end"
                onClick={() => {
                  setData([
                    {
                      user: "",
                      content: "",
                      date: "",
                    },
                  ]);
                  setCurrentRequest({
                    method: "METHOD",
                    path: "path",
                    url: "url",
                  });
                }}
              >
                Clear
              </button>
              <button
                className="ml-2 rounded-sm  bg-slate-700  px-8 py-2 font-mono  text-base text-slate-300 transition-all hover:brightness-110 active:scale-90 active:shadow-lg active:brightness-90 lg:w-fit lg:self-end"
                onClick={() => {
                  handleFetch();
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAPI;
