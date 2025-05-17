"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import BlogOverlay from "@ui/BlogOverlay/blogoverlay";
import Button from "@ui/Button/Button";

export default function BlogPage() {
  const router = useRouter();
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  return (
    <div className="flex flex-col h-full w-full items-end justify-between ">

      <div className="sticky top-[750px] z-20 w-[50px]  flex justify-end items-start">
        <Image
          src="/icons/Add-blog.svg"
          alt="Add Blog Icon"
          width={48}
          height={48}
          className="cursor-pointer"
          onClick={openOverlay}
        />
      </div>

      {isOverlayOpen && <BlogOverlay onClose={closeOverlay} />}


      <div className="w-full flex justify-center mb-2">
        <Image
          src="/assets/blog.svg"
          alt="Blog"
          width={440}
          height={550}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

