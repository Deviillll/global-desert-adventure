"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";

const cards = [
  {
    id: 1,
    title: "Card 1",
    color:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/early-bird-can-am-x3.webp",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Card 2",
    color:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/buggy-can-am-maverick-xrs-turbo-2-places-_5.webp",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Card 3",
    color:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/buggy-can-am-maverick-xrs-turbo-4-places_5-1.webp",
    description: "Description 3",
  },
  {
    id: 4,
    title: "Card 4",
    color:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/can-am-x3-4-seater.webp",
    description: "Description 4",
  },
  {
    id: 5,
    title: "card 5",
    color:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-13.png",
    description: "Description 5",
  },
  {
    id: 6,
    title: "card 6",
    color:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/dubai-buggy-polaris-rzr-kids_2.webp",
    description: "Description 6",
  },
];

export default function Blog() {


  return (
    <div className="min-h-[130vh] px-4 md:px-10 flex flex-col items-center my-10 gap-10 container">
      <div className="text-center my-5">
        <h1 className="text-3xl md:text-5xl font-bold uppercase text-white">
          our <span className="text-orange-400">blog</span> articles
        </h1>
      </div>
      <div className="flex flex-col md:gap-10 gap-4 w-full md:w-[80%]">
        {[0, 3].map((startIndex) => (
          <div
            key={startIndex}
            className="flex flex-col md:flex-row items-center jmd:ustify-between gap-y-5 md:gap-y-0 md:gap-x-10 transition-all duration-500"
          >
            {cards.slice(startIndex, startIndex + 3).map((card, i) => {
           

              return (
                <Card
                  key={card.id}
             
                  style={{
              
                    backgroundImage: `url(${card.color})`,
                  }}
                  className={`md:w-1/3 w-[90%] h-[43vh]  md:h-[55vh] border-0 bg-cover rounded-none bg-center transition-all duration-300 ease-in-out relative overflow-hidden group`}
                >
                   <div
                    className="absolute top-0 right-0  w-[400px] h-[0px] bg-orange-400/90 z-[8] transition-all duration-500 group-hover:h-[500px] origin-bottom-left"
                    style={{
                     clipPath: "polygon(100% 0, 0 0, 100% 38%)",
                    }}
                  ></div>
                  <div
                    className="absolute top-0  w-[300px] h-[400px] bg-white z-10 transition-all duration-500 group-hover:w-[1000px] origin-bottom-left"
                    style={{
                      clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
                    }}
                  ></div>

                  <div className="absolute top-[70%] w-full p-4 text-orange-400 z-[30] group-hover:-translate-y-6 transition-transform duration-300">
                    <h2 className="text-lg font-bold">{card.title}</h2>
                  </div>
                  <div className="absolute top-[70%] w-full px-4 pb-4 pt-12 text-black  transition-transform duration-400">
                    <p>{card.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        ))}

        {/* Mobile View */}
        {/* <div className="flex flex-col gap-4 md:hidden">
          {cards.map((card, index) => {
            const isActive = clickedIndex === index;
            return (
              <Card
                style={{
                  filter:
                    hoveredIndex === index || isActive
                      ? "saturate(100%) brightness(80%)"
                      : "saturate(0%) brightness(90%)",
                  backgroundImage: `url(${card.color})`,
                }}
                key={card.id}
                onClick={() =>
                  setClickedIndex(clickedIndex === index ? null : index)
                }
                className={`w-full h-[35vh] ${card.color} rounded-xl overflow-hidden relative transition-all duration-500 border-0 bg-cover bg-center`}
              >
                <div
                  className={`absolute  w-full p-4  text-white z-10 transition-all ease-in-out duration-500 ${
                    isActive ? "bottom-16" : "bottom-0"
                  }`}
                >
                  <h2 className="text-lg font-bold">{card.title}</h2>
                </div>
                <div
                  className={`absolute bottom-0 w-full px-4 pb-4 pt-12 text-white  transition-transform duration-500 ${
                    isActive ? "-translate-y-10" : "translate-y-full"
                  }`}
                >
                  <p>{card.description}</p>
                </div>
              </Card>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
