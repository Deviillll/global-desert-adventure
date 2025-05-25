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
    <div className=" container my-10">
         <div className="text-center my-10">
        <h1 className="text-3xl md:text-5xl font-bold uppercase text-white ">
          faq <span className="text-orange-400">Dubai buggy</span> tours
        </h1>
      </div>
      <Accordion type="single" collapsible className="space-y-4 w-[80%] mx-auto my-10">
        {
            Array.from({ length: 5 }, (_, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index} className="bg-orange-400 rounded-full px-8 text-white outline-0">
          <AccordionTrigger>Is it accessible {index+1}?</AccordionTrigger>
          <AccordionContent className="bg-transparent">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
            ))
        }
      </Accordion>
    </div>
  );
};

export default FAQ;
