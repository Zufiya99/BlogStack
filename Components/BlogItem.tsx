import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface BlogItemProps {
  image: string | StaticImageData; // Allow both string and StaticImageData
  title: string;
  description: string;
  category: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ image, title, description, category }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105 w-full max-w-[330px]">
      {/* Image at the top with rounded corners */}
      <Image
        src={image}
        className="rounded-t-lg object-cover"
        alt="Blog Image"
        width={330}
        height={200} // Adjust height for better aspect ratio
      />
      <div className="p-4">
        <p className="text-sm text-gray-500 font-semibold mb-2">{category}</p>
        <h5 className="text-xl font-bold text-gray-800 mb-3">{title}</h5>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        {/* Read more link styled with primary color */}
        <div className="inline-flex items-center py-2 font-semibold text-center text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer">
          <span className="mr-1">Read more</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5-5 5m6-5H6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
