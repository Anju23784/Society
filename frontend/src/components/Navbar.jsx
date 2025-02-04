import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-[#020558] flex items-center justify-between px-6 py-4 shadow-md">
      {/* Left side: Logos */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <img src="/logo2.png" alt="Logo 2" className="h-10" />
      </div>

      {/* Right side: Navigation Links */}
      <div className="flex space-x-6 text-lg font-semibold">
        <div className="cursor-pointer hover:underline">Events</div>
        <div className="cursor-pointer hover:underline">Societies</div>
        <div className="cursor-pointer hover:underline">News</div>
      </div>
    </nav>
  );
};

export default Navbar;
