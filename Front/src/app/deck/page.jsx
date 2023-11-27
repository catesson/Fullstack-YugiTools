"use client";

import { useContext, createContext } from "react";
import Context from "./component/Context";
import { Container } from "./component/container";

import { Contente } from "./component/contente";
const ThemeContext = createContext(null);
export default function PageDeck() {
  console.log("refrech page")
  return (
    <div>
      <Context>
        <Container><Contente/></Container>
      </Context>
    </div>
  );
}
