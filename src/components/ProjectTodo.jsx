import TodoTable from "./TodoTable";

const ProjectTodo = () => {
  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-2 mb-8 max-w-none bg-slate-400 p-4 text-base text-slate-950 lg:mx-8 lg:p-8 lg:text-lg">
          <h2>Project Todo</h2>
          <section className="lg:w-[80%]">
            <h4>Description</h4>
            <p className="text-justify">
              The following shows a todo list component
            </p>
            <h4>Ceveats</h4>
            <p></p>
          </section>
        </article>
        <div className="mb-4 mt-4 w-full self-center border-l-4 border-red-300 bg-slate-600 py-1 pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
          {" "}
          Todo Component
        </div>
        <div className="w-full bg-slate-400 py-10">
          <div className="mx-auto w-[80%]">
            <TodoTable id="project-todo"></TodoTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTodo;
