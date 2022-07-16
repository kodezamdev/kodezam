import React from "react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 transition">
      <div className="container mx-auto px-16 text-center">
        <h1 className="text-slate-900 font-semibold text-4xl mb-5">
          Time to create your <br /> dream come true
        </h1>
        <p className="text-slate-600">
          We build your dream with the latest technology that can reach you
          exactly toward your dream.
        </p>
      </div>
    </div>
  );
}
