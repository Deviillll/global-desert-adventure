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

const SafetyInfo: React.FC<BuggyToursProps> = ({
  imageUrl,
  description,
  title,
  position,
  colorTitle ,
  bgPosition

}) => {
  return (
    <div
      className="h-[140vh] container  bg-no-repeat  bg-cover bg-center relative lg:bg-[length:170%] text-white flex flex-col lg:items-start items-center justify-center lg:justify-around "
      style={{
        backgroundImage:
          `url("https://globaldesertadventure.com/wp-content/uploads/2025/04/download-1-3.png")`,
         backgroundPositionY:  "50%",
         
       
      }} 
    >
        <h1 className="text-5xl font-semibold relative z-30 text-center w-full  mt-4">SAFETY INFO CAMP</h1>
        
      <div className="w-full h-full bg-black/30 absolute top-0 left-0 z-10 "></div>

      <Card className={`glass backdrop-blur-xs w-[90%] h-[full]  lg:w-[570px] lg:h-[100vh] relative z-20   px-5  lg:left-[10%]   rounded-3xl`}>
        <CardContent className="">
            {
              Array.from({ length: 4 }).map((_, index) => (
               <div key={index}>
                <CardTitle  className="uppercase text-2xl md:text-4xl lg:text-xl text-white w-[60%] lg:w-[85%] "> 
              <span className="bg-orange-400 w-5 h-5 inline-block rounded-full mr-3"></span>
               Safety Prioritization</CardTitle>
            <CardDescription className="py-3 text-white">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, repellat perferendis iste doloribus quo libero error dolor vel sit itaque repudiandae veritatis laboriosam explicabo odit ipsum recusandae corporis facere enim nam illo deserunt saepe maxime. Possimus nulla sapiente culpa temporibus.
            </CardDescription>
               </div>
              ))



            }
             {/* <button className="px-10 text-white py-3 outline-2 outline-white ">
            <MoveUpRight className="inline h-4 mr-2"/> Book now
          </button> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyInfo;
