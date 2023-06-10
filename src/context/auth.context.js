import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


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
    }


    const logOutUser = () => {
        removeToken()
        authenicateUser()
        navigate('/auth/login')
    }

    return (
        <AuthContext.Provider value={{ storeToken, setUser, authenicateUser, logOutUser }}>
            {children}
        </AuthContext.Provider>
    )


}

export { AuthContext, AuthContextProvider }