import { Link } from "react-router-dom"

function SawyersPlayground() {
    return (

        <div className="full-height flex flex-col items-center justify-center gap-6 mt-10 mb-10">
            <div className="bg-transparent p-4">
                <Link to='/sawyers-playground/math'>
                    <img src="./images/Math-bg.png" alt="math" />
                </Link>
            </div>
            <div className="bg-transparent p-4">
                <Link to='/sawyers-playground/letters'>
                    <img src="./images/Letters-bg.png" alt="letters" />
                </Link>
            </div>
            <div className="bg-transparent p-4 ">
                <Link to='/sawyers-playground/words'>
                    <img src="./images/Words-bg.png" alt="words" />
                </Link>
            </div>
        </div>







    )
}

export default SawyersPlayground


{/* <div id="sawyer-whole">
<div id="sawyer-header">
    <h1>Saywer's Playground</h1>
</div>
<div className="sawyer-activities" id="math">
    <Link to='/sawyers-playground/math'>
        <img src="./images/Math-bg.png" alt="math" />
    </Link>
</div>
<div className="sawyer-activities">
    <Link to='/sawyers-playground/letters'>
        <img src="./images/Letters-bg.png" alt="letters" />
    </Link>
</div>
<div className="sawyer-activities">
    <Link to='/sawyers-playground/words'>
        <img src="./images/Words-bg.png" alt="words" />
    </Link>
</div>

</div> */}