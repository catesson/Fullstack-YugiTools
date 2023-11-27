import { Extension } from "@/app/component/Extension";
import { Statistic } from "./Statistic";
import IconInfo from "@/app/component/IconInfo";
import { LevelRankLink } from "./LevelRank";

export function SpecialCardInfo({card}){
  const type = card.type.toLowerCase();
    const pClass =
      " text-xs mt-5 py-3 px-8 text-justify md:text-sm lg:text-base";
    //valeur des information pour toutes les cartes par défaut
    let cardInfos = (
      <div>
        <div className="text-center">
          <h1 >{card.name}</h1>
          <p className={pClass}>{card.desc}</p>
        </div>
        <Extension card={card} />
      </div>
    );

    // modifie la valeur des données retourner par défaut pour les adapter aux cartes monstres
    if (type.includes("monster")) {
      cardInfos = (
        <div>
          <div className="w-full flex justify-around py-5 lg:justify-between">
           <LevelRankLink card={card} />
            <IconInfo
              image={`/images/${card.attribute.toLowerCase()}.png`}
              text={card.attribute}
            />
          </div>
          <div className="text-center">
            <h1 >{card.name}</h1>
            <h2 >Type : {card.race}</h2>
            <p
              className={pClass}
              dangerouslySetInnerHTML={{
                __html: card.desc.replace(/\r\n/g, "<br>"),
              }}
            ></p>
          </div>
          <Statistic card={card} />
          <Extension card={card} />
        </div>
      );
    }
    // modifie la valeur des données retourner par défaut pour les adapter aux cartes magies et pièges
    else if (type.includes("spell") || type.includes("trap")) {
      const raceOfCard =
        card.race.toLowerCase() == "normal" ? (
          <p className={pClass + " font-bold"}>{"[ " + card.race + " " + card.type + " ]"}</p>
        ) : (
          <IconInfo
            image={`/images/${card.race.toLowerCase()}.webp`}
            text={"[ " + card.race + " " + card.type + " ]"}
          />
        );
      cardInfos = (
        <div>
          <div className="w-full flex justify-center mb-5">{raceOfCard}</div>
          <div className="text-center">
            <h1 >{card.name}</h1>
            <p className={pClass}>{card.desc}</p>
          </div>
          <Extension card={card} />
        </div>
      );
    }
    return <div className="w-full bg-opacity-20 bg-amber-800 rounded-3xl px-3  py-5 lg:w-2/3 lg:p-16">{cardInfos}</div>;
  };