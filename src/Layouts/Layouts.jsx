import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const Layouts = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
