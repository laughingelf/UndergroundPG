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

        if (storedToken) {
            get('/auth/verify')
                .then((results) => {
                    const resUser = results.data
                    setUser(resUser)
                    console.log('setting user', resUser)

                })
                .catch((err) => {
                    console.log(err)
                    setUser(null)
                    removeToken()
                })
        } else {
            console.log('no token!!!!!!!!!!!!!')
            setUser(null)
            removeToken()
        }
    }

    const logOutUser = () => {
        removeToken()
        // authenicateUser()
        navigate('/auth/login')
    }


    useEffect(() => {
        authenicateUser()
    }, [])


    return (
        <AuthContext.Provider value={{ storeToken, user, setUser, authenicateUser, logOutUser }}>
            {children}
        </AuthContext.Provider>
    )


}

export { AuthContext, AuthContextProvider }