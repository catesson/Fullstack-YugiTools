'use client'

import { useContext } from "react";
import { SearchContext } from "./SearchContext";


 export function Paginate() {
    const {maxPage, currentPage, search, params} = useContext(SearchContext)

    const handelClickNext = (event) => {
    event.preventDefault();
    const nextPage = parseInt(currentPage) + 1;
    params.set("page", nextPage);
    search();
  };
  const handelClickPrev = (event) => {
    event.preventDefault();
    const prevPage = parseInt(currentPage) - 1;
    params.set("page", prevPage);
    search();
  };
  const handelClickFirstPage = (event) => {
    event.preventDefault()
    params.set("page", 1);
    search();
  };
  const handelClickLastPage = (event) => {
    event.preventDefault()
    params.set("page", maxPage);
    search();
  };
    return (
      <div className="flex flex-nowrap justify-center gap-4">
        <button onClick={handelClickFirstPage} className={currentPage == 1 ? 'hidden' : ''}>First Page</button>
        <button onClick={handelClickPrev} className={currentPage == 1 ? 'hidden' : ''}>prev</button>
        <h1>{currentPage}</h1>
        <button onClick={handelClickNext} className={maxPage <= currentPage ? 'hidden' : ''}>next</button>
        <button onClick={handelClickLastPage} className={maxPage == currentPage ? 'hidden' : ''}>Last Page</button>
      </div>
    );
  };