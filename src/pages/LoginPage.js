import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { baseUrl } from "../services/baseUrl"


function LoginPage() {

    const { setUser, storeToken, authenicateUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(false)
    const [currUser, setCurrUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCurrUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleLogin = (e) => {
        e.preventDefault()

        axios.post(baseUrl + '/auth/login', currUser)
            .then((results) => {
                storeToken(results.data.authToken)
                authenicateUser()
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }







    return (
        <div id="login-page">

            <form id="login-form" onSubmit={handleLogin}>
                Login
                <label>Email:
                    <input type='email' name='email' id="email" onChange={handleChange} />
                </label>
                <label>Password:
                    <input type='password' name='password' id="password" onChange={handleChange} />
                </label>
                <button type="submit">Login</button>


            </form>



        </div >
    )
}

export default LoginPage