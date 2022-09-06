import dicenone from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"
import { useState } from "react"

function Dice(){
    const diceArray = [dicenone ,dice1, dice2, dice3, dice4, dice5, dice6]

    const [dice, SetDice] = useState(0)
    function trowDice (e){
        let timer=0
        e.preventDefault();
        SetDice(0)
        setInterval(()=>{
            timer++
            if (timer===3){
                clearInterval()
                SetDice(Math.floor(Math.random()*(diceArray.length-1))+1)

            }
        },1000)
        
    }

    let dado = diceArray[dice]

    return (
        <img style={{height:"200px", margin:"200px"}} src={dado} onClick={trowDice}/>
    )

}
export default Dice