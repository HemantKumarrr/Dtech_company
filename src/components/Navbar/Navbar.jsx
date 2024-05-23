import { useState } from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <div className="z-[99] fixed bottom-12 cursor-pointer right-12 text-white bg-green-700 w-[3rem] sm:w-[10.5rem] px-2 py-[8px] rounded-full" >
        <Link to='https://wa.me/message/OOCLVZDMWP3OJ1' target="_blank" className="flex items-center justify-center w-full gap-2" >
          <RiWhatsappFill className="text-3xl text-white" />
          <h1 className="hidden sm:block text-sm sm:text-md font-Popins font-semibold">WhatsApp</h1>
        </Link>
      </div>
      <nav className="w-full z-[77] h-[72px] fixed font-Popins flex justify-between items-center bg-black md:px-20 sm:px-8 px-4 shadow-md text-white">
        <Link to="/">
          <div className="logo flex cursor-pointer">
            <img
              className="w-12"
              src="/images/DTechLogo.png"
              alt="DTech_logo"
            />
            <span className="px-2">
              <h1 className="whitespace-nowrap uppercase text-xl">D Tech</h1>
              <p className="text-sm tracking-wide">Engineering works</p>
            </span>
          </div>
        </Link>
        <ul className="hidden md:flex h-full justify-between items-center gap-5 md:gap-2 uppercase text-md">
          <li className="bg-zinc-800 rounded-md px-3 py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-zinc-800 transition-all duration-200 ease-linear rounded-md px-3 py-1">
            <Link to="/about" className="hover:border-b-2 transition-all duration-100 ease-out">About Us</Link>
          </li>
          <li className="hover:bg-zinc-800 transition-all duration-200 ease-linear rounded-md px-3 py-1">
            <Link to="/products" className="hover:border-b-2 transition-all duration-100 ease-out">Products</Link>
          </li>
          <li className="hover:bg-zinc-800 transition-all duration-200 ease-linear rounded-md px-3 py-1">
            <Link to="/contact" className="hover:border-b-2 transition-all duration-100 ease-out">Contact Us</Link>
          </li>
        </ul>
        <div className="md:hidden z-10">
          <label>
            <div className="w-16 h-16 cursor-pointer flex flex-col items-center justify-center">
              <input
                className="hidden peer"
                type="checkbox"
                value={isMenu}
                onChange={() => setIsMenu((prev) => !prev)}
              />
              <div className="w-[50%] h-[5px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.95rem] peer-checked:rotate-[-45deg]"></div>
              <div className="w-[50%] h-[5px] -mb-1 bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div className="w-[50%] h-[5px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.75rem] peer-checked:rotate-[45deg]"></div>
            </div>
          </label>
        </div>
        {isMenu && (
          <div className="md:hidden bg-black absolute top-0 right-0 w-[90%] h-screen">
            <ul className="w-full h-full pt-28 px-6">
              <li className="w-full mb-8 bg-zinc-800 py-2 rounded-lg text-center">
                <Link to="/" className="text-xl p-2">
                  Home
                </Link>
              </li>
              <li className="w-full mb-8 bg-zinc-800 py-2 rounded-lg text-center">
                <Link to="/about" className="text-xl whitespace-nowrap p-2">
                  About Us
                </Link>
              </li>
              <li className="w-full mb-8 bg-zinc-800 whitespace-nowrap py-2 rounded-lg text-center">
                <Link to="/products" className="text-xl whitespace-nowrap p-2">
                  Products
                </Link>
              </li>
              <li className="w-full bg-zinc-800 py-2 rounded-lg text-center">
                <Link to="/contact" className="text-xl p-2 whitespace-nowrap">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
