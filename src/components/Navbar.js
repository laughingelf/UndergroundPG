import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div id="navbar">
            <div className="nav-links">
                <Link className="button" to='/'>Home</Link>
            </div>
            <div className="nav-links">
                <Link className="button" to='/sawyers-playground'>Sawyer's Playground</Link>
            </div>

        </div>
    )
}

export default Navbar