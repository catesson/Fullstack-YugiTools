

export function TypeCard({color, text}){
    return (
        <div className="flex flex-row justify-center my-4">
            <div className="w-4 h-5 md:w-5 md:h-6 rounded-md" style={{background : color}}></div>
            <p className="ml-3 ">{text}</p>
        </div>
    )
}