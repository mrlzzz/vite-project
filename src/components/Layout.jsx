import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import ProjectContent from "./ProjectContent.jsx";
import ProjectForm from "./ProjectForm.jsx";
import ProjectFlexbox from "./ProjectFlexbox.jsx";
import InfoPage from "./InfoPage.jsx";
import AboutPage from "./AboutPage.jsx";
import ProjectAPI from "./ProjectAPI.jsx";
import { useLocation } from "react-router-dom";
import ProjectAnimate from "./ProjectAnimate.jsx";

export default function Layout({ children, data }) {
  let location = useLocation();

  // The following `switch` solution is a band-aid on underlying faulty component/project structure.
  // Which is that for every new page I need a brand new, specialized "content" component -
  // For this, I blame the fact that present Content component is too specific.
  // Also, component structure sucks. Anyway, it's the first one. I got to work with what I have.

  // It is still disgusting. With each new page, I cry a little. - 21/10/23

  // `Layout`, more like `Router`

  let renderedPage = null;

  switch (location.pathname) {
    case "/vite-project/projects":
      renderedPage = <ProjectContent>{children}</ProjectContent>;
      break;
    case "/vite-project/projects/react-forms":
      renderedPage = (
        <Content>
          <ProjectForm></ProjectForm>
        </Content>
      );
      break;
    case "/vite-project/projects/flexbox":
      renderedPage = (
        <Content>
          <ProjectFlexbox></ProjectFlexbox>
        </Content>
      );
      break;
    case "/vite-project/projects/api":
      renderedPage = (
        <Content>
          <ProjectAPI></ProjectAPI>
        </Content>
      );
      break;
    case "/vite-project/projects/animate":
      renderedPage = (
        <Content>
          <ProjectAnimate></ProjectAnimate>
        </Content>
      );
      break;
    case "/vite-project/blog":
      renderedPage = <Content data={data}>{children}</Content>;
      break;
    case "/vite-project":
      renderedPage = (
        <Content>
          <AboutPage></AboutPage>
        </Content>
      );
      break;
    case "/vite-project/info":
      renderedPage = (
        <Content>
          <InfoPage></InfoPage>
        </Content>
      );
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
