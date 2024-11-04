"use client";

import Footer from "@/Components/Footer";
import { assets, blog_data } from "@/public/Assets/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Params {
  image: string | StaticImport;
  author: string;
  author_img: string | StaticImport;
  id: number;
  title: string;
  description: string;
}

const Page = ({ params }: { params: Params }) => {
  const [data, setData] = useState<Params | null>(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  // Use `useEffect` to call `fetchBlogData` when the component mounts
  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.blogstack_logo}
              width={180}
              height={40}
              alt="BlogStack Logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
            Get started
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-3xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rouneded-full"
            src={data.author_img}
            width={60}
            height={60}
            alt="Author: Firstname Lastname"
          />
          <p className="mt1- pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-1-">
        <Image
          src={data.image}
          alt="Blog Image"
          className="border border-white"
          width={800}
          height={800}
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1 : Self reflection and Goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere quam inventore quae asperiores nesciunt unde iusto error eos
          quos numquam corporis, architecto libero quas facilis eum atque
          maiores mollitia deserunt dignissimos reiciendis accusamus.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2 : Self reflection and Goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere quam inventore quae asperiores nesciunt unde iusto error eos
          quos numquam corporis, architecto libero quas facilis eum atque
          maiores mollitia deserunt dignissimos reiciendis accusamus.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3 : Self reflection and Goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere quam inventore quae asperiores nesciunt unde iusto error eos
          quos numquam corporis, architecto libero quas facilis eum atque
          maiores mollitia deserunt dignissimos reiciendis accusamus.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere quam inventore quae asperiores nesciunt unde iusto error eos
          quos numquam corporis, architecto libero quas facilis eum atque
          maiores mollitia deserunt dignissimos reiciendis accusamus.
        </p>

        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image
              src={assets.facebook_icon}
              width={40}
              height={40}
              alt="Facebook"
            />
            <Image
              src={assets.twitter_icon}
              width={40}
              height={40}
              alt="Facebook"
            />
            <Image
              src={assets.googleplus_icon}
              width={40}
              height={40}
              alt="Facebook"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
