import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogCard = ({ title, body, id }) => {
  return (
    <Link href={`/${id}`} className="w-full flex items-center gap-5 mb-6">
      <div className="relative min-w-20 min-h-20">
        <Image
          className="rounded-xl object-cover"
          src={`https://picsum.photos/300/200?random=${id}`}
          alt="Blog Card Image"
          fill={true}
        />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="font-extralight text-gray-400 line-clamp-2 ">{body}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
