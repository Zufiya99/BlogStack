import { assets } from "@/public/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
        <Image
          src="/Assets/blogstack_logo.png"
          alt="Logo"
          width={180}
          height={40}
        />
        <p className="text-sm text-white">
          All rights reserved. Copyright @Zufiya
        </p>
        <div className="flex">
          <Image
            src={assets.twitter_icon}
            alt="Twitter Icon"
            width={37}
            height={37}
          />
          <Image
            src={assets.facebook_icon}
            alt="Facebook Icon"
            width={37}
            height={37}
          />
          <Image
            src={assets.googleplus_icon}
            alt="Google Plus Icon"
            width={37}
            height={37}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
