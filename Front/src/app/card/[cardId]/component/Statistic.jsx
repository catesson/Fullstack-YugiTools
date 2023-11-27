export function Statistic({card}){
    const statistic = card.def ?  <div className="w-full  flex justify-around">
          <p className="my-1 font-bold ">ATK : {card.atk}</p>
          <p className="my-1 font-bold " >DEF : {card.def}</p>
        </div> : <p className="text-center my-1 font-bold ">ATK : {card.atk}</p>;
    return statistic
}