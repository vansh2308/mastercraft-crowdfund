
import { IoClose } from "react-icons/io5";
import rewardData from "./../rewardData.json"
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setLightBoxDisplay } from "../features/LightBoxDisplaySlice";

import { Link } from "react-router-dom";

export default function BackProjectForm() {
    const dispatch = useDispatch()

    return (
        <div className="w-[45%] h-fit bg-white border-greywhite rounded-md border-[1px] py-6 px-10">
            <Link className="float-right "
                to = "/"
                onClick={() => dispatch(setLightBoxDisplay(false))}
            >
                <IoClose className="text-dgrey text-[1.4rem] aspect-square" />
            </Link>

            <h3 className="font-bold text-2xl text-black mt-12">Back this project</h3>
            <p className="text-lgrey font-normal text-sm my-6">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <form className="">
                {
                    rewardData.map((reward, key) => {
                        console.log(key)
                        return (
                            <RewardOption reward={reward} key={key} idx={key} />
                        )
                    })
                }
            </form>

        </div>
    )
}


function RewardOption({ reward, idx }) {

    const [checked, setChecked] = useState(0);


    return (
        <div className="w-full h-fit border-[1px] border-lgrey/40 rounded-md mt-7 "
            style={reward.qtyLeft <= 0 ? { opacity: "0.5", pointerEvents: "none" } : checked == idx ? { border: "2px solid #3cb3aa" } : {}}>

            <div className="w-full h-fit p-7 flex gap-6 items-start" >

                <button
                    className="p-[10px] mt-1 relative radiobtn aspect-square rounded-full border-[1px] border-lgrey/60">
                    <div
                        className="w-[0.9rem] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lgreen rounded-full hidden"
                        style={checked == idx ? { display: "block" } : {}}
                    />
                </button>



                <div className="w-full h-fit">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-baseline">
                            <h3 className="text-md font-bold text-black"> {reward.name} </h3>

                            {
                                reward.minPrice > 0 &&
                                <span className="text-lgreen text-xs font-medium"> Pledge ${reward.minPrice} or more  </span>
                            }

                        </div>

                        {
                            reward.qtyLeft &&
                            <div className="flex text-lgrey font-normal items-baseline gap-2">
                                <h3 className="text-md font-bold text-black"> {reward.qtyLeft} </h3> <span className="text-xs"> left </span>
                            </div>

                        }
                    </div>

                    <p className="mt-4 text-xs text-lgrey leading-6 font-normal">  {reward.details} </p>

                </div>


            </div>


            {
                checked == idx &&
                <div className="w-full h-fit p-7 border-t-[2px] border-lgrey/20 flex justify-between items-center">
                    <span className="text-lgrey text-xs font-normal"> Enter your Pledge</span>
                    <div className="flex gap-3">
                        <div className="flex gap-2 justify-center items-center border-[0.5px] border-lgreen rounded-full px-4 py-2">
                            <span className="text-lgrey font-medium text-xs">$</span>
                            <input type="text" placeholder={reward.minPrice} className="w-8 text-center focus:outline-none text-xs font-semibold text-black" />
                        </div>

                        <Link  to="/thanks"
                            className="px-4 py-2 bg-lgreen hover:bg-green text-xs font-semibold text-white rounded-full"   
                        >
                            Continue
                        </Link>


                    </div>

                </div>
            }
        </div >

    )
}