import { MenuProvider, useMenu } from "./context/MenuContext.jsx";
import Menu from "./components/Menu.jsx";
import HomePage from "./components/HomePage.jsx";

function AppContent() {
  const { menuSelection } = useMenu();

  let pageContent;
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

function App() {
  return (
    <MenuProvider>
      <AppContent />
    </MenuProvider>
  );
}

export default App;
