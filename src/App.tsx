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
    <main className="flex justify-between bg-th-db pl-[84px] pr-[24px] h-screen">
      <div className="flex-1 overflow-y-auto scrollbar-hide">{pageContent}</div>
      <div className="overflow-visible">
        <Menu />
      </div>
    </main>
  );
}

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-th-rd flex justify-center">
      <div className="w-full max-w-[1740px] drop-shadow-app">
        <MenuProvider>
          <AppContent />
        </MenuProvider>
      </div>
    </div>
  );
}

export default App;
