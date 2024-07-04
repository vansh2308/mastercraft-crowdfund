
import { useEffect } from "react"

export default function RewardTile({ reward }){
    return(
        <div 
        className="w-full border-[1px] border-lgrey/40 h-fit p-7 mt-7 rounded-md"
        style={ !reward.qtyLeft ? {opacity: "0.5" } : {} }
        >
            <div className="flex w-full justify-between items-baseline">
                <h4 className="font-bold text-md "> {reward.name} </h4>
                <p className="text-xs font-medium  text-lgreen">Pledge ${reward.minPrice} or more</p>
            </div>

            <p className="mt-4 text-xs text-lgrey leading-6 font-normal"> {reward.details} </p>

            <div className="w-full flex justify-between mt-7 items-center">
                <div className="flex gap-2 ">
                    <h2 className="font-bold text-3xl align-middle text-black">{reward.qtyLeft}</h2>
                    <span className="text-xs text-lgrey">left</span>
                </div>

                <button 
                className="bg-lgreen px-6 py-3 rounded-full text-xs text-white font-medium hover:bg-green"
                style={ !reward.qtyLeft ? {backgroundColor: "#707070"} : {} }
                >
                    { reward.qtyLeft ?  "Select Reward": "Out of Stock"}
                </button>

            </div>

        </div>
    )
}