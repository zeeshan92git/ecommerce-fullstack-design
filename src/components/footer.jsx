import Foot from "./foot";
import { FaRegEnvelope } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-gray-200 mt-6'>

            <div className='text-center p-6'>
                <div className="">
                    <p className="text-2xl font-bold">Subscribe on our newsletter</p>
                    <p className="text-gray-400">Get daily news on upcoming offers from many suppliers all over the world</p>
                </div>

                <div className="mt-4 flex gap-2 items-center justify-center">
                    <div className="relative">
                        <FaRegEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="pl-10 pr-3 py-2 rounded-md bg-white outline-none border border-gray-300 text-lg"
                        />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-3 rounded-md text-sm">Subscribe</button>
                </div>

            </div>
            
            <Foot/>

        </div>
    )
}

export default Footer;