"use client";

import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
};

export default page;
