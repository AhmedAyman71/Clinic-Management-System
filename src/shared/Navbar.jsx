import { useState } from "react";
import { Link } from "react-router";
import { deleteAuth } from "../helper";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logout=() => {
    deleteAuth()
  }
  return (
    <nav className="bg-blue-800 text-white p-4 fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"> Clinic_Management_System</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:text-blue-300">Home</Link>
          <Link to="/login" onClick={logout} className="hover:text-blue-300">Logout</Link>
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="absolute right-4 top-16 bg-white text-black shadow-lg rounded-lg p-4 w-48 md:hidden">
          <ul className="space-y-4">
            <li><Link to="/home" className="hover:text-blue-300">Home</Link></li>
            <li> <Link to="/login" onClick={logout} className="hover:text-blue-300">Logout</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;