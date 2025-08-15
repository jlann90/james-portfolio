import { createContext, useContext, useState, ReactNode } from "react";

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
  const [menuSelection, setMenuSelection] = useState<MenuSelection>({
    menuId: "home",
  });

  function handleMenuSelect(menuId: string): void {
    setMenuSelection({ menuId });
  }

  return (
    <MenuContext.Provider value={{ menuSelection, handleMenuSelect }}>
      {children}
    </MenuContext.Provider>
  );
}
