import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { MoveUpRight } from "lucide-react";

const data = [
  {
    id: 1,
    title: "QUAD BIKING DUBAI",
    image:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-10.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, repellat perferendis iste doloribus quo libero error dolor vel sit itaque repudiandae veritatis laboriosam  ",
  },
  {
    id: 2,
    title: "DUNE BUGGY DUBAI",
    image:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-11.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, repellat perferendis iste doloribus quo libero error dolor vel sit itaque repudiandae veritatis laboriosam ",
  },
  {
    id: 3,
    title: "FAMILY ADVENTURE",
    image:
      "https://globaldesertadventure.com/wp-content/uploads/2025/04/buggy-can-am-maverick-xrs-turbo-4-places_5.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, repellat perferendis iste doloribus quo libero error dolor vel sit itaque repudiandae veritatis laboriosam  ",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-5 w-screen h-screen lg:h-[60vh] mt-4 overflow-hidden">
      {data.map((item) => (
        <Card
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          key={item.id}
          className=" w-[90%] h-[80%]  lg:w-[23%] lg:h-[80%] relative group  text-white rounded-xl bg-center bg-cover overflow-hidden border-none"
        >
          <div className="w-full h-full bg-black/30 group-hover:bg-black/50 group-active:bg-black/50 transition-colors ease-linear duration-200 absolute top-0 left-0 z-10"></div>

          <CardContent className="absolute top-0 left-0 z-20 text-center translate-y-[28vh] group-active:translate-y-[5vh]  lg:translate-y-[160%] lg:group-hover:translate-y-[50%] transition-all ease-in-out delay-100 duration-500">
            <CardTitle className="uppercase text-2xl  w-full">
              {item.title}
            </CardTitle>
            <CardDescription className=" pt-2 pb-4 text-sm text-white">
              {item.description}
            </CardDescription>
            <button className="px-5 text-white py-2 bg-orange-400 rounded-2xl text-sm capitalize ">
              view all tours
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Services;
