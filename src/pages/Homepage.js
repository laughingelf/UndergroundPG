import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth.context"



function Homepage() {

    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        console.log('users', user)
    }, [])

    return (
        <div>

            <div id="logo">
                <img src="./images/Underground-pg-fafi-offwhite.png" alt="logo" />


            </div>

        </div>
    )
}

export default Homepage