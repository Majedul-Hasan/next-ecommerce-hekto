import React from 'react';
import {
    MdMarkunread,
    MdPhoneCallback,
    MdPerson,
    MdShoppingCart,
  } from "react-icons/md";
  import { IoMdHeartEmpty } from "react-icons/io";
import Link from 'next/link';


const HeaderTop = () => {
  return (
        <div className=" hidden md:block bg-blue-primary">
      <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 py-3">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:text-center md:items-center max-w-lg md:justify-between">
          <p className="flex justify-center items-center text-white mr-10">
            <MdMarkunread className="mr-2 mt-1" />
            <span>wptobibur21@gmail.com</span>
          </p>
          <p className="flex justify-center items-center text-white md:ml-3 lg:ml-0 xl:ml-0">
            <MdPhoneCallback className="mr-2 mt-1" />
            <span>+8801722527364</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 items-center">
          <div className="lg:mr-5 xl:mr-5 md:mr-2 flex justify-center">
            <select className="outline-0 md:px-1 xl:px-3 lg:px-3 py-2 bg-blue-primary sm:mr-3 md:mr-1 xl:mr-3 lg:mr-3 border-none text-white border-r-0 rounded-none">
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">English</option>
            </select>
            <select className="lg:px-3 xl:px-3 md:px-1 py-2 outline-0 bg-blue-primary md:mr-1 lg:mr-3 xl:mr-3 border-none text-white">
              <option value="">USD</option>
              <option value="">BD</option>
              <option value="">UK</option>
            </select>
          </div>
          <div>
            <ul className="flex items-center justify-center">
              <li className="lg:mr-5 md:mr-1 xl:mr-5 sm:mr-2">
                <Link
                  href="/login"
                  className="text-white flex items-center justify-center"
                >
                  <span className="mr-2">Login</span> <MdPerson />
                </Link>
              </li>
              <li className="lg:mr-5 md:mr-1 xl:mr-5 sm:mr-2">
                <Link
                  className="text-white flex items-center justify-center"
                  href="/wishlist"
                >
                  <span className="mr-2">Wishlist</span> <IoMdHeartEmpty />
                </Link>
              </li>
              <li>
                <Link
                  className="text-white flex items-center justify-center"
                  href="/cart"
                >
                  <span className="mr-2">Cart</span> <MdShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        
  
  )
}

export default HeaderTop