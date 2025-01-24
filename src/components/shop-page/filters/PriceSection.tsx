// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Slider } from "@/components/ui/slider";

// const PriceSection = () => {
//   return (
//     <Accordion type="single" collapsible defaultValue="filter-price">
//       <AccordionItem value="filter-price" className="border-none">
//         <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
//           Price
//         </AccordionTrigger>
//         <AccordionContent className="pt-4" contentClassName="overflow-visible">
//           <Slider
//             defaultValue={[50, 200]}
//             min={0}
//             max={250}
//             step={1}
//             label="$"
//           />
//           <div className="mb-3" />
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default PriceSection;





import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const PriceSection = ({ onPriceChange }: { onPriceChange: (range: [number, number]) => void }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    onPriceChange(value); // Pass the updated range to the parent
  };

  return (
    <Accordion type="single" collapsible defaultValue="filter-price" >
      <AccordionItem value="filter-price" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Price
        </AccordionTrigger>
        <AccordionContent className="pt-4" contentClassName="overflow-visible">
          <div className="w-fit mb-1 text-xs rounded-full  bg-gray-300 px-2 py-1 text-black">{priceRange[0]} to {priceRange[1]}</div>
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            min={0}
            max={250}
            step={1}
            label="$"
          />
          <div className="mb-3" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriceSection;








