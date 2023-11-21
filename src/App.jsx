import "./App.css";
import Layout from "./components/Layout";
import Post from "./components/Post";
import Card from "./components/Card";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  // Both `useEffect` and `useLocation` are used to scroll the view to the top after page re-render.
  // I have no idea how `window` uses the `location` from the dependencies.
  // I have no idea why the `location` has to be there. However, without it, it does not work.

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Dummy data section. It will be switched to an API/db in the future.

  const projectsData = [
    {
      title: "React-form-hook",
      subTitle: "Using the hook!",
      status: "Done",
      desc: "Learning how to properly handle forms in React. There is many ways of handling that natively using state, context and reducer functions. Although, I've heard it's a great hussle to do it properly. So why not use the hook goodies?",
      path: "/react-forms",
    },
    {
      title: "Flexdown lesson",
      subTitle: "Flexbox x markdown",
      status: "Done",
      desc: "Studying the flexbox while trying to render markdown notes. Multiple markdown files enabled.",
      path: "/flexbox",
    },
    {
      title: "Project API",
      subTitle: "Node + mongodb + API calls",
      status: "In Progress",
      desc: "Node + mongodb + API calls",
      path: "/api",
    },
    // {
    //   title: "Animations",
    //   subTitle: "Testing the auto-animate library",
    //   status: "In Progress",
    //   desc: "Description",
    //   path: "/animate",
    // },
    {
      title: "Toast Notifications",
      subTitle: "Custom built toast notification system",
      status: "Done",
      desc: "Custom toast message system built using React's context, state and useEffect. Customizable and available to any component.",
      path: "/toast",
    },
    {
      title: "Todo Component",
      subTitle: "Todo Component",
      status: "In Progress",
      desc: "Implementation of reusable and interactive Todo component",
      path: "/todo",
    },
    {
      title: "Placeholder",
      subTitle: "Placeholder",
      status: "Placeholder",
      desc: "Placeholder",
      path: "/example",
    },
  ];

  const blogData = [
    {
      title: "Example",
      subTitle: "Sub title",
      date: "Date",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati sint, sequi pariatur, ullam suscipit, necessitatibus modi temporibus beatae alias labore impedit? Atque laboriosam doloribus minima hic cupiditate quam non?",
    },
  ];

  for (let i = 0; i < 14; i++) {
    blogData.push({
      title: "Title",
      subTitle: "Sub title",
      date: "Date",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati sint, sequi pariatur, ullam suscipit, necessitatibus modi temporibus beatae alias labore impedit? Atque laboriosam doloribus minima hic cupiditate quam non?",
    });
  }

  const blogPostList = blogData.map((e, index) => {
    return <Post key={index} blogData={e} />;
  });

  const projectsPostList = projectsData.map((e, index) => {
    return <Card key={index} projectsData={e} />;
  });

  return (
    <div className=" bg-slate-300 lg:text-xl">
      <Routes>
        <Route path="/vite-project" element={<Layout />} />
        <Route
          path="/vite-project/blog"
          element={<Layout>{blogPostList}</Layout>}
        />
        <Route
          path="/vite-project/projects"
          element={<Layout>{projectsPostList}</Layout>}
        />
        {/* 
            The following dynamically creates any "/vite-project/projects" subroutes 
        */}
        {projectsData.map((e, index) => {
          return (
            <Route
              exact
              path={"/vite-project/projects" + e.path}
              element={<Layout data={e} />}
              key={index}
            />
          );
        })}
        <Route path="/vite-project/info" element={<Layout />} />
        <Route path="*" element={<h1>404 sory</h1>} />
      </Routes>
    </div>
  );
}

export default App;
