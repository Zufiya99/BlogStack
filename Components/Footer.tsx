import { assets } from "@/public/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
        <Image
          src="/Assets/blogstack_logo.png"
          alt="BlogStack Logo"
          width={180}
          height={40}
        />
        <p className="text-sm text-white text-center leading-relaxed">
          &copy; {new Date().getFullYear()} | BlogStack | All rights reserved.
          <br />
          <span className="mt-2 block">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/zufiyaidrisi9797/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Zufiya Idrisi
            </a>
          </span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={assets.twitter_icon}
              alt="Twitter"
              width={37}
              height={37}
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={assets.facebook_icon}
              alt="Facebook"
              width={37}
              height={37}
            />
          </a>
          <a
            href="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={assets.googleplus_icon}
              alt="Google Plus"
              width={37}
              height={37}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
