
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

    const imDone = () => {
        console.log('im done')
    }


    useEffect(() => {
        setFirstNum(getRandomNumbers(5))
        setSecondNum(getRandomNumbers(6))

    }, [score])


    return (
        <div className="min-h-screen">

            <div>
                <h1>Math Practice</h1>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-2 px-6 rounded border border-black shadow-xl" onClick={handleFunctions}>
                    +
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-2 px-6 rounded mx-4 border border-black shadow-xl" onClick={handleFunctions}>
                    -
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600text-white font-bold text-lg py-2 px-6 rounded border border-black shadow-xl" onClick={handleFunctions}>
                    *
                </button>
            </div>







            {!toggle ?

                <div className="mx-auto flex items-center justify-center mt-8">
                    <button id="start-math-button" className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-2 px-6 rounded-lg border border-black shadow-xl flex items-center justify-center space-x-2 h-full" onClick={startGame}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <rect width="20" height="10" rx="2" ry="2" fill="white" />
                            <rect width="20" height="2" rx="1" ry="1" fill="black" />
                            <rect width="2" height="10" rx="1" ry="1" transform="translate(9 5)" fill="black" />
                            <rect width="2" height="10" rx="1" ry="1" transform="translate(13 5)" fill="black" />
                        </svg>
                        <span>Start</span>
                    </button>
                </div>





                :
                <div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-4/5 sm:w-3/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mx-auto flex flex-col justify-center items-center mt-8">
                        <form onSubmit={submitAnswer} className="flex flex-col space-y-4 items-center">
                            <h1 className="text-xl font-bold">{firstNum} {functions} {secondNum}</h1>
                            <input type='number' id='mathAnswer' onChange={handleAnswer} className="border border-gray-300 rounded-lg p-2 w-24" />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                                Submit
                            </button>
                            <button onClick={imDone} type="button" className="bg-green-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg">
                                Im Done
                            </button>
                            <h1 className="text-lg font-semibold">Score: {score}</h1>
                        </form>
                    </div>


                </div>



            }






        </div >
    )
}

export default SawyerMath