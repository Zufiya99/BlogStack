import dotenv from 'dotenv';

dotenv.config();

// Import necessary modules and functions
import { connectDB } from "@/lib/config/db"; // Ensure this import path is correct
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { BlogModel } from "@/lib/models/BlogModel";

// Function to load the database connection
const LoadDB = async (): Promise<void> => {
  await connectDB();
};

// Call the function to load the database
LoadDB();

// Define the GET request handler
export const GET = async (): Promise<NextResponse> => {
  console.log("GET request");
  return NextResponse.json({ msg: "API working" });
};

// Define the POST request handler
export const POST = async (request: Request): Promise<NextResponse> => {
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get("image") as File; // Type assertion to specify 'image' is a File

  if (!image) {
    // Check if the image exists
    return NextResponse.json({ error: "Image not provided" }, { status: 400 });
  }

  // Read image data as an array buffer
  const imageByteData = await image.arrayBuffer(); // This reads the image data as an ArrayBuffer, which is a low-level representation of binary data.
  const buffer = Buffer.from(imageByteData); // This converts the ArrayBuffer into a Buffer, which is a Node.js type that represents a chunk of memory. Buffers are commonly used for binary data.
  const path = `./public/${timestamp}_${image.name}`;

  // Write the image to the file system
  await writeFile(path, buffer);

  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    author_img: `${formData.get("author_img")}`,
    image: imgUrl,
  };

  await BlogModel.create(blogData);

  console.log("Blog saved to the database");

  return NextResponse.json({
    success: true,
    msg: "Blog added to the database",
  });
};
