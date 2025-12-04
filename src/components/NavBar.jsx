import { IoMenuOutline, IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useParams } from "react-router";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "animate.css";
const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const {id:placeId} = useParams();
  const navItems = [
    { label: "News", path: "/news" },
    { label: "Destination", path: "/destination" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="flex w-full justify-between items-center font-montserrat">
      <div className="flex gap-4 relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white cursor-pointer lg:hidden"
        >
          {menuOpen ? <IoMdClose size={28} /> : <IoMenuOutline size={28} />}
        </button>
        <Link to={'/'}>
                <img
          src={logo}
          alt="travel-guru logo"
          className={`${location.pathname === "/" || location.pathname === `/place/${placeId}` ? "invert" : ""} w-28 md:w-40`}
        />
        </Link>
        {menuOpen && (
          <div className="absolute flex flex-col gap-3 lg:hidden top-20 animate__animated animate__backInLeft animateMenu bg-white/20 p-5 shadow-white shadow-[0_0_5px_rgba(0,0,0,0.3)]">
            {navItems?.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === "/" || location.pathname === `/place/${placeId}` ? "text-white" : ""
                } text-lg`}
              >
                {item.label}
              </NavLink>
            ))}
            <label className="input md:hidden outline-none bg-transparent border-b border-white border-t-0 border-l-0 border-r-0 text-white placeholder:text-white lg:w-80">
              <IoSearch className="h-[1em] opacity-50" />
              <input type="search" placeholder="Search" />
            </label>
          </div>
        )}
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex gap-8 items-center">
          {/* search input */}
          <label className="hidden md:flex input outline-none bg-white/20 shadow-[0_0_5px_rgba(0,0,0,0.3)] shadow-white text-white placeholder:text-white text-lg lg:w-80">
            <IoSearch className="h-[1em] opacity-50" />
            <input type="search" placeholder="Search your Destination..." />
          </label>
          <div className="lg:flex gap-8 hidden">
            {navItems?.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === "/" || location.pathname === `/place/${placeId}` ? "text-white" : ""
                } text-lg`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <Link
          to={"/auth/login"}
          className="btn bg-primary shadow-none border-none md:px-7 md:text-lg md:py-6"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
