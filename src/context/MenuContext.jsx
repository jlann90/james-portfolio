import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [menuSelection, setMenuSelection] = useState({ menuId: "home" });

  function handleMenuSelect(menuId) {
    setMenuSelection({ menuId });
  }

  return (
    <MenuContext.Provider value={{ menuSelection, handleMenuSelect }}>
      {children}
    </MenuContext.Provider>
  );
}
