// "use client";

// import { Product } from "@/types/product.types";
// import Image from "next/image";
// import React, { useState } from "react";

// const PhotoSection = ({ data }: { data: Product }) => {
//   const [selected, setSelected] = useState<string>(data.srcUrl);

//   return (
   
//      <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
//         <Image
//           src={selected}
//           width={333}
//           height={430}
//           className="rounded-md md:h-auto md:w-auto h-full w-full  object-cover hover:scale-110 transition-all duration-500 "
//           alt={data.title}
//           priority
//           unoptimized
//         />
//       </div>
    
//   );
// };

// export default PhotoSection;


















"use client";

import { Product } from "@/types/product.types";
import Image from "next/image";
import React, { useState } from "react";

const PhotoSection = ({ data }: { data: Product }) => {
  const [selected, setSelected] = useState<string>(data.srcUrl);

  return (
   
     <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
        <Image
          src={selected}
          width={333}
          height={430}
          className="rounded-md md:h-auto md:w-auto h-[80%] w-[80%]   hover:scale-110 transition-all duration-500 "
          alt={data.title}
          priority
          unoptimized
        />
      </div>
    
  );
};

export default PhotoSection;
