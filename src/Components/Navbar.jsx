import React, { useContext, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd, MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import { CartContext } from "../Providers/Context";

const Navbar = () => {
  const { addCart } = useContext(CartContext);
  const [open, setOpen] = useState(true);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/favorite">
        <MdBookmarkAdd />
      </NavLink>
    </>
  );
  return (
    <div className="flex justify-between items-center py-4 px-6 relative border-b-1">
      <Link to="/">
        <h1 className="text-orange-500 flex-1 lg:flex-none font-bold text-3xl ">
          DarazLite
        </h1>
      </Link>
      <div className="flex items-center gap-4 mr-3">
        <ul className="hidden lg:flex items-center gap-5 text-xl ">{links} </ul>
        <button className="relative">
          <NavLink
            className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
            to="/cart"
          >
            <IoMdCart size={20} />
          </NavLink>
          <p className="absolute bg-gray-500 text-white px-1 rounded-full text-xs -top-2 -right-2">
            {addCart.length}
          </p>
        </button>
      </div>
      <button
        className="lg:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <MdMenu size={20} /> : <RxCross1 size={17} />}
      </button>

      <ul
        className={`${
          open ? "-top-36" : "top-16"
        }  lg:hidden absolute right-1 gap-2 rounded z-10  bg-slate-100 flex flex-col px-6 py-4 justify-center items-center transition-all duration-700`}
      >
        {links}
      </ul>
    </div>
  );
};

export default Navbar;
