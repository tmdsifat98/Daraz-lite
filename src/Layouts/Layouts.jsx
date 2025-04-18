import React from 'react';
import "../App.css"
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Layouts = () => {
  return (
    <div className='w-11/12 mx-auto'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  );
};

export default Layouts;