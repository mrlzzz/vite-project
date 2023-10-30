import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Card = ({ projectsData }) => {
  const navigate = useNavigate();
  let location = useLocation();
  let isCurrentLocation = "false";

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     isCurrentLocation = "true";
  //     console.log("timeout changed");
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  const path = `/vite-project/projects${projectsData.path}`;

  return (
    <>
      <a
        onClick={() => {
          navigate(path);
        }}
      >
        <div
          className={`group max-h-[16rem] min-h-[16rem] min-w-[25rem] max-w-[25rem]  bg-slate-400 p-6 ${
            isCurrentLocation ? "opacity-100" : "opacity-50"
          } shadow-md shadow-slate-700 transition-all duration-300 ease-in-out hover:bg-slate-300`}
        >
          <h1 className="text-2xl font-bold text-gray-950">
            {projectsData.title}
          </h1>
          <hr className="my-1 border-slate-300 group-hover:border-slate-400" />
          <h2 className="text-lg text-gray-900">{projectsData.subTitle}</h2>
          <span className="text-sm text-gray-700">{projectsData.date}</span>
          <p className=" text-base tracking-tight text-gray-700">
            {projectsData.desc}
          </p>
        </div>
      </a>
    </>
  );
};

export default Card;
