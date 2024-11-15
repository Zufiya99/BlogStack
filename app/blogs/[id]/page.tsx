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
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  return data ? (
    <>
      <div className="bg-gray-50 py-6 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
            <Image
              src={assets.blogstack_logo}
              width={180}
              height={40}
              alt="BlogStack Logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1.5 px-4 sm:px-6 border border-gray-700 rounded-full hover:text-white hover:bg-primary transition duration-300">
            Get Started
          </button>
        </div>

        <div className="text-center my-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 max-w-[800px] mx-auto leading-tight">
            {data.title}
          </h1>
          <div className="flex items-center justify-center mt-8">
            <Image
              className="rounded-full border border-gray-200 shadow-lg"
              src={data.author_img}
              width={80}
              height={80}
              alt={`Author: ${data.author}`}
            />
            <p className="ml-4 text-lg text-primary font-semibold">{data.author}</p>
          </div>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 bg-white p-6 rounded-lg shadow-lg">
        <Image
          src={data.image}
          alt="Blog Image"
          className="w-full h-auto rounded-lg shadow-md"
          width={800}
          height={800}
        />

        <article className="prose prose-lg mt-8 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p>
            {data.description}
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Step 1: Self-Reflection
          </h3>
          <p>
            The first step in personal development is to reflect on your current
            situation. Ask yourself what areas of your life you want to improve.
            This may involve assessing your skills, values, and passions.
            Self-awareness is crucial in setting achievable goals.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Step 2: Define Your Goals
          </h3>
          <p>
            Once you have a clear understanding of yourself, it's time to define
            your goals. Make sure they are SMART—Specific, Measurable,
            Achievable, Relevant, and Time-bound. Clear goals provide direction
            and motivation as you work toward your personal development journey.
          </p>

          <h3 className="text-xl font-semibold mt-6">Step 3: Take Action</h3>
          <p>
            Action is the bridge between goals and accomplishment. Break down
            your goals into actionable steps and create a plan. Consistent
            effort and adaptability are key as you progress along your journey.
          </p>

          <h3 className="text-xl font-semibold mt-6">Conclusion</h3>
          <p>
            Personal development is an ongoing process that requires commitment
            and resilience. By engaging in self-reflection, defining your goals,
            and taking actionable steps, you can cultivate a fulfilling life and
            achieve your dreams. Remember, the journey is just as important as
            the destination.
          </p>
        </article>

        <div className="mt-12 text-center">
          <p className="font-semibold text-gray-700 mb-4">
            Share this article on social media
          </p>
          <div className="flex justify-center space-x-4">
            <Image
              src={assets.facebook_icon}
              width={40}
              height={40}
              alt="Share on Facebook"
              className="cursor-pointer hover:opacity-80"
            />
            <Image
              src={assets.twitter_icon}
              width={40}
              height={40}
              alt="Share on Twitter"
              className="cursor-pointer hover:opacity-80"
            />
            <Image
              src={assets.googleplus_icon}
              width={40}
              height={40}
              alt="Share on Google+"
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <p className="text-center mt-12 text-lg">Loading...</p>
  );
};

export default Page;


