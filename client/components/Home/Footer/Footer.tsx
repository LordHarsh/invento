import Link from "next/link"
import { FaClock, FaEnvelope, FaInstagram, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="bg-white py-10">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-8">
                <div>
                {/* logo */}
                <h1 className="text-xl md:text-2xl font-bold"><span className="text-3xl md:text-4xl
                text-purple-700">I</span>vento</h1>

                {/* description */}
                <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
            {/* about us */}

            <div >
                <h3 className="text-lg font-semibold text-gray-800">About us</h3>
                <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                    
                    <li>Resume Insights</li>
                    <li>Copyright</li>
                    <li>About Us</li>
                   
                </ul>
            </div>
            {/* Our Information */}

            <div >
                <h3 className="text-lg font-semibold text-gray-800">Our Information</h3>
                <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                    
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Site Map</li>
                
                </ul>
            </div>
            {/* contact info */}
            <div>
            <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                <li className="flex items-center">
                    <FaMapMarkedAlt className="mr-2" />
                    Chennai, Tamil Nadu
                </li>
                <li className="flex items-center">
                    <FaPhoneAlt className="mr-2" />
                    +91 9876543210
                </li>
                <li className="flex items-center">
                    <FaClock className="mr-2" />
                   All days - 8am - 9 pm
                </li>
                <li className="flex items-center">
                    <FaEnvelope className="mr-2" />
                   invento@gmail.com
                </li>
            </ul>
            </div>
            </div>
            {/* Bottom Footer */}
            <div className="mt-8 border-t pt-8 flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <p className="text-center md:tet-left">
                    Copyright @ 2024 Invento. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <span>Social : </span>
                    <Link href="#" className="text-gray-500 hover:text-gray-800">
                    <FaInstagram />
                     </Link>
                     <Link href="#" className="text-gray-500 hover:text-gray-800">
                    <FaGithub />
                     </Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
