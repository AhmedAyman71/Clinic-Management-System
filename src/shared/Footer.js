import React from 'react'
import { FaGithub, FaInstagram, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router';

function Footer() {
    return (
        <footer className="bg-blue-800 text-white p-6 text-center w-full">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#" className="text-white text-2xl hover:text-gray-300"><FaGithub /></Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-300"><FaInstagram /></Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-300"><FaGoogle /></Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-300"><FaFacebook /></Link>
          </div>
          <p className="text-sm">© 2025 Clinic System. All rights reserved to AG</p>
          <p className="text-xs mt-2">Providing quality healthcare management solutions for your clinic.</p>
        </footer>
      );
}

export default Footer
