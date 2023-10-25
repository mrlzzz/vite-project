import { useState, useEffect } from "react";

const ProjectAPI = () => {
  const [isFetch, setIsFetch] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    if (isFetch) {
      fetch("http://127.0.0.1:3000")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFetchedData({
            ...data,
          });
        })
        .finally(() => {
          setIsFetch(false);
        });
    }
  }, [isFetch, fetchedData, setFetchedData]);

  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-4 mb-8 max-w-none bg-slate-400 p-4 text-lg text-slate-950">
          <h2>Description</h2>
          <section className="">
            <p>
              The following shows React performing a <code>HTTP GET</code>{" "}
              request inside a <code>useEffect</code> hook. The request is sent
              to a local <code>fastify</code> instance. The reply body contains
              a test <code>JSON</code> message.
            </p>
            <ul className="list-disc marker:text-slate-900">
              <li>animate the menu</li>
              <li>more routes</li>
              <li>connect to db</li>
              <li>enable post requests</li>
            </ul>
          </section>
        </article>
        <div className="mx-4 my-8 flex flex-col">
          <button
            className=" w-fit self-center bg-slate-300 px-4 py-2 font-mono text-base shadow-md active:bg-slate-200 active:shadow-lg"
            onClick={() => {
              setIsFetch(!isFetch);
            }}
          >
            Connect to Fastify
          </button>
          <span className=" mt-4 h-40 select-none rounded-sm bg-slate-400 p-4">
            Server response: <code>{JSON.stringify(fetchedData)}</code>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectAPI;
