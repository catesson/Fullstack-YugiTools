
import { Contente } from "./contente"



export function Container ({children}){
    console.log("refrech container")
    return <div> 
        {children}
    </div>
}