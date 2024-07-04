
import { IoClose } from "react-icons/io5";
import rewardData from "./../rewardData.json"

export default function BackProjectForm() {
    return (
        <div className="w-[45%] h-fit bg-white border-greywhite rounded-md border-[1px] py-6 px-10 min-h-[120vh]">
            <button className="float-right ">
                <IoClose className="text-dgrey text-[1.4rem] aspect-square" />
            </button>

            <h3 className="font-bold text-2xl text-black mt-12">Back this project</h3>
            <p className="text-lgrey font-normal text-sm my-6">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <form className="">
                {
                    rewardData.map((reward, key) => {
                        return (
                            <RewardOption reward={reward} key={key} />
                        )
                    })
                }
            </form>

        </div>
    )
}


function RewardOption({ reward, key }) {
    return (
        <div
            className="w-full border-[1px] border-lgrey/40 h-fit p-7 mt-7 rounded-md flex gap-6 items-start"
            style={!reward.qtyLeft ? { opacity: "0.5", pointerEvents: "none" } : {}}
        >

            <input type="radio" className="mt-2" name="radioOption" />
            <div className="w-full h-fit">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-baseline">
                        <h3 className="text-md font-bold text-black"> {reward.name} </h3>
                        <span className="text-lgreen text-xs font-medium"> Pledge ${reward.minPrice} or more  </span>

                    </div>

                    {
                        reward.qtyLeft != "none" &&
                        <div className="flex text-lgrey font-normal items-baseline gap-2">
                            <h3 className="text-md font-bold text-black"> {reward.qtyLeft} </h3> <span className="text-xs"> left </span>
                        </div>

                    }
                </div>

                <p className="mt-4 text-xs text-lgrey leading-6 font-normal">  {reward.details} </p>

            </div>


        </div>
    )
}