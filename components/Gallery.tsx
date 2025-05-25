const images = [
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-5-Copy.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-4-1.png",
     rowSpan: "row-span-1",
  },
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-Copy.png",
  },
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/img-5r4yte4jmhsy3i0xeq9h6-700x70-1.png",
    
    rowSpan: "row-span-3",
  },
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-6.png",

    rowSpan: "row-span-2",

  },
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-1-2.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-1-1.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "https://globaldesertadventure.com/wp-content/uploads/2025/04/download-3-1.png",
   // rowSpan: "row-span-2",
    colSpan: "col-span-2",
  },
];

export default function ImageGrid() {
  return (
    <div className="min-h-screen py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold uppercase text-white ">
          Our <span className="text-orange-400">Dubai Desert</span> Camp Equipment
        </h1>
      </div>

      <div className="w-[70%] container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:auto-rows-[150px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative w-full h-full overflow-hidden rounded-lg ${
                img.colSpan || ""
              } ${img.rowSpan || ""}`}
            >
              <img
                src={img.src}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
