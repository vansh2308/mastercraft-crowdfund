

export default function Stats(){
    return(
        <div className="w-full h-fit bg-white border-greywhite border-[1px] rounded-lg min-h-40 p-10">
            <div className="w-full flex gap-10 justify-start">
                <div className="w-1/3 border-r-[2px] border-greywhite">
                    <h2 className="text-3xl font-bold">$89,914</h2>
                    <span className="text-sm text-lgrey"> of $100,000 backed </span>
                </div>
                <div className="w-1/3 border-r-[2px] border-greywhite">
                    <h2 className="text-3xl font-bold">5,007</h2>
                    <span className="text-sm text-lgrey">total backers </span>
                </div>
                <div className="w-1/3">
                    <h2 className="text-3xl font-bold">56</h2>
                    <span className="text-sm text-lgrey">days left</span>
                </div>
            </div>

            <div className="w-full h-2 mt-8 bg-greywhite rounded-full">
                <div className="w-1/3 h-full bg-lgreen rounded-full" />
            </div>
        
        </div>
    )
}