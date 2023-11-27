import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Card = ({ projectsData }) => {
  const navigate = useNavigate();
  let location = useLocation();
  let status = projectsData.status;
  let statusBackgroundColor = "";
  let statusIcon = "";
  switch (status) {
    case "Done":
      statusBackgroundColor = "bg-green-600";
      statusIcon = "";
      break;
    case "In Progress":
      statusBackgroundColor = "bg-yellow-600";
      statusIcon = "";
      break;
    case "Placeholder":
      statusBackgroundColor = "bg-gray-600";
      statusIcon = "";
      break;
    default:
  }

  const path = `/vite-project/projects${projectsData.path}`;

  return (
    <>
      <a
        className="cursor-pointer"
        onClick={() => {
          navigate(path);
        }}
      >
        <div
          className={`group flex max-h-[18rem] min-h-[18rem] min-w-full flex-col justify-between bg-slate-400 p-4 shadow-md shadow-slate-700 transition-all duration-300 ease-in-out last:mb-2 hover:brightness-110 lg:mx-0 lg:min-w-[25rem] lg:max-w-[25rem] lg:p-6`}
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-950">
              {projectsData.title}
            </h1>
            <hr className="my-1 border-slate-300 group-hover:border-slate-600" />
            <h2 className="text-lg text-gray-900">{projectsData.subTitle}</h2>

            <p className="mt-1 text-base tracking-tight text-gray-700">
              {projectsData.desc}
            </p>
          </div>
          <div className="text-right">
            <span className=" bg-slate-500 px-2 py-1 text-right text-xs font-medium uppercase tracking-tighter text-slate-300 ">
              Status
            </span>
            <span className={`mt-1 text-xs`}>
              <span
                className={`${statusBackgroundColor} px-2 py-1 text-slate-200`}
              >
                {status}
              </span>
              {statusIcon}
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
