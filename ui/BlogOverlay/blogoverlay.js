"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@ui/Button/Button";

export default function BlogOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="relative bg-white rounded-xl p-4 max-w-[90vw] max-h-[90vh] overflow-auto">
        <button
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <Image
          src="icons/New-blog.svg"
          alt="New Blog"
          width={600}
          height={800}
          className="rounded-xl"
        />
        <Button
          text="Post"
          className="w-[360px] h-[60px] mb-8 mx-auto text-2xl font-bold"
          onClick={() => {
            router.push("/blog-two");
          }}
          outlined={false}
        />
      </div>
    </div>
  );
}
