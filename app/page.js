"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button/Button";


export default function RootPage() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
	  <h1 className="text-4xl font-bold mb-8">Welcome to Heal U</h1>


      <Link href="/home">
        <Button
          text="Go to Home Page"
          onClick={() => {}}
          fullWidth={false}
          outlined={true}
        />
      </Link>
    </main>
  );
}
