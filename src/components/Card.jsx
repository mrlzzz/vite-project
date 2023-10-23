import { useNavigate } from "react-router-dom";

const Card = ({ projectsData }) => {
  const navigate = useNavigate();

  const path = `/vite-project/projects${projectsData.path}`;
  return (
    <a
      onClick={() => {
        navigate(path);
      }}
    >
      <div className="group mx-2 mb-4 h-56 min-h-fit w-96 overflow-hidden bg-slate-400 p-4 shadow-md shadow-slate-700 duration-300 hover:bg-slate-300">
        <h1 className="text-2xl font-bold text-gray-950">
          {projectsData.title}
        </h1>
        <hr className="my-1 border-slate-300 group-hover:border-slate-400" />
        <h2 className="text-lg text-gray-900">{projectsData.subTitle}</h2>
        <span className="text-sm text-gray-700">{projectsData.date}</span>
        <p className="tracking-tight text-gray-800">{projectsData.desc}</p>
      </div>
    </a>
  );
};

export default Card;
