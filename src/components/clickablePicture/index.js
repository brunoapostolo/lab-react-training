import { useState } from "react"
import img from "../../assets/images/maxence.png"
import imgClicked from "../../assets/images/maxence-glasses.png"

function ClickablePicture (){
    const [binary, setBinary] = useState(true)
    const [imagem, setImagem] = useState(img)

    function changeImage(e){
        e.preventDefault()
        setBinary(!binary)
        if (binary===true){
            setImagem(imgClicked)
        }
        else {
            setImagem(img)
        }
    }
    return (
        <div>
            <img src={imagem} onClick={changeImage}/>

        </div>
    )
}
export default ClickablePicture