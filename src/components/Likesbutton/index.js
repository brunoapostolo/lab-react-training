import { useState } from "react";

function LikeButton (){
    const colors =['purple','blue','green','yellow','orange','red'];

    const [indexColor,setColor] = useState(0)

    function changeColor(e){
        e.preventDefault();
        if(indexColor>5){
            setColor(0)
        }
        else{
            setColor(indexColor+1)
        }

    }
    let cor = colors[indexColor]

    return (
        <button style={{backgroundColor:`${cor}`, height:"50px", width:"60px", margin:"50px"}} onClick={changeColor}>Like </button>
    )

}
export default LikeButton