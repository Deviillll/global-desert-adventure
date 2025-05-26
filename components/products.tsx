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
        image: "https://globaldesertadventure.com/wp-content/uploads/2025/04/yamaha.png",
    },
    {
        id: 2,
        title: "Dubai Quad Polaris 850cc Automatique",
        description: "Seats: 1-2 Seats Time: 60min-120min",
        price:"500,00 AED",
        image: "https://globaldesertadventure.com/wp-content/uploads/2025/04/polaris.png",
    },
    {
        id: 3,
        title: "Dubai Quad Yamaha Raptor Kids (90cc)",
        description: "Seats: 1-2 Seats Time: 60min-120min",
        price:"200,00 AED",
        image: "https://globaldesertadventure.com/wp-content/uploads/2025/04/yamaha-kids.png",
    },
    ];

const Products = (props: Props) => {
  return (
    <div className=" h-[150vh] lg:h-[70vh] w-screen flex flex-col lg:flex-row  gap-y-3 justify-center items-center lg:gap-x-10 py-5 md:py-0 px-3">
     {
        data.map((item) => (
        <Card key={item.id} className="w-full h-1/2 lg:w-[23%] lg:h-[85%] py-0 overflow-hidden text-center text-white bg-[#F08522] border-0  md:pb-7">
        <div className="h-1/2 ">
        <img src={item.image} alt="" className="h-full w-full object-center object-cover"/>
        </div>
        <CardHeader className="">
          <CardTitle className="text-sm md:text-xl font-semibold">{item.title}</CardTitle>
          <CardDescription className="text-white md:mt-4">
            {item.description}
          </CardDescription>
        
          <p className="text-sm font-semibold">{item.price}</p>
        </CardHeader>
       
        <CardFooter className=" flex justify-center md:items-center items-start">
          <button className="rounded-xl outline-2 outline-white px-4 py-1 cursor-pointer hover:bg-white hover:text-orange-400 transition-colors ease-linear duration-200" type="button">Book now</button>
        </CardFooter>
      </Card>
        ))
     }
    </div>
  );
};

export default Products;
