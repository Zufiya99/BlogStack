import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-5 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Image
            src="/Assets/blogstack_logo.png"
            alt="BlogStack Logo"
            width={180}
            height={40}
            className="w-[130px] sm:w-auto"
          />
          <button className="flex items-center gap-2 font-semibold py-2 px-2 sm:py-3 sm:px-6 border border-black rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
            Join Now
          </button>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 leading-tight mt-20">
            Discover <span className="text-primary">Insights</span> and{" "}
            <span className="text-primary">Inspiration</span>
          </h1>
          <p className="mt-6 max-w-[740px] mx-auto text-sm sm:text-lg text-gray-600 leading-relaxed">
            Stay informed with the latest in tech, startups, and lifestyle. Dive
            into our expert-curated blogs, tailored to inspire and keep you in
            the know.
          </p>
          <form
            action=""
            className="flex justify-between items-center max-w-[500px] mx-auto mt-8 border border-black rounded-md overflow-hidden shadow-md"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="pl-4 py-2 outline-none rounded-l-md border-none w-full bg-white focus:ring-2 focus:ring-primary transition duration-200"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 font-semibold py-2 px-4 text-black rounded-r-md border-l hover:bg-primary hover:text-white border-black transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
