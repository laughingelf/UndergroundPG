
import { useState, useEffect } from "react"


function SawyerMath() {

    const [toggle, setToggle] = useState(false)
    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)
    const [answer, setAnswer] = useState(0)
    const [score, setScore] = useState(0)
    const [functions, setFunctions] = useState('+')

    let solution = 0


    const getRandomNumbers = (max) => {
        return Math.floor(Math.random() * max)
    }


    const startGame = () => {
        setToggle(true)
    }

    const handleFunctions = (e) => {
        console.log(e.target.innerHTML)
        switch (e.target.innerHTML) {
            case '+':
                setFunctions('+')
                break;
            case '-':
                setFunctions('-')
                break;
            case '*':
                setFunctions('*')
                break;

        }
    }

    const handleAnswer = (e) => {
        setAnswer(e.target.value)
    }


    const submitAnswer = (e) => {
        e.preventDefault()
        switch (functions) {
            case '+':
                solution = firstNum + secondNum
                break;
            case '-':
                solution = firstNum - secondNum
                break;
            case '*':
                solution = firstNum * secondNum
                break;
        }

        if (solution == answer) {
            setScore(score + 1)
            e.target.reset()
        }
    }


    useEffect(() => {
        setFirstNum(getRandomNumbers(5))
        setSecondNum(getRandomNumbers(6))

    }, [score])


    return (
        <div>

            <div>
                <h1>Math</h1>
            </div>
            <div id="math-buttons">
                <button className="button math-button" onClick={handleFunctions}>+</button>
                <button className="button math-button" onClick={handleFunctions}>-</button>
                <button className="button math-button" onClick={handleFunctions}>*</button>

            </div>


            {!toggle ?

                <div>
                    <button id="start-math-button" onClick={startGame}>GO</button>
                </div>


                :

                <div>
                    <form onSubmit={submitAnswer}>
                        <h1>{firstNum} {functions} {secondNum}</h1>
                        <input type='number' id='mathAnswer' onChange={handleAnswer} />
                        <br />
                        <button type="submit" className="math-submit">Submit</button>


                        <h1>Score: {score}</h1>
                    </form>
                </div>

            }






        </div >
    )
}

export default SawyerMath