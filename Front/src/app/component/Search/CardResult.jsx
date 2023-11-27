"use client";

import { useContext } from "react";
import LittleCard from "../LittleCard";
import { SearchContext } from "./SearchContext";
import { Paginate } from "./paginate";


//affiche la liste de toute les carte ou des cartes recherchés
export function CardResult() {
  
  const {allCards} = useContext(SearchContext)
  if (allCards.length != 0){//affiche toutes les carte retourné
  const cards = allCards != [] ? allCards.map((card) => {
    return (
      <LittleCard
        name={card.name}
        image={card.card_images[0]}
        key={card.id}
        id={card.id}
      />
    );
  }) : <p>test</p>;


  return (
    <div className="flex justify-center flex-col">
      
      <div className="flex flex-wrap justify-evenly gap-y-5">{cards}</div>
      <Paginate />
    </div>
  );}
  else{
  //   return (<div className="flex justify-center flex-col">
  //   <div className="flex flex-wrap justify-evenly gap-y-5"><p>Find no cards</p></div>

  // </div>)
  }
}
