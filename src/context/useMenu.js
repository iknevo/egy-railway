import { useContext } from "react";
import { MenuContext } from "./MenuContext";

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("MenuContext was used outside of the MenuProdiver");
  }
  return context;
}
