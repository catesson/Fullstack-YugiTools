/* eslint-disable @next/next/no-img-element */


export default function IconInfo({image, text}){
    return (
        <div className="flex items-center">
            <img className="w-8 h-8 mr-3"src={`${image}`} alt={text} />
            <p className="font-bold">{text}</p>
        </div>
    )
}