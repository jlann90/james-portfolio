import { MenuProvider, useMenu } from "./context/MenuContext";
import Menu from "./components/Menu/Menu";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

function AppContent(): React.ReactElement {
  const { menuSelection } = useMenu();

  let pageContent: React.ReactElement | null = null;
  if (menuSelection.menuId === "home") {
    pageContent = <HomePage />;
  } else if (menuSelection.menuId === "projects") {
    pageContent = <ProjectsPage />;
  } else if (menuSelection.menuId.startsWith("project-")) {
    const projectId = menuSelection.menuId.replace("project-", "");
    pageContent = <Project key={projectId} projectId={projectId} />;
  } else if (menuSelection.menuId === "experience") {
    pageContent = <Experience />;
  } else if (menuSelection.menuId === "contact") {
    pageContent = <Contact />;
  }

  return (
    <main className="flex flex-col lg:flex-row justify-between bg-gradient-to-b from-th-db-dark to-th-db lg:pl-[84px] lg:pr-[24px] h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0 h-full">
        {pageContent}
      </div>
      <Menu />
    </main>
  );
}

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#202124] flex justify-center">
      <div className="w-full max-w-[1740px] drop-shadow-app">
        <MenuProvider>
          <AppContent />
        </MenuProvider>
      </div>
      <Modal />
    </div>
  );
}

export default App;
