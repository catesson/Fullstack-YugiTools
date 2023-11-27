import { useContext } from "react"

export function InputCalculator({value}){

    return (
        <div className="w-40 h-12 md:w-52 md:h-20 border-4 flex items-center justify-center border-red-900 rounded-3xl ">
        <p data-test-id="inputCalculator" className="text-3xl md:text-5xl text-red-900">{value}</p>
      </div>
    )
}