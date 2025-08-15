import { MenuProvider, useMenu } from "./context/MenuContext";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";

function AppContent(): React.ReactElement {
  const { menuSelection } = useMenu();

  let pageContent: React.ReactElement | null = null;
  if (menuSelection.menuId === "home") {
    pageContent = <HomePage />;
  } else if (menuSelection.menuId === "projects") {
    pageContent = <ProjectsPage />;
  }

  return (
    <main className="flex justify-between bg-gradient-to-b from-th-db-dark to-th-db pl-[84px] pr-[24px] h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto scrollbar-hide">{pageContent}</div>
      <Menu />
    </main>
  );
}

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-b from-th-rd-dark to-th-rd flex justify-center">
      <div className="w-full max-w-[1740px] drop-shadow-app">
        <MenuProvider>
          <AppContent />
        </MenuProvider>
      </div>
    </div>
  );
}

export default App;
