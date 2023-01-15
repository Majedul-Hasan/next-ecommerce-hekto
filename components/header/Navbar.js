/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";



const NavbarMenu = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/">Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/about">About</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/shop">Shop</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/cart">Cart</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/contact">Contact</Link>
      </Typography>
    </ul>
  );
  return (
    <div className="bg-white">
      <Navbar className="mx-auto shadow-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link href="/">
            <h3 className="text-blue-500 text-xl font-black">
              Hek<span className="text-orange-100">To</span>
            </h3>
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden lg:inline-block">
            <div className="flex items-center border">
              <input
                className="outline-0 p-2 text-black"
                placeholder="Product search"
              />
              <div className="bg-bg-button p-2 cursor-pointer text-white">
                <MdSearch className="text-3xl" />
              </div>
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex justify-between items-center border">
            <input
              className="outline-0 p-2 text-black"
              placeholder="Product search"
            />
            <div className="bg-bg-button p-2 cursor-pointer text-white">
              <MdSearch className="text-3xl" />
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
