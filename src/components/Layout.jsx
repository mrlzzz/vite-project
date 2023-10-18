import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import ProjectContent from "./ProjectContent.jsx";
import ProjectForm from "./ProjectForm.jsx";
import { useLocation } from "react-router-dom";

export default function Layout({ children, data }) {
    let location = useLocation();

    // The following `switch` solution is a band-aid on underlying faulty component/project structure.
    // Which is that for every new page I need a brand new, specialized "content" component -
    // For this, I blame the fact that present Content component is too specific.
    // Also, component structure sucks. Anyway, it's the first one. I got to work with what I have.

    let renderedPage = null;

    switch (location.pathname) {
        case "/projects":
            renderedPage = <ProjectContent>{children}</ProjectContent>;
            break;
        case "/projects/react-forms":
            renderedPage = (
                <Content>
                    <ProjectForm></ProjectForm>
                </Content>
            );
            break;
        case "/blog":
            renderedPage = <Content data={data}>{children}</Content>;
            break;
        default:
            renderedPage = (
                <Content>
                    <p>Default page switch</p>
                </Content>
            );
    }

    return (
        <>
            <Header />
            {renderedPage}
            <Footer />
        </>
    );
}
