import BackProjectForm from "./BackProjectForm";
import Thanks from "./Thanks";


export default function LightBox(){
    return(
        <div className="w-screen h-screen fixed top-0 left-0 pb-12 flex overflow-y-scroll justify-center bg-dgrey/50 z-40 pt-40">
            {/* <BackProjectForm /> */}
            <Thanks />


        </div>
    )
}