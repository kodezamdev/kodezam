import React from "react";
import Webdevelopment from "./Icons/Webdevelopment";

const ServiceCard = ({ children, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 sm:p-8 text-center">
      <div className="flex w-full justify-center py-2">{children}</div>
      <div>
        <h2 className="text-xl text-gray-800">{title}</h2>
        <p className="px-5 py-5 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
