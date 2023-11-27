import { useState, useEffect } from "react";
import hotkeys from "hotkeys-js";
import "@/app/styles/globals.css"

export function BtnCalculator({ value, onClick, keyCode, className }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    hotkeys(keyCode, (event) => {
        event.preventDefault()

        //onClick correspond au handelClickCalculatorBtn de page.jsx
        onClick()
      setActive(true);
      const timer = setTimeout(() => {
        setActive(false);
        
      }, 100);
      return () => {clearTimeout(timer); hotkeys.unbind(keyCode)}
    });
  });
  return (
    <button
    data-test-id={"BtnCalculator"+value}
      className={`btnCalculator ${ active ? "btnCalculator-active" : ""} ${className}` }
      //onClick correspond au handelClickCalculatorBtn de page.jsx
      onClick={onClick}
      
    >
      {value}
    </button>
  );
}
