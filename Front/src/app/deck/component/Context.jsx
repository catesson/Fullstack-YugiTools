"use client";
import { Container } from "./container";
import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext(null);
export default function Context({children}) {

    const [color, setColor] = useState("black")
  return <ThemeContext.Provider value={{color, setColor}}>
    {children}
  </ThemeContext.Provider>
}