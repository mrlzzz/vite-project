import "./App.css";
import Layout from "./components/Layout";
import Post from "./components/Post";
import Card from "./components/Card";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    // Dummy data section. It will be switched to an API call in the future.

    const projectsData = [
        {
            title: "React Forms Example",
            subTitle: "Using the hook!",
            date: new Date().toDateString(),
            desc: "Learning how to properly handle forms in React. There is many ways of handling that natively using state, context and reducer functions. Although, I've heard it's a great hussle to do it properly. So why not use the hook goodies?",
            path: "/react-forms",
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
                <Route exact path="/" element={<Layout></Layout>} />
                <Route
                    exact
                    path="/blog"
                    element={<Layout>{blogPostList}</Layout>}
                />
                <Route
                    exact
                    path="/projects"
                    element={<Layout>{projectsPostList}</Layout>}
                />
                {/* 
                    The following dynamically creates any "/projects" subroutes 
                */}
                {projectsData.map((e, index) => {
                    return (
                        <Route
                            exact
                            path={"/projects" + e.path}
                            element={
                                // <div className="pl-2">
                                //     <h1>You are at: `/projects{e.path}`</h1>
                                //     <button
                                //         className="bg-slate-500 hover:bg-slate-400 text-slate-100 font-bold py-2 px-2 border-b-4 border-slate-700 hover:border-slate-500 rounded"
                                //         onClick={goBack}
                                //     >
                                //         {String.fromCharCode(8678) + " Go back"}
                                //     </button>
                                // </div>
                                <Layout data={e} />
                            }
                            key={index}
                        />
                    );
                })}
                <Route exact path="/info" element={<Layout></Layout>} />
            </Routes>
        </div>
    );
}

export default App;
