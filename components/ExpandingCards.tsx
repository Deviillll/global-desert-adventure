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

export default function ExpandingCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-[130vh] px-4 md:px-10 flex flex-col items-center my-10 gap-10">
      <div className="flex flex-col md:gap-10 gap-4 w-full md:w-[80%]">
        {[0, 3].map((startIndex) => (
          <div
            key={startIndex}
            className="md:flex hidden justify-between gap-4 transition-all duration-500"
          >
            {cards.slice(startIndex, startIndex + 3).map((card, i) => {
              const absoluteIndex = startIndex + i;
              const isHovered = hoveredIndex === absoluteIndex;

              let width = "w-1/3";
              if (
                hoveredIndex !== null &&
                hoveredIndex >= startIndex &&
                hoveredIndex < startIndex + 3
              ) {
                width = isHovered ? "w-[50%]" : "w-[25%]";
              }

              return (
                <Card
                  key={card.id}
                  onMouseEnter={() => setHoveredIndex(absoluteIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    filter:
                      hoveredIndex === absoluteIndex
                        ? "saturate(100%) brightness(80%)"
                        : "saturate(0%) brightness(90%)",
                    backgroundImage: `url(${card.color})`,
                  }}
                  className={`${width}   h-[70vh] border-0 bg-cover bg-center transition-all duration-300 ease-in-out relative rounded-xl overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-orange-400/20 z-10  transition-transform duration-300"></div>
                  <div className="absolute bottom-0 w-full p-4 text-white z-10 group-hover:-translate-y-6 transition-transform duration-300">
                    <h2 className="text-lg font-bold">{card.title}</h2>
                  </div>
                  <div className="absolute bottom-0 w-full px-4 pb-4 pt-12 text-white  translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <p>{card.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        ))}

        {/* Mobile View */}
        <div className="flex flex-col gap-4 md:hidden">
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
                <div className={`absolute  w-full p-4  text-white z-10 transition-all ease-in-out duration-500 ${isActive ? "bottom-16" : "bottom-0"}`}>
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
        </div>
      </div>
    </div>
  );
}
