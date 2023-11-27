"use client";
import { useState } from "react";
export function DieRoll() {
  // Générer un nombre aléatoire entre 0 et 1
  const [die, setDie] = useState("");
  const handelClickDie = () => {
    setDie(Math.floor(Math.random() * 6) + 1)
    
  };

  // Si le nombre aléatoire est inférieur à 0.5, c'est pile, sinon c'est face

  return (
    <div className="flex flex-col">
      <button onClick={handelClickDie}>Lancer le Dé</button>
      <p>{die}</p>
    </div>
  );
}
