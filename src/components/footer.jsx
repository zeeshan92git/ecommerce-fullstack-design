import Foot from "./foot";
import { FaRegEnvelope } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-gray-200 mt-6'>

            <div className=' flex flex-col gap-3 items-center justify-center px-4 py-4 sm:px-8'>
                <div className="max-w-2xl ">
                    <p className="text-2xl sm:text-3xl font-bold mb-2">Subscribe to our newsletter</p>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Get daily updates on upcoming offers from suppliers across the world
                    </p>
                </div>

                {/* Input and Button */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-xl">
                    <div className="relative w-full sm:w-auto flex-grow">
                        <FaRegEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input type="email" placeholder="Enter your email" className="pl-10 pr-4 py-2 w-full rounded-md bg-white outline-none border border-gray-300 text-base" />
                    </div>
                    <button className="bg-blue-500 text-white px-5 py-2.5 rounded-md text-base whitespace-nowrap">
                        Subscribe
                    </button>
                </div>
            </div>

            <Foot />

        </div>

    )
}

export default Footer;