import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  let optionsList = (
    <>
      <button className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg">
        <b>GET</b> /
      </button>
      <button className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg">
        <b>GET</b> /
      </button>
      <button className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg">
        <b>GET</b> /
      </button>
      <button className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg">
        <b>GET</b> /
      </button>
      <button className="dropdown-content cursor-pointer select-none  border-b border-slate-600 bg-slate-400 px-4 py-1 text-left font-mono  text-base shadow-md transition-all hover:bg-slate-200 active:scale-95 active:bg-slate-300 active:shadow-lg">
        <b>GET</b> /
      </button>
    </>
  );

  return (
    <div ref={parent} className="flex flex-col">
      <button
        className="dropdown-label cursor-pointer select-none  bg-slate-300 px-4 py-2 font-mono text-base shadow-md active:bg-slate-200 active:shadow-lg"
        onClick={reveal}
      >
        Fastify API
      </button>
      {show ? optionsList : null}
    </div>
  );
};

export default Dropdown;
