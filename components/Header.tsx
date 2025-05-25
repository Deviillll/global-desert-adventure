"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

interface CarousselData {
  id: number;
  title: string;
  image: string;
  width?: string;
}
const carousselData: CarousselData[] = [
  {
    id: 1,
    title: "Global DESERT Adventure DUNE  QUAD DUBAI",
    image:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-8.png",
      width: "lg:w-[63%] w-full"
  },
  {
    id: 2,
    title: "Global DESERT Adventure DUNE BUGGY DUBAI",
    image:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-9.png",
      width: "lg:w-[55%] w-full"
  },
  {
    id: 3,
    title: "Global DESERT Adventure DUNE BUGGY DUBAI",
    image:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-7.png",
      width: "lg:w-[43%] w-full"
  },
];

export function Header() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full max-w-screen overflow-x-hidden "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      data-carousel="slide"
      
    >
      <CarouselContent className="lg:mt-24 mt-20">
        {carousselData.map((item) => (
          <CarouselItem key={item.id}>
            <div className="">
              <Card
                className="rounded-none w-full h-[55vh] md:h-[calc(100vh-6rem)] bg-cover bg-center bg-no-repeat border-none relative "
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="w-full h-full bg-black/35 absolute top-0 left-0 z-10 "></div>
                <CardContent className="flex flex-col items-center justify-center gap-y-8  relative z-20 text-white w-full h-full text-center">
                  <div className={`   ${ item.width} uppercase`}>
                    <h2 className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-semibold md:tracking-wide md:leading-14 ">{item.title}</h2>
                    </div>
                    <div className={`w-full text-sm ${item.id == 1 ? "lg:w-[65%]" : item.id == 2 ? "lg:w-[55%]" : "lg:w-[50%]"} line-clamp-2 md:line-clamp-0`}>
                        <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Soluta modi aliquid tempore culpa esse odit eligendi,
                      quidem fugit dolor cumque
                    </p>
                    </div>
                    <div className="flex gap-x-[18px]">
                        <img  className="size-20 sm:size-28 md:size-32 lg:size-36 rounded-md" src="https://globaldesertadventure.com/wp-content/uploads/2025/04/1-2-300x300.png" alt="" />
                        <img className="size-20 sm:size-28 md:size-32 lg:size-36 rounded-md" src="https://globaldesertadventure.com/wp-content/uploads/2025/04/2-3-300x300.png" alt=""/>
                        <img  className="size-20 sm:size-28 md:size-32 lg:size-36 rounded-md"src="https://globaldesertadventure.com/wp-content/uploads/2025/04/3-1-300x300.png" alt="" />
                       
                    </div>
                    <div>
                         <button className="bg-orange-400 rounded-r-md  px-6 py-2 rounded-br-3xl">Explore More</button>
                    </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
