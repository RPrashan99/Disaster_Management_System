import React,{useState} from "react";
import { Link } from "react-router-dom";
import {message} from "antd";
import axios from "axios";
import {BackButton} from "../components/Common/BackButton";

export const Registration = () => {
  const [userName,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [address,setAddress]=useState("")


  const handleRegister = async(e) =>{
    e.preventDefault();
    try {
      const response= await axios.post(
        "http://localhost:5000/api/users/register",
        {
          userName:userName,
          email: email,
          password: password,
          address: address
        }
      );
      
      localStorage.setItem('user',JSON.stringify(response));
      message.success("User successfully registered");

      setName("");
      setEmail("");
      setPassword("");
      setAddress("");

      window.location.href = "/"

    } catch (error) {
      message.error("Error: " + error.message);
    }
  };

  return (
    <div className="container mx-auto p-5 md:p-0">
      <div className="py-2 px-0">
        <BackButton/>
      </div>

      <div className="max-w-sm mx-auto bg-white px-10 py-10 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl text-primary">Registration</h1>
        </div>

        <form >
          <div className="relative my-5">
            <input
              type="text"
              value={userName}
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-black focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="exampleFormControlInputText"
              placeholder="Example label"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <label
              htmlFor="exampleFormControlInputText"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              User Name
            </label>
          </div>

          

          <div className="relative my-5">
            <input
              type="email"
              value={email}
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-black focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              Email address
            </label>
          </div>

          <div className="relative mt-5">
            <input
              type="password"
              value={password}
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="floatingPassword"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              Password
            </label>
          </div>

          <div className="relative my-5">
            <input
              type="tel"
              value={address}
              className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-black focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="exampleFormControlInputTel"
              placeholder="Example label"
              onChange={(e)=>setAddress(e.target.value)}
              required
            />
            <label
              htmlFor="exampleFormControlInputTel"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              Address
            </label>
          </div>

      

          <button
            onClick={handleRegister}
            type="button"
            className="my-4 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-lg font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
          >
            Sign Up
          </button>

          <div className="flex justify-between px-1">
            <p className="justify-start text-sm">Already have an account?</p>
            <p className="items-end text-sm hover:underline">
              <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
