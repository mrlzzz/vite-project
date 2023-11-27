import { useRef } from "react";

const ProjectAnimate = () => {
  const parent = useRef(null);

  return (
    <>
      <div
        ref={parent}
        className="m-4 flex h-[80vh] flex-wrap content-center justify-between gap-4 border-8 border-red-300 bg-red-200 p-4 "
      >
        <div className="h-40 w-40 border-4 border-red-600 bg-red-500">
          <button
            onClick={() => {}}
            className="group h-[50%] w-full border-b-2 border-red-600 bg-red-600 text-red-100 transition-all hover:bg-red-700 group-hover:block"
          >
            <span className="group hidden">go</span>
          </button>
        </div>
        <div className="h-40 w-40 border-4 border-red-600 bg-red-500"></div>
        <div className="h-40 w-40 border-4 border-red-600 bg-red-500"></div>
        <div className="h-40 w-40 border-4 border-red-600 bg-red-500"></div>
        <div className="h-40 w-40 border-4 border-red-600 bg-red-500"></div>
        <div
          className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 print:hidden"
          style="z-index: -1; -webkit-mask-image: radial-gradient(circle, transparent, black); --webkit-mask-image: radial-gradient(circle, transparent, black);"
        >
          <canvas
            width="1921"
            height="918"
            style="width: 1740px; height: 832px;"
          ></canvas>
        </div>
      </div>
    </>
  );
};

export default ProjectAnimate;
