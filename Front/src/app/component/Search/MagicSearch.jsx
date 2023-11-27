
import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";


export function MagicSearch({className, register}) {
    const {magicRace} = useContext(SearchContext)
    const SelectMagicRace = magicRace.map((element, index) => {
      return (<option key={index} value={`${element._id}`}>{element._id}</option>)
    })
   
  return (
    <div className={`${className} magicSearch`}>
      <div className="label-input">
        <label htmlFor="Spell.race">Spell Type</label>
      <select
      id="Spell.race"
        {...register("Spell.race")}
      >
        <option value=""></option>
        {SelectMagicRace}
      </select>
      </div>
    
    </div>
  );
}
