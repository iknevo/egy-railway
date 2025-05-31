import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("MenuContext was used outside of the MenuProdiver");
  }
  return context;
}

export { MenuProvider, useMenu };
