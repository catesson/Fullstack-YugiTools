import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";

export function TrapSearch({ className, register }) {
  const { trapRace } = useContext(SearchContext);

  const SelectTrapRace = trapRace.map((element, index) => {
    return (
      <option key={index} value={`${element._id}`}>
        {element._id}
      </option>
    );
  });

  return (
    <div className={`${className} trapSearch w-10/12 lg:w-2/4 sm:w-full`}>
      <div className="label-input">
        <label htmlFor="Trap.race">Trap Type</label>
        <select id="Trap.race"
        {...register("Trap.race")}>
          <option value=""></option>
          {SelectTrapRace}
        </select>
      </div>
    </div>
  );
}
