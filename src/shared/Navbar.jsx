import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router";
import { deleteAuth } from "../helper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Logout =() => {
    deleteAuth()
  }

  return (
   
      <nav className="absolute top-6 left-6 [@media_(width>768px)]:space-x-15  [@media_(width<=768px)]:right-6  flex items-center justify-between text-black text-lg">
        <div className="flex items-center font-bold text-xl">
          <span className=" p-2 rounded-full "><img src="/log1.png" alt="logo" 
          className=" w-45"/></span> 
        </div>
        <button className="md:hidden [@media_(width<=768px)]:text-[#d0e3e9]" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
        <ul
          className={`md:flex text-2xl font-semibold  space-x-6 absolute md:static bg-[#d0e3e9] md:bg-transparent w-40 md:w-auto right-4 top-16 p-2 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out rounded-lg ${
            isOpen ? "block" : "hidden"
          } md:flex-row md:items-center text-center"`}
        >
          <li className="hover:text-blue-600 cursor-pointer p-2">Home</li>
          <li className="hover:text-blue-600 cursor-pointer p-2">Doctors</li>
          <li className="hover:text-blue-600 cursor-pointer p-2">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer p-2"><Link to="/login" onClick={Logout}>Logout</Link></li>
        </ul>
      </nav>
  );
};

export default Navbar;
