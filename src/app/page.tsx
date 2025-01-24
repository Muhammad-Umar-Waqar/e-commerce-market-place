import ProductListSec from "@/components/reuse/ProductListSec";
// import Brands from "@/compoonents/homepage/Brands";
import DressStyle from "@/components/homepage/DStyleSec";
import Reviews from "@/components/homepage/ReviewsSec";
// import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
import { Separator } from "@/components/ui/separator";
import { cn, reviewsData } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { getProducts } from "@/lib/utils";



// export const ArrivalData: Product[] = [
//   {
//     id: 1,
//     title: "T-shirt with Tape Details",
//     srcUrl: "/images/pic1.png",
//     // gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 120,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Skinny Fit Jeans",
//     srcUrl: "/images/pic2.png",
//     // gallery: ["/images/pic2.png"],
//     price: 260,
//     discount: {
//       amount: 0,
//       percentage: 20,
//     },
//     rating: 3.5,
//   },
//   {
//     id: 3,
//     title: "Chechered Shirt",
//     srcUrl: "/images/pic3.png",
//     // gallery: ["/images/pic3.png"],
//     price: 180,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     title: "Sleeve Striped T-shirt",
//     srcUrl: "/images/pic4.png",
//     // gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 160,
//     discount: {
//       amount: 0,
//       percentage: 30,
//     },
//     rating: 4.5,
//   },
// ];

// export const topSellingData: Product[] = [
//   {
//     id: 5,
//     title: "Vertical Striped Shirt",
//     srcUrl: "/images/pic5.png",
//     // gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 232,
//     discount: {
//       amount: 0,
//       percentage: 20,
//     },
//     rating: 5.0,
//   },
//   {
//     id: 6,
//     title: "Courage Graphic T-shirt",
//     srcUrl: "/images/pic6.png",
//     // gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 145,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.0,
//   },
//   {
//     id: 7,
//     title: "Loose Fit Bermuda Shorts",
//     srcUrl: "/images/pic7.png",
//     // gallery: ["/images/pic7.png"],
//     price: 80,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 3.0,
//   },
//   {
//     id: 8,
//     title: "Faded Skinny Jeans",
//     srcUrl: "/images/pic8.png",
//     // gallery: ["/images/pic8.png"],
//     price: 210,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
// ];



// export const relatedProductData: Product[] = [
//   {
//     id: 12,
//     title: "Polo with Contrast Trims",
//     srcUrl: "/images/pic12.png",
//     // gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 242,
//     discount: {
//       amount: 0,
//       percentage: 20,
//     },
//     rating: 4.0,
//   },
//   {
//     id: 13,
//     title: "Gradient Graphic T-shirt",
//     srcUrl: "/images/pic13.png",
//     // gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 145,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 3.5,
//   },
//   {
//     id: 14,
//     title: "Polo with Tipping Details",
//     srcUrl: "/images/pic14.png",
//     // gallery: ["/images/pic14.png"],
//     price: 180,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
//   {
//     id: 15,
//     title: "Black Striped T-shirt",
//     srcUrl: "/images/pic15.png",
//     // gallery: ["/images/pic15.png"],
//     price: 150,
//     discount: {
//       amount: 0,
//       percentage: 30,
//     },
//     rating: 5.0,
//   },
// ];



const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/icons/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/icons/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/icons/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin-klein-logo.svg",
  },
];





export default async function Home() {


  const arrivalProducts = await getProducts("men's clothing"); // Fetch product data
  const topSelling = await getProducts("women's clothing"); // Fetch product data


  console.log("PR", topSelling);
  
  return (
    <>
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <h2
            className={cn([
              integralCF.className,
              "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8",
            ])}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <Link
              href="/shop"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <Separator
              className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <Separator
              className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                3000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </section>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            priority
            src="/icons/big-star.svg"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px]"
          />
          <Image
            priority
            src="/icons/small-star.svg"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14"
          />
        </section>
      </div>
    </header>



    {/* Brands Section */}
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={0}
            width={0}
            alt={brand.id}
            className="h-auto w-auto max-w-[95px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
          />
        ))}
      </div>
    </div>


      <main className="mt-[50px] mb-[50px] sm:mt-[72px] sm:mb-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={arrivalProducts}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSelling}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}



































// import ProductListSec from "@/components/reuse/ProductListSec";
// import Brands from "@/components/homepage/Brands";
// import DressStyle from "@/components/homepage/DStyleSec";
// import Reviews from "@/components/homepage/ReviewsSec";
// import { Product } from "@/types/product.types";
// import { Review } from "@/types/review.types";
// import { Separator } from "@/components/ui/separator";
// import { cn } from "@/lib/utils";
// import { integralCF } from "@/styles/fonts";
// import Image from "next/image";
// import Link from "next/link";
// import { GetServerSideProps } from "next";
// import { client } from "@/sanity/lib/client";

// export const getServerSideProps: GetServerSideProps = async () => {
//   const products = await client.fetch(
//     `*[_type=="product"][0..4]{
//       "id": _id,
//       "title": name,
//       description,
//       rating,
//       "srcUrl": image.asset->url,
//       price,
//       "category": tags[0],
//       "discount": {
//         "percentage": discountPercentage,
//         "amount": 0
//       }
//     }`
//   );
//   return { props: { products } };
// };







//   const products = await  getProducts();
//   console.log('Fetched Products:', products); 


// export const ArrivalData: Product[] = products;
// // [
// //   {
// //     id: 1,
// //     title: "T-shirt with Tape Details",
// //     srcUrl: "/images/pic1.png",
// //     // gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
// //     price: 120,
// //     discount: {
// //       amount: 0,
// //       percentage: 0,
// //     },
// //     rating: 4.5,
// //   },
// //   {
// //     id: 2,
// //     title: "Skinny Fit Jeans",
// //     srcUrl: "/images/pic2.png",
// //     // gallery: ["/images/pic2.png"],
// //     price: 260,
// //     discount: {
// //       amount: 0,
// //       percentage: 20,
// //     },
// //     rating: 3.5,
// //   },
// //   {
// //     id: 3,
// //     title: "Chechered Shirt",
// //     srcUrl: "/images/pic3.png",
// //     // gallery: ["/images/pic3.png"],
// //     price: 180,
// //     discount: {
// //       amount: 0,
// //       percentage: 0,
// //     },
// //     rating: 4.5,
// //   },
// //   {
// //     id: 4,
// //     title: "Sleeve Striped T-shirt",
// //     srcUrl: "/images/pic4.png",
// //     // gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
// //     price: 160,
// //     discount: {
// //       amount: 0,
// //       percentage: 30,
// //     },
// //     rating: 4.5,
// //   },
// // ];

// export const topSellingData: Product[] = [
//   {
//     id: 5,
//     title: "Vertical Striped Shirt",
//     srcUrl: "/images/pic5.png",
//     // gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 232,
//     discount: {
//       amount: 0,
//       percentage: 20,
//     },
//     rating: 5.0,
//   },
//   {
//     id: 6,
//     title: "Courage Graphic T-shirt",
//     srcUrl: "/images/pic6.png",
//     // gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 145,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.0,
//   },
//   {
//     id: 7,
//     title: "Loose Fit Bermuda Shorts",
//     srcUrl: "/images/pic7.png",
//     // gallery: ["/images/pic7.png"],
//     price: 80,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 3.0,
//   },
//   {
//     id: 8,
//     title: "Faded Skinny Jeans",
//     srcUrl: "/images/pic8.png",
//     // gallery: ["/images/pic8.png"],
//     price: 210,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
// ];

// export const relatedProductData: Product[] = [
//   {
//     id: 12,
//     title: "Polo with Contrast Trims",
//     srcUrl: "/images/pic12.png",
//     // gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 242,
//     discount: {
//       amount: 0,
//       percentage: 20,
//     },
//     rating: 4.0,
//   },
//   {
//     id: 13,
//     title: "Gradient Graphic T-shirt",
//     srcUrl: "/images/pic13.png",
//     // gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 145,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 3.5,
//   },
//   {
//     id: 14,
//     title: "Polo with Tipping Details",
//     srcUrl: "/images/pic14.png",
//     // gallery: ["/images/pic14.png"],
//     price: 180,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
//   {
//     id: 15,
//     title: "Black Striped T-shirt",
//     srcUrl: "/images/pic15.png",
//     // gallery: ["/images/pic15.png"],
//     price: 150,
//     discount: {
//       amount: 0,
//       percentage: 30,
//     },
//     rating: 5.0,
//   },
// ];

// export const reviewsData: Review[] = [
//   {
//     id: 1,
//     user: "Alex K.",
//     content:
//       '"Finding clothes that align with my personal style used to be a challenge until I discovered Taha Sidd. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
//     rating: 5,
//     date: "August 14, 2023",
//   },
//   {
//     id: 2,
//     user: "Sarah M.",
//     content: `"I'm blown away by the quality and style of the clothes I received from Taha Sidd. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
//     rating: 5,
//     date: "August 15, 2023",
//   },
//   {
//     id: 3,
//     user: "Ethan R.",
//     content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
//     rating: 5,
//     date: "August 16, 2023",
//   },
//   {
//     id: 4,
//     user: "Olivia P.",
//     content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
//     rating: 5,
//     date: "August 17, 2023",
//   },
//   {
//     id: 5,
//     user: "Liam K.",
//     content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
//     rating: 5,
//     date: "August 18, 2023",
//   },
//   {
//     id: 6,
//     user: "Samantha D.",
//     content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
//     rating: 5,
//     date: "August 19, 2023",
//   },
// ];


// const brandsData: { id: string; srcUrl: string }[] = [
//   {
//     id: "versace",
//     srcUrl: "/icons/versace-logo.svg",
//   },
//   {
//     id: "zara",
//     srcUrl: "/icons/zara-logo.svg",
//   },
//   {
//     id: "gucci",
//     srcUrl: "/icons/gucci-logo.svg",
//   },
//   {
//     id: "prada",
//     srcUrl: "/icons/prada-logo.svg",
//   },
//   {
//     id: "calvin-klein",
//     srcUrl: "/icons/calvin-klein-logo.svg",
//   },
// ];



// export default function Home({
//   products,
// }: {
//   products: Product[];
// }) {


  
// const topSellingData: Product[] = [
//   {
//     id: 5,
//     title: "Vertical Striped Shirt",
//     srcUrl: "/images/pic5.png",
//     // gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 232,
//     discount: {
//       amount: 0,
//       percentage: 20,
//     },
//     rating: 5.0,
//   },
//   {
//     id: 6,
//     title: "Courage Graphic T-shirt",
//     srcUrl: "/images/pic6.png",
//     // gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 145,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.0,
//   },
//   {
//     id: 7,
//     title: "Loose Fit Bermuda Shorts",
//     srcUrl: "/images/pic7.png",
//     // gallery: ["/images/pic7.png"],
//     price: 80,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 3.0,
//   },
//   {
//     id: 8,
//     title: "Faded Skinny Jeans",
//     srcUrl: "/images/pic8.png",
//     // gallery: ["/images/pic8.png"],
//     price: 210,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
// ];

//  const relatedProductData: Product[] = [
//   {
//     id: 12,
//     title: "Polo with Contrast Trims",
//     srcUrl: "/images/pic12.png",
//     // gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 242,
//     discount: {
//       amount: 0,
//       percentage: 20,
//     },
//     rating: 4.0,
//   },
//   {
//     id: 13,
//     title: "Gradient Graphic T-shirt",
//     srcUrl: "/images/pic13.png",
//     // gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
//     price: 145,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 3.5,
//   },
//   {
//     id: 14,
//     title: "Polo with Tipping Details",
//     srcUrl: "/images/pic14.png",
//     // gallery: ["/images/pic14.png"],
//     price: 180,
//     discount: {
//       amount: 0,
//       percentage: 0,
//     },
//     rating: 4.5,
//   },
//   {
//     id: 15,
//     title: "Black Striped T-shirt",
//     srcUrl: "/images/pic15.png",
//     // gallery: ["/images/pic15.png"],
//     price: 150,
//     discount: {
//       amount: 0,
//       percentage: 30,
//     },
//     rating: 5.0,
//   },
// ];

//  const reviewsData: Review[] = [
//   {
//     id: 1,
//     user: "Alex K.",
//     content:
//       '"Finding clothes that align with my personal style used to be a challenge until I discovered Taha Sidd. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
//     rating: 5,
//     date: "August 14, 2023",
//   },
//   {
//     id: 2,
//     user: "Sarah M.",
//     content: `"I'm blown away by the quality and style of the clothes I received from Taha Sidd. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
//     rating: 5,
//     date: "August 15, 2023",
//   },
//   {
//     id: 3,
//     user: "Ethan R.",
//     content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
//     rating: 5,
//     date: "August 16, 2023",
//   },
//   {
//     id: 4,
//     user: "Olivia P.",
//     content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
//     rating: 5,
//     date: "August 17, 2023",
//   },
//   {
//     id: 5,
//     user: "Liam K.",
//     content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
//     rating: 5,
//     date: "August 18, 2023",
//   },
//   {
//     id: 6,
//     user: "Samantha D.",
//     content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
//     rating: 5,
//     date: "August 19, 2023",
//   },
// ];


// const brandsData: { id: string; srcUrl: string }[] = [
//   {
//     id: "versace",
//     srcUrl: "/icons/versace-logo.svg",
//   },
//   {
//     id: "zara",
//     srcUrl: "/icons/zara-logo.svg",
//   },
//   {
//     id: "gucci",
//     srcUrl: "/icons/gucci-logo.svg",
//   },
//   {
//     id: "prada",
//     srcUrl: "/icons/prada-logo.svg",
//   },
//   {
//     id: "calvin-klein",
//     srcUrl: "/icons/calvin-klein-logo.svg",
//   },
// ];





//   return (
//     <>
//     <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
//       <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//         <section className="max-w-frame px-4">
//           <h2
//             className={cn([
//               integralCF.className,
//               "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8",
//             ])}
//           >
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h2>
//           <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
//             Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of
//             style.
//           </p>
//           <div>
//             <Link
//               href="/shop"
//               className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
//             >
//               Shop Now
//             </Link>
//           </div>
//           <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
//             <div className="flex flex-col">
//               <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
//                 200+
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-nowrap">
//                 International Brands
//               </span>
//             </div>
//             <Separator
//               className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
//               orientation="vertical"
//             />
//             <div className="flex flex-col ml-6 md:ml-0">
//               <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
//                 2000+
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-nowrap">
//                 High-Quality Products
//               </span>
//             </div>
//             <Separator
//               className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
//               orientation="vertical"
//             />
//             <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
//               <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
//                 3000+
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-nowrap">
//                 Happy Customers
//               </span>
//             </div>
//           </div>
//         </section>
//         <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
//           <Image
//             priority
//             src="/icons/big-star.svg"
//             height={104}
//             width={104}
//             alt="big star"
//             className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px]"
//           />
//           <Image
//             priority
//             src="/icons/small-star.svg"
//             height={56}
//             width={56}
//             alt="small star"
//             className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14"
//           />
//         </section>
//       </div>
//     </header>



//     {/* Brands Section */}
//     <div className="bg-black">
//       <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
//         {brandsData.map((brand) => (
//           <Image
//             key={brand.id}
//             priority
//             src={brand.srcUrl}
//             height={0}
//             width={0}
//             alt={brand.id}
//             className="h-auto w-auto max-w-[95px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
//           />
//         ))}
//       </div>
//     </div>


//       <main className="mt-[50px] mb-[50px] sm:mt-[72px] sm:mb-[72px]">
//         <ProductListSec
//           title="NEW ARRIVALS"
//           data={products}
//           viewAllLink="/shop#new-arrivals"
//         />
//         <div className="max-w-frame mx-auto px-4 xl:px-0">
//           <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
//         </div>
//         <div className="mb-[50px] sm:mb-20">
//           <ProductListSec
//             title="top selling"
//             data={topSellingData}
//             viewAllLink="/shop#top-selling"
//           />
//         </div>
//         <div className="mb-[50px] sm:mb-20">
//           <DressStyle />
//         </div>
//         <Reviews data={reviewsData} />
//       </main>
//     </>
//   );
// }









































// import ProductListSec from "@/components/reuse/ProductListSec";
// import Brands from "@/components/homepage/Brands";
// import DressStyle from "@/components/homepage/DStyleSec";
// import Reviews from "@/components/homepage/ReviewsSec";
// import { Product } from "@/types/product.types";
// import { Review } from "@/types/review.types";
// import { Separator } from "@/components/ui/separator";
// import { cn } from "@/lib/utils";
// import { integralCF } from "@/styles/fonts";
// import Image from "next/image";
// import Link from "next/link";
// import { GetServerSideProps } from "next";
// import { client } from "@/sanity/lib/client";

// // Fetch products (server-side function)
// const fetchProducts = async (): Promise<Product[]> => {
//   return await client.fetch(
//     `*[_type=="product"][0..4]{
//       "id": _id,
//       "title": name,
//       description,
//       rating,
//       "srcUrl": image.asset->url,
//       price,
//       "category": tags[0],
//       "discount": {
//         "percentage": discountPercentage,
//         "amount": 0
//       }
//     }`
//   );
// };

// export default async function Home() {
//   const products = await fetchProducts();

//   const reviewsData: Review[] = [
//     {
//       id: 1,
//       user: "Alex K.",
//       content: `"Finding clothes that align with my personal style used to be a challenge until I discovered this store."`,
//       rating: 5,
//       date: "August 14, 2023",
//     },
//     // Add more reviews
//   ];

//   return (
//     <>
//       <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
//         <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//           <section className="max-w-frame px-4">
//             <h2
//               className={cn([
//                 integralCF.className,
//                 "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8",
//               ])}
//             >
//               FIND CLOTHES THAT MATCHES YOUR STYLE
//             </h2>
//             <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
//               Browse through our diverse range of meticulously crafted garments.
//             </p>
//             <div>
//               <Link
//                 href="/shop"
//                 className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </section>
//           <section className="relative md:px-4 min-h-[448px] bg-cover bg-top bg-no-repeat">
//             <Image
//               priority
//               src="/icons/big-star.svg"
//               height={104}
//               width={104}
//               alt="big star"
//               className="absolute right-7 top-12 max-w-[76px]"
//             />
//           </section>
//         </div>
//       </header>

//       <main className="mt-[50px] mb-[50px] sm:mt-[72px] sm:mb-[72px]">
//         <ProductListSec
//           title="NEW ARRIVALS"
//           data={products}
//           viewAllLink="/shop#new-arrivals"
//         />
//         <Reviews data={reviewsData} />
//       </main>
//     </>
//   );
// }
