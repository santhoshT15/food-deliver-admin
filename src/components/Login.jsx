import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = ({ setToken, Url }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(Url + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w--full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl fornt-bold mb-4">Admin Panel</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="paswword"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="bg-black text-white mt-2 w-full px-3 py-4 rounded-md hover:bg-gray-300 hover:text-black hover:border"
            type="submit"
          >
            Login
          </button>
          <p className="mt-3 text-sm">
            Click here to go user page ?
            <a href="http://localhost:5173/">
              <span className="text-orange-600 cursor-pointer">grubgo!!!</span>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
