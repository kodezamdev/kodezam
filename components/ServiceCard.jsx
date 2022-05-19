import React from "react";
import Webdevelopment from "./Icons/Webdevelopment";

const ServiceCard = ({ children, title }) => {
  return (
    <div className="bg-white text-center rounded-sm cursor-pointer shadow-sm">
      <div className="flex w-full justify-center py-10">{children}</div>
      <div>
        <h2 className="text-xl text-gray-800">{title}</h2>
        <p className="px-5 py-5 text-gray-700">
          We carry more than just good coding skills. Our experience makes us
          stand out from other web development.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
