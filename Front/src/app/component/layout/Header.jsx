import { Nav } from "./Nav"
import { ProfilBtn } from "./ConnectionBtn"
import { ConnectModal } from "../userConnect_sign/ConnectModal"
import { useState } from "react"
import { set } from "react-hook-form"
export function Header(){
    //variable pour afficher ou non la modale de connection.
    const [visibility, setVisibility] = useState(false)
    const handleClickVisibility = () => {
        setVisibility(true)
    }
    const handleClickNotVisibility = () => {
        setVisibility(false)
    }
    return <header className="w-full bg-red-900 flex justify-evenly sm:justify-center sm:items-center items-start " >
        <Nav />

        <div className="h-14 flex items-center" onClick={handleClickVisibility}><ProfilBtn /></div>
        <ConnectModal visibility={visibility} setHidden={handleClickNotVisibility}/>
    </header>
}