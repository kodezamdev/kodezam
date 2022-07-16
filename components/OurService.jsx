import React from "react";
import EcommerceSolution from "./Icons/EcommerceSolution";
import ErpSolution from "./Icons/ErpSolution";
import MobileDevlopment from "./Icons/MobileDevlopment";
import SoftwareDevelopment from "./Icons/SoftwareDevelopment";
import UiUx from "./Icons/UiUx";
import Webdevelopment from "./Icons/Webdevelopment";
import ServiceCard from "./ServiceCard";

export default function OurService() {
  return (
    <div className="container mx-auto px-8">
      <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl mb-5 font-medium">
          We have <span className="text-blue-700">Amazing Service</span>.
        </h1>
        <div className="flex justify-center">
          <p className="w-full md:w-1/2 text-center text-slate-600">
            Kodezam has solid experience and expertise for development of
            corporations and industries that need customized software. Our
            qualified and experienced software development team is ready for
            analyzing your business needs.
          </p>
        </div>
      </div>
      <section className="py-2 grid sm:grid-cols-4 grid-cols-1 gap-y-4 sm:gap-x-5 sm:gap-y-5">
        <ServiceCard
          title="Secure API Development"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <Webdevelopment />
        </ServiceCard>
        <ServiceCard
          title="Web Development"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <Webdevelopment />
        </ServiceCard>
        <ServiceCard
          title="Mobile Development"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <MobileDevlopment />
        </ServiceCard>
        <ServiceCard
          title="Software Development"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <SoftwareDevelopment />
        </ServiceCard>
        <ServiceCard
          title="E-commerce Solution"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <EcommerceSolution />
        </ServiceCard>
        <ServiceCard
          title="ERP Solution"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <ErpSolution />
        </ServiceCard>
        <ServiceCard
          title="ERP Solution"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <ErpSolution />
        </ServiceCard>
        <ServiceCard
          title="UI/UX Design"
          description="Our dedicated team of developers specializes in developing reliable, easy-to-consume, and well-documented custom APIs."
        >
          <UiUx />
        </ServiceCard>
      </section>
    </div>
  );
}
