import React from "react";
import { MoveUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const LandingAbout = () => {
  return (
    <div
      className="h-[70vh] lg:h-[85vh] w-screen bg-no-repeat bg-cover  relative flex items-center  "
      style={{
        backgroundImage:
          "url('https://globaldesertadventure.com/wp-content/uploads/2025/04/family-day-out-can-am-x3_2.webp')",
        backgroundPositionY:"17%",
       
      }} 
    >
        
      <div className="w-full h-full bg-black/40 absolute top-0 left-0 z-10 "></div>

      <Card className="glass w-[90%] h-[80%] backdrop-blur-sm lg:w-[570px] lg:h-[70vh] relative z-20 left-6 lg:left-48 px-5   text-white rounded-3xl ">
        <CardContent className="">
            <CardTitle className="uppercase text-2xl md:text-4xl lg:text-5xl w-[80%] lg:w-[85%]">Offers dune buggy <span className="text-orange-400">tours</span></CardTitle>
            <CardDescription className="py-3 md:py-9 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, repellat perferendis iste doloribus quo libero error dolor vel sit itaque repudiandae veritatis laboriosam explicabo odit ipsum recusandae corporis facere enim nam illo deserunt saepe maxime. Possimus nulla sapiente culpa temporibus.
            </CardDescription>
             <button className="px-10 text-white py-3 outline-2 outline-white ">
            <MoveUpRight className="inline h-4 mr-2"/> Book now
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingAbout;
