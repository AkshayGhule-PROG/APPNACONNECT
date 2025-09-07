import React from "react";
import { Link } from "react-router-dom";
import mobileImg from "../assets/mobile.png";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-[#0d0d0d] via-[#1a1a1a] to-[#111111] flex flex-col relative overflow-hidden">

      {/* ================= Animated Background Blobs ================= */}
      <div className="absolute w-full h-full -z-10 overflow-hidden">
        <div className="absolute bg-purple-700/40 w-96 h-96 rounded-full -top-32 -left-32 animate-blob"></div>
        <div className="absolute bg-pink-500/30 w-80 h-80 rounded-full -bottom-24 -right-24 animate-blob animation-delay-2000"></div>
        <div className="absolute bg-blue-500/20 w-72 h-72 rounded-full top-1/3 right-1/3 animate-blob animation-delay-4000"></div>
      </div>

    {/* ================= Navbar ================= */}
<nav className="flex justify-between items-center px-8 py-3 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-xl z-20">
  {/* Logo */}
  <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-[#ff9839] to-[#ff5e62] bg-clip-text text-transparent leading-none">
    Appna Video Call
  </h1>

  {/* Links + Button */}
  <div className="flex items-center gap-5 text-base md:text-lg font-medium text-gray-200">
    <p className="hover:text-[#ff9839] cursor-pointer transition-colors leading-none">
      Join As Guest
    </p>
    <p className="hover:text-[#ff9839] cursor-pointer transition-colors leading-none">
      Register
    </p>
    <button className="px-5 py-1.5 rounded-full bg-gradient-to-r from-[#ff9839] to-[#ff5e62] shadow-lg text-white font-semibold hover:scale-105 hover:shadow-[#ff5e62]/40 transition-transform duration-300 leading-none">
      Login
    </button>
  </div>
</nav>


      {/* ================= Hero Section ================= */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between flex-1 px-10 lg:px-20 mt-12 gap-10">
        
        {/* Left Content */}
        <div className="max-w-xl space-y-6 md:space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            <span className="bg-gradient-to-r from-[#ff9839] to-[#ff5e62] bg-clip-text text-transparent">
              Connect
            </span>{" "}
            Instantly with Your Loved Ones
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Say goodbye to distance! With <span className="font-semibold text-white">Apna Video Call</span>, video calls are fast, reliable, and secure.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              to="/auth"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-[#ff9839] to-[#ff5e62] text-white font-semibold shadow-2xl hover:scale-110 hover:shadow-[#ff9839]/50 transition-all duration-300"
            >
              Get Started
            </Link>
            <button className="px-10 py-3 rounded-full border border-[#ff9839] text-[#ff9839] hover:bg-[#ff9839]/20 transition-colors duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center items-center md:w-1/2 relative">
          <img 
            src={mobileImg} 
            alt="Mobile Preview"
            className="h-[70vh] md:h-[75vh] drop-shadow-2xl animate-floating transition-transform duration-500 hover:scale-105"
          />
        </div>
      </main>

      {/* ================= Footer ================= */}
      <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-800 backdrop-blur-sm mt-10">
        © {new Date().getFullYear()} Appna Video Call. All rights reserved.
      </footer>

    </div>
  );
};

export default LandingPage;
