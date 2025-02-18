import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";

const App = () => {
  const Url = "https://food-deliver-app-be.onrender.com";
  const [token, setToken] = useState(null); // Initially, set as null for better handling

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken); // Set token if it exists
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token); // Save token in localStorage whenever it changes
    }
  }, [token]);

  return (
    <div>
      <ToastContainer />
      {token === null ? (
        <Login Url={Url} setToken={setToken} />
      ) : (
        <>
          <NavBar setToken={setToken} />
          <hr />
          {/* app content */}
          <div className="flex">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Add Url={Url} />} />
              <Route path="/list" element={<List Url={Url} />} />
              <Route path="/orders" element={<Orders Url={Url} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
