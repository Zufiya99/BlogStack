import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-5 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Image
            src="/Assets/blogstack_logo.png"
            alt="Logo"
            width={180}
            height={40}
            className="w-[130px] sm:w-auto"
          />
          <button className="flex items-center gap-2 font-semibold py-2 px-2 sm:py-3 sm:px-6 border border-black rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
            Get started
          </button>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl font-medium md:text-5xl">
            Latest blogs
          </h1>
          <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            laudantium maiores facilis amet vitae saepe aliquam quas tempore
            aspernatur repudiandae?
          </p>
          <form
            action=""
            className="flex justify-between items-center max-w-[500px] mx-auto mt-10 border border-black rounded-md overflow-hidden shadow-md"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-4 py-2 outline-none rounded-l-md border-none w-full bg-white focus:ring-2 focus:ring-primary transition duration-200"
            />
            <button type="submit" className="flex items-center justify-center gap-2 font-semibold py-2 px-4 text-black rounded-r-md border-l hover:bg-primary hover:text-white border-black  transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
