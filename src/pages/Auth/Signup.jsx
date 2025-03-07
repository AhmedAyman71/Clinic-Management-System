import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Signup = () => {
    const navigate=useNavigate()
    const [Regestier, setRegestier] = useState({
      email:"",
      username:"",
      password:"",
      loading:false,
      err:""
    })
      const RegestierFun=async(e) => {
        e.preventDefault()
        let isValid = true;
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key]) isValid = false;
    });
    if (isValid) {
      
        setRegestier({...Regestier,loading:true})
        try {
          const {data}=await axios.post("http://localhost:1337/api/auth/local/register",{
            email:Regestier.email,
            username:Regestier.username,
            password:Regestier.password,
          })
          console.log(data);
          navigate("/login")
          setRegestier({...Regestier,loading:false})
        } catch (error) {
          console.log(error.response.data.error.message);
        }
    }
      }
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Invalid email format";
    } 
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setRegestier({ ...Regestier, [name]: value });
    validateField(name, value);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Signup</h2>
        
        <form onSubmit={RegestierFun}>
          <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter username" 
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          
          <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter email" 
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
            Signup
          </button>
        </form>
        <NavLink to={"/login" } className="mt-4 text-gray-500">Login?</NavLink>
      </div>
    </div>
  );
};

export default Signup;
