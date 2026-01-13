import { Heart } from "lucide-react";
// import { useState } from "react";
export const LikeButton = () =>{
    // const [clickLike, setClickLike] = useState(false);
    // const handleClickLike = () =>{

    // }
    return(
        <div className="bg-slate-50 rounded-full p-2 text-slate-800 cursor-pointer transition duration-300 hover:bg-slate-600 w-fit h-fit">
            {<Heart/>}
        </div>
    )
}