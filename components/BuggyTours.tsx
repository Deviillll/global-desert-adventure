import React from "react";
import { MoveUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

type BuggyToursProps = {
  imageUrl?: string;
  description?: string;
  title?: string;
  colorTitle?: string;
  position?: string;
  bgPosition?: string;

};

const BuggyTours: React.FC<BuggyToursProps> = ({
  imageUrl,
  description,
  title,
  position,
  colorTitle ,
  bgPosition

}) => {
  return (
    <div
      className="h-[70vh] lg:h-[80vh] w-screen bg-no-repeat  bg-cover bg-center relative lg:bg-[length:140%] flex items-center justify-center lg:justify-end "
      style={{
        backgroundImage:
          `url(${imageUrl})`,
         backgroundPositionY: bgPosition || "17%",
         
       
      }} 
    >
        
      <div className="w-full h-full bg-black/30 absolute top-0 left-0 z-10 "></div>

      <Card className={`glass backdrop-blur-xs w-[90%] h-[80%]  lg:w-[570px] lg:h-[70vh] relative z-20   px-5  lg:right-[13%]  text-white rounded-3xl`}>
        <CardContent className="">
            <CardTitle className="uppercase text-2xl md:text-4xl lg:text-5xl w-[60%] lg:w-[85%]">{title}<span className="text-orange-400">{colorTitle}</span></CardTitle>
            <CardDescription className="py-9 text-white">
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

export default BuggyTours;
