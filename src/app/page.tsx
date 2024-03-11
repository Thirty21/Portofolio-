import Hero from "@/component/hero";
import Navbar from "@/component/navbar";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-5 sm:mx-auto mt-8 flex justify-between items-center">
        <Hero />
      </div>
      {/* <Link href="/posts">Post</Link> */}
    </div>
  );
}
