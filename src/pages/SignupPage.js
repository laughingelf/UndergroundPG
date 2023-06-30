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
        <div id="login-page" className="min-h-screen flex items-center justify-center bg-gray-400 bg-opacity-60">
            <form id="login-form" onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
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
                    <label className="block mb-2" htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
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
                    Sign Up
                </button>
            </form>
        </div>

    )
}

export default SignupPage