/* eslint-disable @next/next/no-img-element */
import { TypeCard } from "@/app/component/TypeCard";
import { BanlistInfo } from "./BanlistInfo";
//afficher les informations qui existe sur tout les types de carte
export function UniversalCardInfo({card, color}) {
    const archeType = card.archetype ? (
      <a href={`../cards?archetype=${card.archetype}`} className="my-1 text-sm  text-center md:text-base">
        Archetype : {card.archetype}
      </a>
    ) : undefined;
    const image = card.card_images[0];
    
    console.log(card.banlist_info)
    const banlist = card.banlist_info ? (
      <BanlistInfo banlist={card.banlist_info} />
    ) : (
      <p >Unbanned in OCG and TCG</p>
    );
    return (
      <div className="w-full flex flex-col justify-center items-center sm:gap-4 sm:flex-row lg:w-1/3 lg:flex-col">
        <div className="w-2/3 sm:w-1/3 lg:w-full">
          <img className="m-auto" src={image.image_url} alt={card.name} />
        </div>
        <div className="w-2/3 mx-2 text-center sm:w-1/3 lg:w-full  ">
          <TypeCard color={color} text={card.type} />
          {archeType}
          {banlist}
        </div>
      </div>
    );
  };
