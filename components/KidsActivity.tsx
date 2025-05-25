import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

type Props = {};
const data = [
    {
        id: 1,
        title: "Dubai Quad Yamaha Raptor 700Cc Manuel (1h)",
        description: "Seats: 1-2 Seats Time: 60min-120min",
        price:"500,00 AED",
        image: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-3.png",
    },
    {
        id: 2,
        title: "Dubai Quad Polaris 850cc Automatique",
        description: "Seats: 1-2 Seats Time: 60min-120min",
        price:"500,00 AED",
        image: "https://globaldesertadventure.com/wp-content/uploads/2025/04/1-1.png",
    },
    {
        id: 3,
        title: "Dubai Quad Yamaha Raptor Kids (90cc)",
        description: "Seats: 1-2 Seats Time: 60min-120min",
        price:"200,00 AED",
        image: "https://globaldesertadventure.com/wp-content/uploads/2025/04/2-2.png",
    },
    ];

const KidsActivity = (props: Props) => {
  return (
    <div className=" h-[150vh] lg:h-[70vh]  w-screen  px-5 text-center text-white py-5 md:py-0   flex flex-col justify-evenly items-center">
       <div className="space-y-4 mb-5 md:mb-0">
         <h1 className="text-5xl font-semibold uppercase">Our <span className="text-orange-400">Dubai Desert</span> Kids Activities</h1>
        <p className="text-sm">Join us for an unforgettable day of family fun and create memories that will last a lifetime.</p>
       </div>
     <div className="flex flex-col lg:flex-row  gap-y-3 justify-center items-center lg:gap-x-10  w-screen h-full">
        {
        data.map((item) => (
        <Card key={item.id} className="w-full h-1/2 lg:w-[23%] lg:h-[75%] bg-transparent rounded-none py-0 overflow-hidden text-center border-0 ">
       
        <img src={item.image} alt="" className="h-full w-[90%] mx-auto object-center object-cover"/>
     
        
      </Card>
        ))
     }
     </div>
    </div>
  );
};

export default KidsActivity;
