import React, { useState } from "react";
import { blog_data } from "@/public/Assets/assets";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <>
      <div className="flex justify-center gap-6 my-10">
        <button
          className={`${
            menu === "All"
              ? "bg-primary border text-white py-1 px-4 rounded-sm"
              : ""
          }`}
          onClick={() => setMenu("All")}
        >
          All
        </button>
        <button
          className={`${
            menu === "Technology"
              ? "bg-primary border text-white py-1 px-4 rounded-sm"
              : ""
          }`}
          onClick={() => setMenu("Technology")}
        >
          Technology
        </button>
        <button
          className={`${
            menu === "Startup"
              ? "bg-primary border text-white py-1 px-4 rounded-sm"
              : ""
          }`}
          onClick={() => setMenu("Startup")}
        >
          Startup
        </button>
        <button
          className={`${
            menu === "Lifestyle"
              ? "bg-primary border text-white py-1 px-4 rounded-sm"
              : ""
          }`}
          onClick={() => setMenu("Lifestyle")}
        >
          Lifestyle
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 xl:mx-24 place-items-center">
          {blog_data
            .filter((item) => menu === "All" || item.category === menu)
            .map((item) => (
              <BlogItem
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
