import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-11/12 mx-auto">
      <h2 className="font-bold text-xl">CS — Ticket System</h2>
      <ul className="flex items-center gap-x-4 text-gray-600">
        <li>Home</li>
        <li>FAQ</li>
        <li>Changelog</li>
        <li>Blog</li>
        <li>Download</li>
        <li>Contact</li>
        <button className="btn bg-purple-700 font-bold text-white">
          + New Ticket
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
