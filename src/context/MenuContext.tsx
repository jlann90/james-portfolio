import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface MenuSelection {
  menuId: string;
}

interface MenuContextType {
  menuSelection: MenuSelection;
  handleMenuSelect: (menuId: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function useMenu(): MenuContextType {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}

interface MenuProviderProps {
  children: ReactNode;
}

export function MenuProvider({
  children,
}: MenuProviderProps): React.ReactElement {
  const [menuSelection, setMenuSelection] = useState<MenuSelection>(() => {
    // Try to get the saved menu selection from localStorage
    const saved = localStorage.getItem("menuSelection");
    return saved ? JSON.parse(saved) : { menuId: "home" };
  });

  // Save menu selection to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("menuSelection", JSON.stringify(menuSelection));
  }, [menuSelection]);

  function handleMenuSelect(menuId: string): void {
    setMenuSelection({ menuId });
  }

  return (
    <MenuContext.Provider value={{ menuSelection, handleMenuSelect }}>
      {children}
    </MenuContext.Provider>
  );
}
