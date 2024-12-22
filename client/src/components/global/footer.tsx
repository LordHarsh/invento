import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="my-8 border-t pt-8 flex-col space-y-4 md:flex-row justify-between items-center text-gray-600 text-sm">
            <p className="text-center">
                Copyright @ 2024 Invento. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-10 md:mt-0 justify-center">
                <span>Social : </span>
                <Link href="#" className="text-gray-500 hover:text-gray-800">
                    <FaInstagram />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800">
                    <FaGithub />
                </Link>
            </div>
        </div>
    )
}

export default Footer;
