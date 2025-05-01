"use client";

import React from "react";
import Link from "next/link";
import Button from "../ui/Button/Button";
import SmallButton from '../ui/Button-s/Button-s';

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SmallButton onClick={() => alert('Help info')} tooltip="Need help?" />
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
