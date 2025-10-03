import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5  w-11/12 mx-auto py-10 border-b-1 border-gray-800">
        <section className="flex flex-col">
          <h2 className="text-xl text-white font-bold">CS — Ticket System</h2>
          <p className="text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </section>

        <section className="flex flex-col pl-20">
          <h3 className="text-lg text-white">Company</h3>
          <ul className="text-[#A1A1AA]">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </section>

        <section className="flex flex-col pl-20">
          <h3 className="text-lg text-white">Services</h3>
          <ul className="text-[#A1A1AA]">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </section>

        <section className="flex flex-col pl-15">
          <h3 className="text-lg text-white">Information</h3>
          <ul className="text-[#A1A1AA]">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </section>

        <section className="flex flex-col pl-15">
          <h3 className="text-lg text-white">Social Links</h3>
          <ul className="text-[#A1A1AA]">
            <li className="flex gap-x-2 items-center">
              <RiTwitterXLine />
              @CS — Ticket System
            </li>
            <li className="flex gap-x-2 items-center">
              <FaFacebookF /> @CS — Ticket System
            </li>
            <li className="flex gap-x-2 items-center">
              <FaLinkedinIn />
              @CS — Ticket System
            </li>
            <li className="flex gap-x-2 items-center">
              {" "}
              <MdEmail />
              support@cst.com
            </li>
          </ul>
        </section>
      </div>
      <div>
        <p className="text-white text-center py-4">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
