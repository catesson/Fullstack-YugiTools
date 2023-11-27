

//consulte la banlist et en affiche le contenu
export function BanlistInfo({banlist}) {
  console.log(banlist);
      
    const banOcg = banlist.ban_ocg ? (
      <p > OCG : {banlist.ban_ocg}</p>
    ) : (
      <p > OCG : unbanned </p>
    );
    const banTcg = banlist.ban_tcg ? (
      <p > TCG : {banlist.ban_tcg}</p>
    ) : (
      <p > OCG : unbanned </p>
    );
    return (
      <div>
        <h4 className="text-base my-1 text-center md:text-lg font-bold">
          BANLIST
        </h4>
        {banOcg}
        {banTcg}
      </div>
    );
  };