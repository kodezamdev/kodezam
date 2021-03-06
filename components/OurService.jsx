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
          description="We carry more than just good coding 
skills. Our experience makes us stand 
out from other web development."
        >
          <Webdevelopment />
        </ServiceCard>
        <ServiceCard
          title="Mobile Development"
          description="Create complex enterprise software, ensure reliable software integration, modernise your legacy system."
        >
          <MobileDevlopment />
        </ServiceCard>
        <ServiceCard
          title="Software Development"
          description="We build functional software for your businesses totally customized according to your business structure."
        >
          <SoftwareDevelopment />
        </ServiceCard>
        <ServiceCard
          title="E-commerce Solution"
          description="We offer a diverse range of ecommerce software, packages & shopping carts that guarantee best value for your investment."
        >
          <EcommerceSolution />
        </ServiceCard>
        <ServiceCard
          title="ERP Solution"
          description="Ensuring cost reduction and detailed forecasts, our ERP systems yield resilience and agility to your business."
        >
          <ErpSolution />
        </ServiceCard>
        <ServiceCard
          title="ERP Solution"
          description="Build the product you need on time with an experienced team that uses a clear and effective design process."
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
