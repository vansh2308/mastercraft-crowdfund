import BackProjectForm from "./BackProjectForm";
import Thanks from "./Thanks";
import { Outlet } from "react-router-dom";


export default function LightBox(){
    return(
        <div className="w-screen h-screen fixed top-0 left-0 pb-12 flex overflow-y-scroll justify-center bg-dgrey/50 z-40 pt-40">

            <Outlet />
            {/* <BackProjectForm /> */}
            {/* <Thanks /> */}


        </div>
    )
}