import React from 'react'
import Navbar from './Navbar'
import One from './One'
import Two from './Two'
import { Link } from "react-router-dom"
import { TfiWorld } from "react-icons/tfi"
import { HiOutlineViewList } from "react-icons/hi"
import { GrSearch } from "react-icons/gr";
import { useState, useEffect } from "react";





const Rough = () => {

    const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show compact navbar when scrolled down more than 80px
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);










  return (
    <div className=''> 

      <nav className="flex flex-col sticky top-0 left-0 z-50 bg-gray-100">
      <div className=" px-6 py-3 flex justify-between items-center  w-full  ">
      
      {/* Logo */}
      <div className="h-16 w-20 cursor-pointer">
        <img src="/images/airbnb logo.png" alt="Airbnb Logo" className="h-full w-auto object-contain" />
      </div>

      {/* Center Links */}
      <div  className={`flex gap-6 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium shadow-sm transition-all duration-300 ${
            isScrolled
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100"
          }`}>
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/Experiances" className="hover:underline">Experiances</Link>
        <Link to="/Services" className="hover:underline">Services</Link>
      </div>



           {/* Compact Search Bar - Shown when scrolled */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isScrolled
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-full flex items-center shadow-lg border border-gray-200 px-4 py-2 cursor-pointer hover:shadow-xl transition-shadow">
            <span className="text-sm text-gray-600 font-medium px-3">Anywhere</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600 font-medium px-3">Any week</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600 px-3">Add guests</span>
            <div className="bg-pink-600 rounded-full p-2 ml-2">
              <GrSearch className="h-4 w-4 text-white" />
            </div>
          </div>
        </div> 



      {/* Right Buttons */}
      <div className="flex items-center gap-3 text-sm font-medium">
        <button className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">Become a host</button>

        <span className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
          <TfiWorld className="h-6 w-6" />
        </span>

        <span className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
          <HiOutlineViewList className="h-6 w-6" />
        </span>
      </div>

      </div>
      {/* ------------------------------------------------------------------------ */}

      {/* External Navbar */}
      <div  className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0 pb-0 mx-auto" : "max-h-32 mx-auto opacity-100 pb-6"
        }`}>
        <div className="bg-white rounded-full flex gap-6  items-center shadow-md w-fit">

          <span className="flex flex-col items-start rounded-full text-xs hover:bg-gray-200 px-6 py-3">
            <button className="cursor-pointer">
              Where
            </button>
            <input className="focus:outline-none cursor-pointer" type="text" placeholder="Search destinations" />
          </span>

          <span className="cursor-pointer flex flex-col items-center rounded-full text-xs hover:bg-gray-200 px-6 py-3  ">
            <p>
            Check in
            </p>
            <button className="cursor-pointer text-gray-600">
            Add dates
            </button>
            </span>

          <span  className="cursor-pointer flex flex-col items-center rounded-full text-xs hover:bg-gray-200 px-6 py-3">
            <p>
            Check out
            </p>
            <button className="cursor-pointer text-gray-600">
              Add dates
            </button>
          </span>

          <span  className="flex items-center hover:bg-gray-200 rounded-full ">
            <span  className="flex flex-col cursor-pointer items-center rounded-full text-xs  px-6 py-3">
            <p >
              Who 
            </p>  
            <button className="cursor-pointer text-gray-600">
              Add guests
            </button>

            </span>

            <span  className="flex items-center cursor-pointer mx-1 rounded-full h-12 w-12 text-sm text-white hover:bg-pink-700 bg-pink-600">
              <GrSearch className="mx-auto"/>
            </span>
          </span>
        </div>
      </div>

    </nav>


       <div className="flex flex-col gap-2">
                <One heading="Poroducts in Islamabad" />
                <Two />
            </div>

            {/* === 2nd Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Available in Rawalpindi this weekend" />
                <Two />
            </div>

            {/* === 3rd Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Stay in Karachi" />
                <Two />
            </div>

            {/* === 4th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Available in Murree this weekend" />
                <Two />
            </div>

            {/* === 5th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Homes in Nathia Gali" />
                <Two />
            </div>

            {/* === 6th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Available next month in London" />
                <Two />
            </div>

            {/* === 7th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Places to stay in Dubai" />
                <Two />
            </div>

            {/* === 8th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Check out homes in Kuala Lumpur" />
                <Two />
            </div>

            {/* === 9th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Popular homes in Fatih" />
                <Two />
            </div>

    </div>
  )
}

export default Rough
