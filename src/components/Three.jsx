// import { Link } from "react-router-dom" // Replace with your routing solution
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineViewList } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import { useState, useEffect } from "react";

const Navbar = () => {
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
   <>
    <nav className="flex flex-col sticky top-0 left-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ease-in-out">
      <div className="px-6 py-3 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="h-12 w-20 cursor-pointer">
          <img
            src="/images/airbnb logo.png"
            alt="Airbnb Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Center Links - Hidden when scrolled */}
        <div
          className={`flex gap-6 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium shadow-sm transition-all duration-300 ${
            isScrolled
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        >
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/experiances" className="hover:underline">
            Experiances
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
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
          <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
            Become a host
          </button>

          <span className="hover:bg-gray-100 p-2 rounded-full cursor-pointer transition-colors">
            <TfiWorld className="h-5 w-5" />
          </span>

          <span className="hover:bg-gray-100 p-2 rounded-full cursor-pointer transition-colors">
            <HiOutlineViewList className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Full Search Bar - Hidden when scrolled */}
      <div
        className={`transition-all duration-300 mx-auto ease-in-out overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0 pb-0" : "max-h-32  opacity-100 pb-6"
        }`}
      >
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-full flex items-center shadow-lg border border-gray-200 w-fit">
            <span className="flex flex-col items-start rounded-l-full text-xs hover:bg-gray-50 px-6 py-4 cursor-pointer transition-colors">
              <button className="font-medium text-xs mb-1">Where</button>
              <input
                className="focus:outline-none cursor-pointer text-sm placeholder-gray-500"
                type="text"
                placeholder="Search destinations"
              />
            </span>

            <div className="w-px h-8 bg-gray-200"></div>

            <span className="cursor-pointer flex flex-col items-start text-xs hover:bg-gray-50 px-6 py-4 transition-colors">
              <p className="font-medium text-xs mb-1">Check in</p>
              <button className="cursor-pointer text-gray-500 text-sm">
                Add dates
              </button>
            </span>

            <div className="w-px h-8 bg-gray-200"></div>

            <span className="cursor-pointer flex flex-col items-start text-xs hover:bg-gray-50 px-6 py-4 transition-colors">
              <p className="font-medium text-xs mb-1">Check out</p>
              <button className="cursor-pointer text-gray-500 text-sm">
                Add dates
              </button>
            </span>

            <div className="w-px h-8 bg-gray-200"></div>

            <span className="flex items-center hover:bg-gray-50 rounded-r-full transition-colors">
              <span className="flex flex-col cursor-pointer items-start text-xs px-6 py-4">
                <p className="font-medium text-xs mb-1">Who</p>
                <button className="cursor-pointer text-gray-500 text-sm">
                  Add guests
                </button>
              </span>

              <span className="flex items-center cursor-pointer mx-2 rounded-full h-12 w-12 text-sm text-white hover:bg-pink-700 bg-pink-600 transition-colors">
                <GrSearch className="mx-auto h-4 w-4" />
              </span>
            </span>
          </div>
        </div>
      </div>

     
    </nav>



{/* -------------------------------------------------------------------------------------------------------------------- */}
        <div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique non maxime praesentium tenetur ullam atque optio reiciendis distinctio nam, explicabo cum aut at eaque exercitationem pariatur blanditiis debitis aspernatur veniam animi incidunt. Magnam accusamus suscipit excepturi quisquam repudiandae provident, eos in? Eum doloremque voluptatum optio accusamus facilis? Maxime tenetur quidem provident nesciunt pariatur perspiciatis exercitationem eaque. Inventore, optio repellendus ipsa corporis dolorem ex exercitationem in sint, ea, incidunt aspernatur!
          
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum quae nulla asperiores dolorem ducimus dolore enim assumenda, mollitia optio rerum odit ipsam officia itaque hic quasi distinctio voluptas! Nobis vero perspiciatis veritatis quisquam officiis facere. Tenetur enim quam odio rem placeat ipsa ducimus! Veritatis at beatae officia enim nesciunt.
        </div>
        <div>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam iste ex dolorum repellendus neque, corporis quae ipsum animi facere.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique non maxime praesentium tenetur ullam atque optio reiciendis distinctio nam, explicabo cum aut at eaque exercitationem pariatur blanditiis debitis aspernatur veniam animi incidunt. Magnam accusamus suscipit excepturi quisquam repudiandae provident, eos in? Eum doloremque voluptatum optio accusamus facilis? Maxime tenetur quidem provident nesciunt pariatur perspiciatis exercitationem eaque. Inventore, optio repellendus ipsa corporis dolorem ex exercitationem in sint, ea, incidunt aspernatur!
          
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum quae nulla asperiores dolorem ducimus dolore enim assumenda, mollitia optio rerum odit ipsam officia itaque hic quasi distinctio voluptas! Nobis vero perspiciatis veritatis quisquam officiis facere. Tenetur enim quam odio rem placeat ipsa ducimus! Veritatis at beatae officia enim nesciunt.
        </div>
        <div>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam iste ex dolorum repellendus neque, corporis quae ipsum animi facere.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique non maxime praesentium tenetur ullam atque optio reiciendis distinctio nam, explicabo cum aut at eaque exercitationem pariatur blanditiis debitis aspernatur veniam animi incidunt. Magnam accusamus suscipit excepturi quisquam repudiandae provident, eos in? Eum doloremque voluptatum optio accusamus facilis? Maxime tenetur quidem provident nesciunt pariatur perspiciatis exercitationem eaque. Inventore, optio repellendus ipsa corporis dolorem ex exercitationem in sint, ea, incidunt aspernatur!
          
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum quae nulla asperiores dolorem ducimus dolore enim assumenda, mollitia optio rerum odit ipsam officia itaque hic quasi distinctio voluptas! Nobis vero perspiciatis veritatis quisquam officiis facere. Tenetur enim quam odio rem placeat ipsa ducimus! Veritatis at beatae officia enim nesciunt.
        </div>
        <div>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam iste ex dolorum repellendus neque, corporis quae ipsum animi facere.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique non maxime praesentium tenetur ullam atque optio reiciendis distinctio nam, explicabo cum aut at eaque exercitationem pariatur blanditiis debitis aspernatur veniam animi incidunt. Magnam accusamus suscipit excepturi quisquam repudiandae provident, eos in? Eum doloremque voluptatum optio accusamus facilis? Maxime tenetur quidem provident nesciunt pariatur perspiciatis exercitationem eaque. Inventore, optio repellendus ipsa corporis dolorem ex exercitationem in sint, ea, incidunt aspernatur!
          
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum quae nulla asperiores dolorem ducimus dolore enim assumenda, mollitia optio rerum odit ipsam officia itaque hic quasi distinctio voluptas! Nobis vero perspiciatis veritatis quisquam officiis facere. Tenetur enim quam odio rem placeat ipsa ducimus! Veritatis at beatae officia enim nesciunt.
        </div>
        <div>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam iste ex dolorum repellendus neque, corporis quae ipsum animi facere.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique non maxime praesentium tenetur ullam atque optio reiciendis distinctio nam, explicabo cum aut at eaque exercitationem pariatur blanditiis debitis aspernatur veniam animi incidunt. Magnam accusamus suscipit excepturi quisquam repudiandae provident, eos in? Eum doloremque voluptatum optio accusamus facilis? Maxime tenetur quidem provident nesciunt pariatur perspiciatis exercitationem eaque. Inventore, optio repellendus ipsa corporis dolorem ex exercitationem in sint, ea, incidunt aspernatur!
          
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum quae nulla asperiores dolorem ducimus dolore enim assumenda, mollitia optio rerum odit ipsam officia itaque hic quasi distinctio voluptas! Nobis vero perspiciatis veritatis quisquam officiis facere. Tenetur enim quam odio rem placeat ipsa ducimus! Veritatis at beatae officia enim nesciunt.
        </div>
        <div>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam iste ex dolorum repellendus neque, corporis quae ipsum animi facere.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae similique non maxime praesentium tenetur ullam atque optio reiciendis distinctio nam, explicabo cum aut at eaque exercitationem pariatur blanditiis debitis aspernatur veniam animi incidunt. Magnam accusamus suscipit excepturi quisquam repudiandae provident, eos in? Eum doloremque voluptatum optio accusamus facilis? Maxime tenetur quidem provident nesciunt pariatur perspiciatis exercitationem eaque. Inventore, optio repellendus ipsa corporis dolorem ex exercitationem in sint, ea, incidunt aspernatur!
          
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum quae nulla asperiores dolorem ducimus dolore enim assumenda, mollitia optio rerum odit ipsam officia itaque hic quasi distinctio voluptas! Nobis vero perspiciatis veritatis quisquam officiis facere. Tenetur enim quam odio rem placeat ipsa ducimus! Veritatis at beatae officia enim nesciunt.
        </div>
        <div>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam iste ex dolorum repellendus neque, corporis quae ipsum animi facere.
        </div>
        </div>
  </>

  );
};

export default Navbar;



