"use client";

import * as React from "react";
import { useState } from "react";

export function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };
  const NavBtnContent = () => {
    if (navOpen) {
      return (
        <svg
          
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
          ></path>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
          ></path>
        </svg>
      );
    }
  };
  return (
    <nav className="flex items-center flex-col sm:flex-row justify-center h-min">
      <button onClick={handleNavClick} className={"h-14 w-6 sm:hidden"}>
        {NavBtnContent()}
      </button>
      <ul
        className={`flex flex-col myTransition origin-top ${
          navOpen ? "h-56" : "h-0"
        } sm:flex-row sm:h-auto`}
      >
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/cards"
          >
            Cards
          </a>
        </li>
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/deck"
          >
            Deck
          </a>
        </li>
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/lp-counter"
          >
            LP Counter
          </a>
        </li>
      </ul>
    </nav>
  );
}
