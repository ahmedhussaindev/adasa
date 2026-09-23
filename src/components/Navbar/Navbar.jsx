import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav dir="rtl" className="bg-[#151515] border-b border-[#292929] fixed w-full z-20">
      <div className="lg:px-20 md:px-6 px-2 min-h-22 mx-auto">
        {/* Main Navbar */}
        <div className="h-22 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-[#ff6b00] text-5xl duration-300 hover:scale-105"><img className="w-12 h-12 object-contain" src={logo} alt="عدسة" /></div>

            <div>
              <h2 className="text-white text-xl font-bold">عدسة</h2>
              <p className="text-[#d78300] text-xs">عالم التصوير الفوتوغرافي</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-[#181818] border border-[#2b2b2b] rounded-full p-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-full transition ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600  text-white"
                    : "text-[#999] hover:text-white"
                }`
              }
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-full transition ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600  text-white"
                    : "text-[#999] hover:text-white"
                }`
              }
            >
              المدونة
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-full transition ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600  text-white"
                    : "text-[#999] hover:text-white"
                }`
              }
            >
              من نحن
            </NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="cursor-pointer text-[#777] hover:text-orange-400 text-2xl border-2 duration-300 border-transparent hover:border-gray-700 px-2.5 py-2 rounded-xl">
              <i className="fa-solid fa-sm fa-magnifying-glass"></i>
            </button>
             <Link className="bg-linear-to-r from-orange-500 to-orange-600  hover:-translate-y-0.5 text-white font-bold px-7 py-3 rounded-full transition" to="/blog">ابدأ القراءة</Link>
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#999] text-3xl rounded-xl p-1.5 border-2 border-transparent hover:border-gray-600 duration-300 hover:text-white"
          >
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="bg-[#181818] border border-[#303030] rounded-2xl p-5">
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-5 py-4 rounded-xl transition ${
                      isActive
                        ? "text-[#ff5a00] bg-[#301b0e] border border-[#7a3a0b]"
                        : "text-[#aaa]"
                    }`
                  }
                >
                  الرئيسية
                </NavLink>

                <NavLink
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-5 py-4 rounded-xl transition ${
                      isActive
                        ? "text-[#ff5a00] bg-[#301b0e] border border-[#7a3a0b]"
                        : "text-[#aaa]"
                    }`
                  }
                >
                  المدونة
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-5 py-4 rounded-xl transition ${
                      isActive
                        ? "text-[#ff5a00] bg-[#301b0e] border border-[#7a3a0b]"
                        : "text-[#aaa]"
                    }`
                  }
                >
                  من نحن
                </NavLink>
              </div>

              <button className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-full transition">
                ابدأ القراءة
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
