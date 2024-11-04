import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogItemProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  category: string;
  id: number;
}

const BlogItem: React.FC<BlogItemProps> = ({
  image,
  title,
  description,
  category,
  id,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105 w-full max-w-[330px]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          className="rounded-t-lg object-cover"
          alt="Blog Image"
          width={330}
          height={200}
        />
      </Link>
      <div className="p-4">
        <p className="text-sm text-gray-500 font-semibold mb-2">{category}</p>
        <h5 className="text-xl font-bold text-gray-800 mb-3">{title}</h5>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        <div className="inline-flex items-center py-2 font-semibold text-center text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer">
          <Link href={`/blogs/${id}`} className="mr-1">Read more</Link>
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
