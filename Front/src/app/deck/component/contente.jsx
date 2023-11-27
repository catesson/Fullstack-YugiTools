

import { useContext } from "react"
import { ThemeContext } from "./Context"
export function Contente(){
    const {color, setColor } = useContext(ThemeContext)
    console.log("refrech content")
    return <div>{color}
    <button onClick={() => setColor(color == "red" ? "black" : "red")}>change the color</button></div>
}