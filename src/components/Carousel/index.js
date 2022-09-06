import { useState } from "react"

function Carousel({images}){
    
    const [index, SetIndex] = useState(0)

    function handleLeft(e){
        e.preventDefault()
        if(index>0){
            SetIndex(index-1)
        }
    }
    function handleRight (e){
        e.preventDefault()
        if (index<images.length-1){
            SetIndex(index+1)
        }

    }
    let sourceImages = images[index]


    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <button onClick={handleLeft}>Left</button>
            <img src={sourceImages}/>
            <button onClick={handleRight}>Right</button>
        </div>

    )
}
export default Carousel