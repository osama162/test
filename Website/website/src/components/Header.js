import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#1A35AB] p-4">
      <div className="max-w-[1000px] mx-auto flex justify-between items-center ">
        <div className="Logo">
          <img src="./logo.png" className="max-w-[120px]"></img>
        </div>
        <div className="">
          {toggle ? (
            <AiOutlineClose
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-2xl text-white md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-2xl text-white md:hidden block"
            />
          )}

          <ul className="menu hidden md:flex text-gray-100 space-x-10 uppercase">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>contact</a>
            </li>
            <li>
              <a>shop</a>
            </li>
            <li>
              <a>login</a>
            </li>
            <li>
              <a>sign up</a>
            </li>
          </ul>
          {/* Responsive Menu */}
          <ul
            className={`menu  md:hidden  fixed mt-5 px-10 w-full h-full pt-10 text-gray-100 bg-black uppercase ${
              toggle ? "left-[0%]" : "left-[-100%]"
            }`}
          >
            <li className="py-5">
              <a>Home</a>
            </li>
            <li className="py-5">
              <a>About</a>
            </li>
            <li className="py-5">
              <a>contact</a>
            </li>
            <li className="py-5">
              <a>shop</a>
            </li>
            <li className="py-5">
              <a>login</a>
            </li>
            <li className="py-5">
              <a>sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
