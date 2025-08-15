import { MenuProvider, useMenu } from "./context/MenuContext";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";

function AppContent(): React.ReactElement {
  const { menuSelection } = useMenu();

  let pageContent: React.ReactElement | null = null;
  if (menuSelection.menuId === "home") {
    pageContent = <HomePage />;
  }

  return (
    <main className="flex justify-between bg-th-db pl-[84px] pr-[24px] h-screen overflow-hidden">
      {pageContent}
      <Menu />
    </main>
  );
}

function App(): React.ReactElement {
  return (
    <MenuProvider>
      <AppContent />
    </MenuProvider>
  );
}

export default App;
