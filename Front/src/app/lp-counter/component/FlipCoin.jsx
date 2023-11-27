"use client";
import { useState } from "react";
export function FlipCoin() {
  // Générer un nombre aléatoire entre 0 et 1
  const [flip, setFlip] = useState("");
  const handelClickCoin = () => {
    let randomValue = Math.random();
    if (randomValue < 0.5) {
      setFlip("pile");
    } else {
      setFlip("face");
    }
  };

  // Si le nombre aléatoire est inférieur à 0.5, c'est pile, sinon c'est face

  return (
    <div className="flex flex-col">
      <button onClick={handelClickCoin}>Lancer</button>
      <p>{flip}</p>
    </div>
  );
}
