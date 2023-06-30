import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"


function Profile() {

    const { user, setUser } = useContext(AuthContext)
    const [profileInfo, setProfileInfo] = useState(null)
    const [showEditProfile, setShowEditProfile] = useState(false)

    const updateProfileSubmit = (e) => {
        console.log('submitting')
        e.preventDefault()
        setShowEditProfile(false)

    }


    return (
        <>
            {user ? (
                <div className="min-h-screen flex flex-col ml-5 mt-4">
                    <div className="flex flex-row justify-between">
                        <img className="h-40" src="../images/punkskull.png" alt="default-img" />
                        <button className="w-40 h-12 mr-2 bg-yellow-500 hover:bg-yellow-600text-white font-bold text-lg py-2 px-6 rounded border border-black shadow-xl" onClick={(e) => setShowEditProfile(true)} >
                            Edit Profile
                        </button>
                    </div>
                    <h1>Hello {user.username}!</h1>
                    {user.firstName &&
                        user.lastName &&
                        user.birthdate &&
                        user.profilePic ? (
                        <div>
                            <h1>Name: {user.firstName}</h1>
                            <h1>Email: {user.email}</h1>
                            <h1>Birthdate: {user.birthdate}</h1>
                        </div>
                    ) : (
                        <button className="w-40 h-12 bg-yellow-500 hover:bg-yellow-600text-white font-bold text-lg py-2 px-6 rounded border border-black shadow-xl" onClick={(e) => setShowEditProfile(true)} >
                            Edit Profile
                        </button>
                    )}
                    {showEditProfile ? (
                        <div className="fixed inset-0 z-50 flex items-center justify-center ">
                            <div className="rounded-lg shadow-lg w-full max-w-md mx-auto bg-gray-400 bg-opacity-60">
                                <div className="p-6">
                                    <form onSubmit={updateProfileSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="firstName" className="block">First Name:</label>
                                            <input id="firstName" type="text" className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="lastName" className="block">Last Name:</label>
                                            <input id="lastName" type="text" className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block">Email:</label>
                                            <input id="email" type="email" className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="birthdate" className="block">Birthdate:</label>
                                            <input id="birthdate" type="date" className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                                        </div>
                                        <div className="flex justify-end">
                                            <button type="submit" className="mr-2 px-4 py-2 text-white bg-[#15B7B9] rounded-md border border-gray-300 hover:text-gray-700 hover:border-gray-400">Update</button>
                                            <button type="button" onClick={(e) => setShowEditProfile(false)} className="px-4 py-2 text-white bg-[#15B7B9] rounded-md border border-gray-300 hover:text-gray-700 hover:border-gray-400">Close</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                    ) : null}
                </div>
            ) : (
                <div className="min-h-screen flex flex-col">
                    <p>Loading...</p>
                </div>
            )
            }
        </>
    )
}

export default Profile