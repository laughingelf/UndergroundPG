import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../services/authService"


const AuthContext = createContext()

function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const storeToken = (token) => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = () => {
        localStorage.removeItem("authToken")
    }

    const authenicateUser = () => {
        const storedToken = localStorage.getItem('authToken')
        console.log('storedToken', storedToken)

        if (storedToken) {
            get('/auth/verify')
                .then((results) => {
                    const user = results.data
                    console.log('The response: ', user)
                })
        }
    }


    const logOutUser = () => {
        removeToken()
        authenicateUser()
        navigate('/auth/login')
    }



    return (
        <AuthContext.Provider value={{ storeToken, user, setUser, authenicateUser, logOutUser }}>
            {children}
        </AuthContext.Provider>
    )


}

export { AuthContext, AuthContextProvider }