
import { useEffect, useState } from "react";
import logoMastercraft from "./../assets/logo-mastercraft.svg"
import { FaBookmark } from "react-icons/fa6";

export default function Hero() {
    const [bookMarked, setBookmarked] = useState(false)

    return (
        <div className="w-full bg-white h-max border-greywhite rounded-md border-[1px] relative overflow-visible p-10 text-center">
            <img src={logoMastercraft} className="w-14 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="logo-mc" />

            <h1 className="font-bold text-2xl mt-4 mb-2">Mastercraft Bamboo Monitor Riser</h1>
            <span className="font-normal text-dgrey text-sm">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</span>
            <div className="flex justify-between w-full mt-9">
                <button className="rounded-full py-3 px-8 bg-green text-white font-medium text-sm">
                    Back this project
                </button>

                <button
                    className="flex gap-3 items-center rounded-full bg-greywhite text-dgrey text-sm font-medium "
                    onClick={() => setBookmarked(!bookMarked)}
                    style={bookMarked ? { backgroundColor: "#00c1ae2e", color: "#0f7c72" } : {}}
                >
                    <div
                        className="h-full text-lgrey aspect-square p-3 bg-dgrey rounded-full flex items-center justify-center"
                        style={bookMarked ? { backgroundColor: "#0f7c72", color: "#fff" } : {}}
                    >
                        <FaBookmark />
                    </div>
                    <span className="pr-6 text-xs font-medium"> { bookMarked ? "Bookmarked" : "Bookmark" } </span>
                </button>

            </div>
        </div>
    )
}