

import { FaCheck } from "react-icons/fa";
import { setLightBoxDisplay } from "../features/LightBoxDisplaySlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setChoice } from "../features/choiceSlice";


export default function Thanks() {
    const dispatch = useDispatch()

    return (
        <div className="w-[35%] h-fit bg-white border-greywhite flex flex-col gap-4 justify-center items-center rounded-md border-[1px] p-10">
            <div className="flex justify-center items-center text-[2rem] text-white rounded-full bg-lgreen p-5">
                <FaCheck />
            </div>
            <h3 className="text-xl mt-4 text-black font-bold ">Thanks for your support!</h3>
            <p className="text-center px-2 text-sm leading-6 text-lgrey font-normal">
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
            </p>

            <Link className="bg-lgreen hover:bg-green px-6 py-2 text-white text-sm font-medium rounded-full mt-2"
                to = "/"
                onClick={() => {
                    dispatch(setChoice({idx: 0, pledgeAmt: 0}))
                    dispatch(setLightBoxDisplay(false))
                }}
            >
                Got it!
            </Link>


        </div>
    )
}