import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd, MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cart">
        <IoMdCart />
      </NavLink>
      <NavLink to="/favorite">
        <MdBookmarkAdd />
      </NavLink>
    </>
  );
  return (
    <div className="flex justify-between items-center py-4 px-6 reletive border-b-1">
      <h1 className="text-orange-500 font-bold text-3xl ">DarazLite</h1>
      <ul className="hidden lg:flex items-center gap-5 text-xl ">{links}</ul>
      <button className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <MdMenu size={20} /> : <RxCross1 size={16} />}
      </button>
      <ul className={`${open?"-top-36":"top-10"} lg:hidden absolute right-1 gap-1 rounded   bg-slate-100 flex flex-col p-3 justify-center items-center transition-all duration-700`}>
        {links}
      </ul>
    </div>
  );
};

export default Navbar;


