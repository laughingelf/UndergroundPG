import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

function Navbar() {

    const { logOutUser } = useContext(AuthContext)

    const getToken = () => {
        return localStorage.getItem('authToken')
    }


    return (
        <div id="navbar">

            {getToken() ?

                <>
                    <div className="nav-links">
                        <Link className="button" to='/'>Home</Link>
                    </div>
                    <div className="nav-links">
                        <Link className="button" to='/sawyers-playground'>Sawyer's Playground</Link>
                    </div>
                    <div className="nav-links">
                        <button className="button" onClick={logOutUser}>Logout</button>
                    </div>

                </>


                :

                <>
                    <div className="nav-links">
                        <Link className="button" to='/auth/login'>Login</Link>
                    </div>
                    <div className="nav-links">
                        <Link className="button" to='/auth/signup'>SignUp</Link>
                    </div>

                </>


            }

        </div>
    )
}

export default Navbar