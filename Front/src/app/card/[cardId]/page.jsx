/* eslint-disable @next/next/no-img-element */
import { getCard } from "../../../API/callAPI";

import { UniversalCardInfo } from "./component/UniversalCardInfo";
import { SpecialCardInfo } from "./component/SpecialCardInfo";

export default async function pageCardId({ params }) {
  const card = await getCard(params.cardId);
  let color = null;
  
  // donne la couleur à carré réprésentant la carte 
  switch (card.frameType.toLowerCase()) {
    case "skill":
      color = "#081971";
      break;
    case "link":
      color = "#0021CF";
      break;
    case "fusion":
      color = "#7000AD";
      break;
    case "xyz":
      color = "#242424";
      break;
    case "ritual":
      color = "#199EE1";
      break;
    case "synchro":
      color = "#E0E0E0";
      break;
    case "effect":
      color = "#C0730A";
      break;
    case "normal":
      color = "#E0DD03";
      break;
    case "trap":
      color = "#81044a";
      break;
    case "spell":
      color = "#007504";
      break;
    case "effect_pendulum":
      color = "linear-gradient(#C0730A, #007504)";
      break;
    case "normal_pendulum":
      color = "linear-gradient(#E0DD03, #007504)";
      break;
    case "xyz_pendulum":
      color = "linear-gradient(#242424, #007504)";
      break;
    case "fusion_pendulum":
      color = "linear-gradient(#7000AD, #007504)";
      break;
    case "synchro_pendulum":
      color = "linear-gradient(#E0E0E0, #007504)";
      break;
  }

  
  
  

  return (
    <div className="w-11/12 max-w-screen-2xl m-auto flex flex-col gap-6 items-center lg:flex-row h-auto mt-5 ">
     <UniversalCardInfo card={card} color={color}/>
     <SpecialCardInfo card={card} />
    </div>
  );
}
