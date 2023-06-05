import { Link } from "react-router-dom"
import { useState } from "react"


function SawyerMath() {

    const [toggle, setToggle] = useState(false)



    const startGame = () => {
        setToggle(true)
        console.log('Pressing')
    }


    return (
        <div>

            <div>
                <h1>Math</h1>
            </div>
            <div id="math-buttons">
                <button className="button math-button">+ Addition</button>
                <button className="button math-button">- Subtraction</button>
                <button className="button math-button">* Multiplication</button>
                <button className="button math-button">/ Division</button>

            </div>


            {!toggle ?

                <div>
                    <button id="start-math-button" onClick={startGame}>GO</button>
                </div>


                : null}



        </div >
    )
}

export default SawyerMath