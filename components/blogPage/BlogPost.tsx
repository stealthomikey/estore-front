import React from 'react';
import { blog } from "@/images";
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  imageUrl: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt }) => {
  return (
    <article className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
      <div className="w-full md:w-40 h-60 md:h-auto relative flex-shrink-0">
        <Image
          src={blog}
          alt="Under Construction"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{excerpt}</p>
      </div>
    </article>
  );
};

export default BlogPost;
