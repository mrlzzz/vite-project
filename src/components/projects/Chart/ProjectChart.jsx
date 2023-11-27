import Chart from "./Chart";

const ProjectChart = () => {
  return (
    <>
      <div className="flex flex-col">
        <article className="shadow-m group prose mx-2 mb-8 max-w-none bg-slate-400 p-4 text-base text-slate-950 lg:mx-8 lg:p-8 lg:text-lg">
          <h2>Project Chart</h2>
          <section className="lg:w-[80%]">
            <h4>Description</h4>
            <p className="">
              Chart component using{" "}
              <a href="https://recharts.org/en-US">Recharts</a>. Visualization
              of weather data. For API requests I want to use{" "}
              <a href="https://tanstack.com/query/v3/">TanStack Query</a>{" "}
              instead of the Fetch API directly. Also, I would to animate the
              chart on data change - for this case, I hope{" "}
              <a href="https://auto-animate.formkit.com/">auto-animate</a> will
              do just fine.
            </p>
            <h4>Ceveats</h4>
            <p>None yet.</p>
          </section>
        </article>
        <div className="mb-4 mt-4 w-full self-center border-l-4 border-red-300 bg-slate-600 py-1 pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
          {" "}
          Chart Component
        </div>
        <div className="w-full bg-slate-100 py-10">
          <div className="mx-auto w-full">
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectChart;
