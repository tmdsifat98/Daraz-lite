import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-700 text-neutral-content items-center p-4">
      <aside className="flex gap-4 items-center">
        <h1 className="text-orange-500 font-bold text-3xl ">DarazLite</h1>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link>
          <FaTwitter size={20} />
        </Link>
        <Link>
          <FaYoutube size={20} />
        </Link>
        <Link>
          <FaFacebook size={20} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
