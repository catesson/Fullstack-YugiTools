import IconInfo from "@/app/component/IconInfo";

export function LevelRankLink({card}) {
    if (card.level) {
        let levelRankLink = card.frameType.toLowerCase() == "xyz" ? <IconInfo image="/images/rank.webp" text={card.level} /> :<IconInfo image="/images/level.webp" text={card.level} />;
        return levelRankLink
    }
    else if (card.linkval){
       return <p className="font-bold text-2xl">LINK-{card.linkval}</p>
    }
    else{
        return
    }

}