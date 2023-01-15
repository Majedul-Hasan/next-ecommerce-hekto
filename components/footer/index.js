import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-footer-bg-top md:px-0 lg:px-0 px-5 lg:py-20 py-10 md:py-20">
        <div className="container m-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 md:gap-14">
            <div className="md:col-span-2 lg:col-span-2 sm:col-span-1">
              <h3 className="text-blue-500 text-xl font-black">
                Hek <span className="text-orange-100">To</span>
              </h3>
              <div className="flex items-center rounded justify-between my-5 md:my-10 lg:my-10 bg-white ">
                <input
                  type="email"
                  className="p-2 outline-0 sm:w-7/12 md:w-8/12"
                  placeholder="Email type"
                />
                <button className="py-2 px-5 lg:px-10 md:px-10 rounded-r-md bg-bg-button text-white">
                  Sign Up
                </button>
              </div>
              <p className="text-footerText mb-3">Contact Info</p>
              <p className="text-footerText text-justify">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
            <div>
              <h3 className="text-base mt-2 mb-5 lg:mb-10 md:mb-10">
                Catagories
              </h3>
              <ul>
                <li className="text-footerText my-4">
                  <a href="#">Laptops & Computers</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Cameras & Photography</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Smart Phones & Tablets</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Video Games & Consoles</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Waterproof Headphones</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base mt-2 mb-5 lg:mb-10 md:mb-10">
                Customer Care
              </h3>
              <ul>
                <li className="text-footerText my-4">
                  <a href="#">My Account</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Discount</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Returns</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Orders History</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Order Tracking</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base mt-2 mb-5 lg:mb-10 md:mb-10">Pages</h3>
              <ul>
                <li className="text-footerText my-4">
                  <a href="#">Blog</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Browse the Shop</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Category</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">Pre-Built Pages</a>
                </li>
                <li className="text-footerText my-4">
                  <a href="#">WooCommerce Pages</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-footer-bg-bootom p-5 lg:p-5 md:p-5">
        <div className="container m-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between items-center">
            <div className="mb-2 lg:mb-0 md:mb-0">
              <p>© All Rights Reserved | Development by Tobibur</p>
            </div>
            <div>
              <ul className="flex items-center justify-center md:justify-end">
                <li className="p-3 bg-bg-sm text-white cursor-pointer rounded-full">
                  <a
                    target="_blank"
                    href="https://github.com/wptobibur2021"
                    rel="noreferrer"
                  >
                    <FaGithubAlt />
                  </a>
                </li>
                <li className="p-3 bg-bg-sm text-white cursor-pointer rounded-full mx-5">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/tobibur"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="p-3 bg-bg-sm text-white cursor-pointer rounded-full">
                  <a
                    target="_blank"
                    href="https://wa.me/+8801722527364"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
