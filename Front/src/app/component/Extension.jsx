export function  Extension({card }) {
    if (card.card_sets) {
      const allExtension = card.card_sets.map((extention, index) => {
        const nom = extention.set_name ? extention.set_name : "no data";
        const code = extention.set_code ? extention.set_code : "no data";
        const rarity = extention.set_rarity ? extention.set_rarity : "no data";
        const price = extention.set_price ? extention.set_price : "no data";
        const tdClasse = "text-xs bg-white h-9 px-2 lg:text-sm 2xl:text-base";
        return (
          <tr key={index} className="border-solid border-b-2 border-gray-400">
            <td className={tdClasse}>{nom}</td>
            <td className={tdClasse}>{code}</td>
            <td className={tdClasse}>{rarity}</td>
            <td className={"whitespace-nowrap " + tdClasse}>{price + " €"}</td>
          </tr>
        );
      });

      return (
        <div className="rounded-lg overflow-hidden mt-5">
          <table className="w-full text-center  border-solid border-4 border-collapse border-red-900 text-sm border-spacing-5">
            <thead>
              <tr className=" bg-red-900 text-white h-9 ">
                <th className="p-0 h-9">Extension</th>
                <th className="p-0 h-9">Code</th>
                <th className="p-0 h-9">Rarity</th>
                <th className="p-0 h-9">Prix</th>
              </tr>
            </thead>
            <tbody>{allExtension}</tbody>
          </table>
        </div>
      );
    }
    return <p className="text-center text-red-900">This card is in 0 set</p>;
  };
