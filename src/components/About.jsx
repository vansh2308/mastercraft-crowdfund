
import { useEffect } from "react"
import rewardData from "./../rewardData.json"
import RewardTile from "./RewardTile";


export default function About() {
    useEffect(() => {
        console.log(rewardData);
    }, [])

    return (
        <div className="w-full h-fit bg-white border-greywhite border-[1px] rounded-lg min-h-40 p-10">
            <h3 className="font-bold text-lg mb-7">About this Project</h3>
            <p className="text-dgrey font-light text-sm leading-6 pb-4">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. <br /><br /> Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>

            {
                rewardData.slice(1, ).map((reward, key) => {
                    return(
                        <RewardTile reward={reward} key={key} />
                    )
                })
            }

        </div>
    )
}