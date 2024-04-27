import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
}

const Page = async ({ params }) => {
  const post = await getPost(params.id);

  if (!post.title) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24 w-full">
      <div className="relative w-full min-h-screen mb-10">
        <Image
          className="rounded-xl object-cover"
          src={`https://picsum.photos/960/400?random=${post.id}`}
          alt="Blog Image"
          fill
        />
      </div>
      <div>
        <h3 className="font-bold">{post.title}</h3>
        <p className="font-extralight text-gray-400 ">{post.body}</p>
      </div>
    </div>
  );
};

export default Page;
