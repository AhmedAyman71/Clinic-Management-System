import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { setAuth } from "../../helper";

const Loginn = () => {
    const navigate=useNavigate()
  const [login, setLogin] = useState({
    email:"",
    password:"",
    loading:false,
    err:""
  })
  
    const loginFun=async(e) => {
      e.preventDefault()
      setLogin({...login,loading:true})
      let isValid = true;
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key]) isValid = false;
    });
    if (isValid) {
      
        try {
          const {data}=await axios.post("http://localhost:1337/api/auth/local",{
            identifier:login.email,
            password:login.password,
          })
          console.log(data);
          setAuth(data)
          navigate("/home")
          setLogin({...login,loading:false})
        } catch (error) {
          console.log(error.response.data.error.message);
        }
    }

    }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setLogin({ ...login, [name]: value });
    validateField(name, value);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Login_Form</h2>
        
        <form onSubmit={loginFun}>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input 
              type="text" 
              name="email"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter username" 
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          
          <div className="mb-6 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter password" 
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">
            Login
          </button>
        </form>
        
        <Link to={"/signup"} className="mt-4 text-gray-500 text-sm">Sign Up?</Link>
      </div>
    </div>
  );
};

export default Loginn;
