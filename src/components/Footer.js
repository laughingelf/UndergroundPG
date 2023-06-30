

function Footer() {
    return (

        <footer className="footer bg-white  shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                <div className="sm:flex sm:items-center sm:justify-end">

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
                <div className="flex items-center justify-between mb-4 sm:mb-0">
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">UndergroundPG™</a>.<br /> What's knowledge, If not distributed.</span>
                    <a href="" className="flex items-center">
                        <img src="./images/punkskull.png" className="h-10 mr-3 mt-1" alt="punkskull" />
                        <span className=" mr-5 self-center text-xl sm:text-md md:text-lg font-semibold whitespace-nowrap dark:text-white underline thin flex-shrink-5">DefyNorms</span>
                    </a>
                </div>
            </div>
        </footer>


    )
}

export default Footer