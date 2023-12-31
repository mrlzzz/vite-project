import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

import ProjectContent from "./ProjectContent.jsx";
import ProjectForm from "./ProjectForm.jsx";
import ProjectFlexbox from "./ProjectFlexbox.jsx";
import ProjectAnimate from "./ProjectAnimate.jsx";
import ProjectToast from "./ProjectToast.jsx";
import ProjectAPI from "./ProjectAPI.jsx";
import ProjectTodo from "./ProjectTodo.jsx";
import ProjectPhysics from "./projects/Physics/ProjectPhysics.jsx";
import ProjectChart from "./projects/Chart/ProjectChart.jsx";
import InfoPage from "./InfoPage.jsx";
import AboutPage from "./AboutPage.jsx";

import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext.jsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Layout({ children }) {
  const { toasts } = useContext(ToastContext);
  const [parent] = useAutoAnimate();

  // const parentAnimate = useRef(null);
  let location = useLocation();

  // useEffect(() => {
  //   parentAnimate.current && autoAnimate(parentAnimate.current);
  // }, [parentAnimate]);

  // The following `switch` solution is a band-aid on underlying faulty component/project structure.
  // Which is that for every new page I need a brand new, specialized "content" component -
  // For this, I blame the fact that present `Content` component is too specific.
  // Also, component structure is bad. Anyway, it's the first one. I got to work with what I have.

  // It is still disgusting. With each new page, I cry a little. - 21/10/23

  // `Layout`, more like `Router`

  // 02/11 - I will this component as a base for rendering Toast messages.

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
    case "/vite-project/projects/toast":
      renderedPage = (
        <Content>
          <ProjectToast></ProjectToast>
        </Content>
      );
      break;
    case "/vite-project/projects/todo":
      renderedPage = (
        <Content>
          <ProjectTodo></ProjectTodo>
        </Content>
      );
      break;
    case "/vite-project/projects/physics":
      renderedPage = (
        <Content>
          <ProjectPhysics></ProjectPhysics>
        </Content>
      );
      break;
    case "/vite-project/projects/chart":
      renderedPage = (
        <Content>
          <ProjectChart></ProjectChart>
        </Content>
      );
      break;
    case "/vite-project/blog":
      renderedPage = <Content>{children}</Content>;
      break;
    case "/vite-project/":
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
      <div
        ref={parent}
        className="fixed left-2 top-2 z-20 flex h-fit w-[20rem] flex-col  "
        // className="fixed bottom-2 left-2 flex h-fit w-fit  flex-col lg:bottom-8 lg:left-8"
      >
        {toasts}
      </div>
      <Footer />
    </>
  );
}
