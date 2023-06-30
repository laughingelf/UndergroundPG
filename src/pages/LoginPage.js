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
                setUser(results.data.user)
                authenicateUser()
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }







    return (
        <div id="login-page" className="min-h-screen flex items-center justify-center bg-gray-400 bg-opacity-60">
            <form id="login-form" onSubmit={handleLogin} className="bg-white shadow-lg rounded px-8 pt-6 pb-8">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#15B7B9] hover:bg-[#15B7d4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
        </div>

    )
}

export default LoginPage