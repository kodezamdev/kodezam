import React from "react";

export default function Hero() {
  return (
    <div className="flex">
      <div>
        <div className="relative group py-32">
          <div
            className="absolute z-0 duration-1000 -inset-2 transitiona-all opacity-20 rounded-xl blur-lg filter group-hover:opacity-10 group-hover:-inset-1 group-hover:duration-200"
            style={{
              background:
                "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)",
            }}
          ></div>
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
      </div>
      <div className="relative group py-32">
        <div
          className="absolute z-0 duration-1000 -inset-2 transitiona-all opacity-20 rounded-xl blur-lg filter group-hover:opacity-10 group-hover:-inset-1 group-hover:duration-200"
          style={{
            background:
              "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)",
          }}
        ></div>
        <div className="px-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi
          necessitatibus, laudantium, minus a id reprehenderit corporis sint
          dolor fugit eos officiis autem quisquam illo nostrum labore, vero fuga
          vitae.
        </div>
      </div>
    </div>
  );
}
