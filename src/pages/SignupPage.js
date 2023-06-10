import { useState, useContext } from "react"
import { baseUrl } from "../services/baseUrl"
import axios from "axios"
import { AuthContext } from "../context/auth.context"
import { useNavigate } from "react-router-dom"

function SignupPage() {

    const { storeToken, setUser } = useContext(AuthContext)

    const navigate = useNavigate()


    const [newUser, setNewUser] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(baseUrl + '/auth/signup', newUser)
            .then((results) => {
                storeToken(results.data.authToken)
                setUser(results.data.user)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div id="login-page">


            <form id="login-form" onSubmit={handleSubmit} >
                Sign Up
                <label>Email:
                    <input type='email' name='email' id="email" onChange={handleChange} />
                </label>
                <label>UserName:
                    <input type='text' name='username' id="username" onChange={handleChange} />
                </label>
                <label>Password:
                    <input type='password' name='password' id="password" onChange={handleChange} />
                </label>
                <button type="submit">Sign Up</button>


            </form>


        </div>
    )
}

export default SignupPage