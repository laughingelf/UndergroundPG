

import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function AboutMe() {
    return (
        <div>
            <div id='profile-img' className="px-4 sm:px-0 ml-8">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Justin Gery</h3>
                <img className='w-80 h-auto border border-gray-500 rounded-lg shadow-2xl' src='./images/bike-photo.jpg' />
            </div>
            <div className="mt-6 ml-8 mr-8 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div id='social-links' className="flex flex-row justify-center items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <a href="https://www.linkedin.com/in/justin-gery/" target="_blank"><img className="social-logo w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-2" src="./images/linkedin-logo.png" /></a>
                        <a href="https://github.com/laughingelf/" target="_blank"><img className="social-logo w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-2" src="./images/github-logo.png" /></a>
                        <a href="https://www.instagram.com/the_rust_bug/" target="_blank"><img className="social-logo w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-2" src="./images/insta-logo.png" /></a>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Type of Work</dt>
                        <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">FullStack Developer, Automation</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email Address</dt>
                        <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">jaygery90@gmail.com</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">About Me</dt>
                        <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0 bg-gray-400 bg-opacity-60 rounded-lg p-4">
                            Hey there! I'm Justin, and I've taken the road less traveled in the tech world. I'm mostly self-taught and have a deep love for learning and pushing the limits of what's possible.
                            I've always believed in defying the norms and embracing the anarchy within me. It's that rebellious spirit that led me to explore the uncharted territories of technology. I thrive on challenges and love to see just how far I can push myself and the tech I work with.
                            When it comes to my expertise, I'm all about building. Whether it's diving into the exciting realm of artificial intelligence, automating tasks to save time and effort, or creating flowing front-ends, I'm in my element.
                            But you know, it's not just about tech for me. Outside of the digital world, I'm a bit of an adventurer. I've got this insatiable appetite for unconventional hobbies.  When I'm not pushing the limits, you'll catch me channeling my passion for metal fabrication, woodwork, building cars, and even embracing my primal side with a touch of caveman spirit.
                            I may not revolutionize the world, but I'll have a blast making my mark. Through my passion for technology, metal fabrication, woodwork, and building cars, I embrace the thrill of pushing boundaries and defying norms. Join me on this exciting journey as we create, innovate, and leave our unique imprint on the world.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}




{/*


        <a href="https://www.instagram.com/the_rust_bug/" target={"_blank"}><img className="social-logo" src="./images/insta-logo.png" /></a>
        <a href="https://www.linkedin.com/in/justin-gery/" target={"_blank"}><img className="social-logo" src="./images/linkedin-logo.png" /></a>
        <a href="https://github.com/laughingelf/" target={"_blank"}><img className="social-logo" src="./images/github-logo.png" /></a>
       


</div>
<div className="photos">

    <iframe src='https://www.juicer.io/api/feeds/the_rust_bug/iframe' frameborder='0' width='1000' height='800' ></iframe>

</div>
</div> */}