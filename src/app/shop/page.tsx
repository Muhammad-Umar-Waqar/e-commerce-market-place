// 'use client'
// import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import MobileFilters from "@/components/shop-page/filters/MobileFilters";
// import Filters from "@/components/shop-page/filters";
// import { FiSliders } from "react-icons/fi";
// // import { usePathname } from 'next/navigation';
// import ProductCard from "@/components/reuse/ProductCard";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// import { getProducts, getWomensClothing } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";


// export const listners:any = {};
// export default  function ShopPage() {

 
//    const pathname = usePathname();
//   console.log("pathname: ", pathname); // Logs the current URL path


//   const [data,setData] = useState<any>();




//   useEffect(()=>{
//     // const fullUrl = window?.location.href;
//     // console.log("fullUrl", fullUrl);
    

//     const urlTextAfterHash = window.location.hash.slice(1);
// console.log("Hash Text:", urlTextAfterHash);

//     const  fetchDataUsingUrl = async (urlValue: any) => {
//       if(urlValue == "men-clothes"){
//         const arrivalProducts = await getProducts("men's clothing"); // Fetch product data
//         setData(arrivalProducts);
//       }
//       if(urlValue == "women-clothes"){
//         const topSelling = await getWomensClothing("women's clothing"); // Fetch product data
//         setData(topSelling);
//       }

    
//     }

//     fetchDataUsingUrl(urlTextAfterHash);
//   },[])

   

//   return (
//     <main className="pb-20">
//       <div className="mx-auto px-4 xl:px-0 max-w-frame">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <BreadcrumbShop />
//         <div className="flex md:space-x-5 items-start">
//           <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
//             <div className="flex items-center justify-between">
//               <span className="font-bold text-black text-xl">Filters</span>
//               <FiSliders className="text-2xl text-black/40" />
//             </div>
//             <Filters />
//           </div>
//           <div className="flex flex-col w-full space-y-5">
//             <div className="flex flex-col lg:flex-row lg:justify-between">
//               <div className="flex items-center justify-between">
//                 <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
//                 <MobileFilters />
//               </div>
//               <div className="flex flex-col sm:items-center sm:flex-row">
//                 <span className="text-sm md:text-base text-black/60 mr-3">
//                   Showing 1-10 of 100 Products
//                 </span>
//                 <div className="flex items-center">
//                   Sort by:{" "}
//                   <Select defaultValue="most-popular">
//                     <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="most-popular">Most Popular</SelectItem>
//                       <SelectItem value="low-price">Low Price</SelectItem>
//                       <SelectItem value="high-price">High Price</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//               {
//                data?.map((product:any) => (
//                 <ProductCard key={product.id} data={product} />
//               ))}
//             </div>
//             <hr className="border-t-black/10" />
//             <Pagination className="justify-between">
//               <PaginationPrevious href="#" className="border border-black/10" />
//               <PaginationContent>
//                 <PaginationItem>
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                     isActive
//                   >
//                     1
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     2
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem className="hidden lg:block">
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     3
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationEllipsis className="text-black/50 font-medium text-sm" />
//                 </PaginationItem>
//                 <PaginationItem className="hidden lg:block">
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     8
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem className="hidden sm:block">
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     9
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     10
//                   </PaginationLink>
//                 </PaginationItem>
//               </PaginationContent>

//               <PaginationNext href="#" className="border border-black/10" />
//             </Pagination>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// PROPER WORK BEFORE:





// 'use client'
// import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import MobileFilters from "@/components/shop-page/filters/MobileFilters";
// import Filters from "@/components/shop-page/filters";
// import { FiSliders } from "react-icons/fi";
// // import { usePathname } from 'next/navigation';
// import ProductCard from "@/components/reuse/ProductCard";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { getProducts, getProductswithoutCategory } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import { useSearchParams } from 'next/navigation'
// import { toast } from "react-toastify";

// export const listners:any = {};
// export default  function ShopPage() {
// const [loadingData,setLoadingData ] = useState<boolean>(false);
// const searchParams = useSearchParams();

//   useEffect(() => {
//     console.log('Search params changed:', searchParams.toString());
  
// const urlTextAfterHash = window.location.hash.slice(1);
// console.log("Hash Text:", urlTextAfterHash);
   
//     const  fetchDataUsingUrl = async (urlValue: any) => {

//       if(urlValue){
//       if(urlValue == "men-clothes"){
        
//           const arrivalProducts = await getProducts("men's clothing"); // Fetch product data
//           setData(arrivalProducts);
       
//       }
//       if(urlValue == "women-clothes"){

//         const topSelling = await getProducts("women's clothing"); // Fetch product data
//         setData(topSelling);

//       }

//       if(urlValue == "jewelery"){
//         const topSelling = await getProducts("jewelery"); // Fetch product data
//         setData(topSelling);
//        }

//       if(urlValue == "electronics"){
//         const topSelling = await getProducts("electronics"); // Fetch product data
//         setData(topSelling);
//       }
//       if(urlValue == "new-arrivals" || urlValue == "on-sale"  || urlValue =="brands" ){
//        const withoutCategoryProducts = await getProductswithoutCategory();
//        setData(withoutCategoryProducts);
//       }
//     } else{
//       const NoHash = await getProductswithoutCategory();
//       setData(NoHash);
//     }

//     }


//     try {
//   setLoadingData(true);
//   fetchDataUsingUrl(urlTextAfterHash);
// } catch (error) {
//   toast.info("Products Not Found");
// } finally{
//   setLoadingData(false);
// }


//   }, [searchParams]);


  


//   const [data,setData] = useState<any>();




   

//   return (
//     <main className="pb-20">
//       <div className="mx-auto px-4 xl:px-0 max-w-frame">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <BreadcrumbShop />
//         <div className="flex md:space-x-5 items-start">
//           <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
//             <div className="flex items-center justify-between">
//               <span className="font-bold text-black text-xl">Filters</span>
//               <FiSliders className="text-2xl text-black/40" />
//             </div>
//             <Filters />
//           </div>
//           <div className="flex flex-col w-full space-y-5">
//             <div className="flex flex-col lg:flex-row lg:justify-between">
//               <div className="flex items-center justify-between">
//                 <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
//                 <MobileFilters />
//               </div>
//               <div className="flex flex-col sm:items-center sm:flex-row">
//                 <span className="text-sm md:text-base text-black/60 mr-3">
//                   Showing 1-10 of 100 Products
//                 </span>
//                 <div className="flex items-center">
//                   Sort by:{" "}
//                   <Select defaultValue="most-popular">
//                     <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="most-popular">Most Popular</SelectItem>
//                       <SelectItem value="low-price">Low Price</SelectItem>
//                       <SelectItem value="high-price">High Price</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
//               {
//                 loadingData ?  (<div className="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl">
//                 <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
//                   <div className="flex justify-center">
//                     <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
//                       <span className="sr-only">Loading...</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>) : (
                
//                   data?.length > 0 ?  data.map((product:any) => (
//                     <ProductCard key={product.id} data={product} />
//                   ))
//                   : <h1>Data Not Exist</h1>
                  
// )
//               }
            
//             </div>
//             <hr className="border-t-black/10" />
//             <Pagination className="justify-between">
//               <PaginationPrevious href="#" className="border border-black/10" />
//               <PaginationContent>
//                 <PaginationItem>
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                     isActive
//                   >
//                     1
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     2
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem className="hidden lg:block">
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     3
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationEllipsis className="text-black/50 font-medium text-sm" />
//                 </PaginationItem>
//                 <PaginationItem className="hidden lg:block">
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     8
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem className="hidden sm:block">
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     9
//                   </PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink
//                     href="#"
//                     className="text-black/50 font-medium text-sm"
//                   >
//                     10
//                   </PaginationLink>
//                 </PaginationItem>
//               </PaginationContent>

//               <PaginationNext href="#" className="border border-black/10" />
//             </Pagination>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }




// LAtest Off ALl Time Before










'use client';
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import ProductCard from "@/components/reuse/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProducts, getProductswithoutCategory } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

// export const listners: any = {};
export default function ShopPage() {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any>();
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlTextAfterHash = window.location.hash.slice(1);

    const fetchDataUsingUrl = async (urlValue: any) => {
      try {
        setLoadingData(true);
        let fetchedData;

        if (urlValue) {
          if (urlValue === "men-clothes") {
            fetchedData = await getProducts("men's clothing");
          } else if (urlValue === "women-clothes") {
            fetchedData = await getProducts("women's clothing");
          } else if (urlValue === "jewelery") {
            fetchedData = await getProducts("jewelery");
          } else if (urlValue === "electronics") {
            fetchedData = await getProducts("electronics");
          } else if (
            urlValue === "new-arrivals" ||
            urlValue === "on-sale" ||
            urlValue === "brands"
          ) {
            fetchedData = await getProductswithoutCategory();
          }
        } else {
          fetchedData = await getProductswithoutCategory();
        }

        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        toast.info("Products Not Found");
      } finally {
        setLoadingData(false);
      }
    };

    fetchDataUsingUrl(urlTextAfterHash);
  }, [searchParams]);

  // Apply price filtering
  useEffect(() => {
    if (priceRange && data) {
      const [minPrice, maxPrice] = priceRange;
      const filtered = data.filter(
        (product: any) =>
          product.price >= minPrice && product.price <= maxPrice
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [priceRange, data]);

  return (
    <main className="pb-20">
      <div className="mx-auto px-4 xl:px-0 max-w-frame">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters onPriceChange={setPriceRange} />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
                <MobileFilters onPriceChange={setPriceRange}  />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing {filteredData?.length || 0} Products
                </span>
                <div className="flex items-center">
                  Sort by:{" "}
                  <Select defaultValue="most-popular">
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="low-price">Low Price</SelectItem>
                      <SelectItem value="high-price">High Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {loadingData ? (
                <div className="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl">
                  <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div
                      className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              ) : filteredData?.length > 0 ? (
                filteredData.map((product: any) => (
                  <ProductCard key={product.id} data={product} />
                ))
              ) : (
                <h1>Data Not Exist</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
