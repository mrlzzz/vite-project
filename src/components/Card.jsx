const Card = ({ projectsData }) => {
    return (
        <a href={`/projects${projectsData.path}`}>
            <div className="overflow-hidden h-60 w-96 bg-slate-400 p-4 mx-2 mb-4 shadow-md shadow-slate-700 duration-300 hover:bg-slate-300">
                <h1 className="text-2xl font-bold text-gray-950">
                    {projectsData.title}
                </h1>
                <hr className="my-1 border-slate-300" />
                <h2 className="text-lg text-gray-900">
                    {projectsData.subTitle}
                </h2>
                <span className="text-md text-gray-700">
                    {projectsData.date}
                </span>
                <p className="text-gray-800">{projectsData.desc}</p>
            </div>
        </a>
    );
};

export default Card;
