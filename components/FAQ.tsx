import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <div className="container my-10">
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-5xl font-bold uppercase text-white">
          faq <span className="text-orange-400">Dubai buggy</span> tours
        </h1>
      </div>

      <Accordion type="single" collapsible className="w-[90%] md:w-[75%] mx-auto space-y-4">
        {Array.from({ length: 5 }, (_, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="overflow-hidden rounded-xl border-none">
            {/* Question Box */}
            <AccordionTrigger className="bg-orange-400 px-6 md:py-4 transition-colors duration-200  ease-linear text-white  hover:bg-white hover:text-black text-left text-xs md:text-sm font-medium rounded-full">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </AccordionTrigger>

            {/* Answer Box */}
            <AccordionContent className=" text-white px-6 py-4 text-sm  ">
           <p>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid</p>
              libero nesciunt voluptate dicta quo
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
