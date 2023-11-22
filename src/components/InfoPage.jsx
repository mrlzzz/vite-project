const InfoPage = () => {
  return (
    <div className="flex h-[70vh] items-center justify-center  font-mono text-sm text-slate-300">
      <div className="m-1 flex items-center rounded-lg bg-slate-700 pl-6 shadow-md">
        <span className="block">
          <code className="">
            &gt; react(vite), tailwindCSS, gh-pages, express, mongodb
          </code>
        </span>
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 700 600"
            width="45px"
            className="fill-primary text-primary mt-2"
          >
            <path stroke="currentColor" strokeWidth="35" d="M50 310 h100">
              <animate
                attributeName="stroke"
                attributeType="XML"
                begin="0s"
                calcMode="discrete"
                dur="2s"
                repeatCount="indefinite"
                values="transparent;currentColor"
              ></animate>
            </path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default InfoPage;
