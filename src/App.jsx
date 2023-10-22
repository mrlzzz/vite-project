import "./App.css";
import Layout from "./components/Layout";
import Post from "./components/Post";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";

function App() {
    // Dummy data section. It will be switched to an API call in the future.

    const projectsData = [
        {
            title: "React-form-hook",
            subTitle: "Using the hook!",
            date: new Date().toDateString(),
            desc: "Learning how to properly handle forms in React. There is many ways of handling that natively using state, context and reducer functions. Although, I've heard it's a great hussle to do it properly. So why not use the hook goodies?",
            path: "/react-forms",
        },
        {
            title: "Flexdown lesson",
            subTitle: "Flexbox x markdown",
            date: new Date().toDateString(),
            desc: "Studying the flexbox while trying to render markdown notes",
            path: "/flexbox",
        },
        {
            title: "Example",
            subTitle: "Subtitle",
            date: new Date().toDateString(),
            desc: "Description",
            path: "/example",
        },
        {
            title: "Example",
            subTitle: "Subtitle",
            date: new Date().toDateString(),
            desc: "Description",
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
        <div className=" bg-slate-300">
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/blog" element={<Layout>{blogPostList}</Layout>} />
                <Route
                    path="/projects"
                    element={<Layout>{projectsPostList}</Layout>}
                />
                {/* 
                    The following dynamically creates any "/projects" subroutes 
                */}
                {projectsData.map((e, index) => {
                    return (
                        <Route
                            path={"/projects" + e.path}
                            element={<Layout data={e} />}
                            key={index}
                        />
                    );
                })}
                <Route path="/info" element={<Layout />} />
                <Route path="*" element={<h1>404 sory</h1>} />
            </Routes>
        </div>
    );
}

export default App;
