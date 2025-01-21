import {
  ArrivalData,
  relatedProductData,
  topSellingData,
} from "@/app/page";
import ProductListSec from "@/components/reuse/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Bars";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { getProducts } from "@/lib/utils";



// const data: Product[] = [
//   ...ArrivalData,
  // ...topSellingData,
  // ...relatedProductData,
// ];






export default async function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
    const data = await getProducts();
    const productData = data.find(
      (product: { id: string; }): Product[] => product.id == params.slug[0]
    );
    
  

  if (!productData?.title) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData?.title ?? "product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProductData} />
      </div>
    </main>
  );
}






















// import ProductListSec from "@/components/reuse/ProductListSec";
// import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
// import Header from "@/components/product-page/Header";
// import Tabs from "@/components/product-page/Bars";
// import { notFound } from "next/navigation";
// import { client } from "@/sanity/lib/client";



// export async function generateStaticParams() {
//   const products = await client.fetch(`*[_type == "product"]{ _id }`);
//   return products.map((product) => ({
//     slug: [product._id],
//   }));
// }

// export default async function ProductPage({ params }) {
//   const { slug } = params;

//   // Fetch product data
//   const productData = await client.fetch(
//     `*[_type == "product" && _id == $id][0]{
//       "id": _id,
//       "title": name,
//       description,
//       "srcUrl": image.asset->url,
//       price,
//       "category": tags[0],
//       "discount": {
//         "percentage": discountPercentage,
//         "amount": 0
//       }
//     }`,
//     { id: slug[0] } // Pass the ID as a variable
//   );

//   if (!productData) {
//     notFound();
//   }

//   // Fetch related products
//   const relatedProductData = await client.fetch(
//     `*[_type == "product" && _id != $id][0..4]{
//       "id": _id,
//       "title": name,
//       description,
//       "srcUrl": image.asset->url,
//       price,
//       "category": tags[0],
//       "discount": {
//         "percentage": discountPercentage,
//         "amount": 0
//       }
//     }`,
//     { id: slug[0] }
//   );

//   return (
//     <main>
//       <div className="max-w-frame mx-auto px-4 xl:px-0">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <BreadcrumbProduct title={productData?.title ?? "product"} />
//         <section className="mb-11">
//           <Header data={productData} />
//         </section>
//         <Tabs />
//       </div>
//       <div className="mb-[50px] sm:mb-20">
//         <ProductListSec title="You might also like" data={relatedProductData} />
//       </div>
//     </main>
//   );
// }













// import {
//   ArrivalData,
//   relatedProductData,
//   topSellingData,
// } from "@/app/page";
// import ProductListSec from "@/components/reuse/ProductListSec";
// import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
// import Header from "@/components/product-page/Header";
// import Tabs from "@/components/product-page/Bars";
// import { Product } from "@/types/product.types";
// import { notFound } from "next/navigation";

// // const data: Product[] = [
// //   ...ArrivalData,
// //   ...topSellingData,
// //   ...relatedProductData,
// // ];

// export default function ProductPage({
//   params,
// }: {
//   params: { slug: string[] };
// }) {
//   const productData = data.find(
//     (product) => product.id == params.slug[0]
//   );

//   console.log("productData", productData);
  

//   if (!productData?.title) {
//     notFound();
//   }

//   return (
//     <main>
//       <div className="max-w-frame mx-auto px-4 xl:px-0">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <BreadcrumbProduct title={productData?.title ?? "product"} />
//         <section className="mb-11">
//           <Header data={productData} />
//         </section>
//         {/* <Tabs /> */}
//       </div>
//       <div className="mb-[50px] sm:mb-20">
//         <ProductListSec title="You might also like" data={relatedProductData} />
//       </div>
//     </main>
//   );
// }





// import {
//   ArrivalData,
//   relatedProductData,
//   topSellingData,
// } from "@/app/page";
// import ProductListSec from "@/components/reuse/ProductListSec";
// import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
// import Header from "@/components/product-page/Header";
// import Tabs from "@/components/product-page/Bars";
// import { Product } from "@/types/product.types";
// import { notFound } from "next/navigation";



// import { GetServerSideProps } from "next";

// const ProductPage = ({ products }: { products: Product[] }) => {

//   const data: Product[] = [
//     ...ArrivalData,
//     // ...topSellingData,
//     // ...relatedProductData,
//   ];

  

//   return (
//     <main>
//       <div className="max-w-frame mx-auto px-4 xl:px-0">
//         <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
//         <BreadcrumbProduct title="New Arrivals" />
//         <section className="mb-11">
//           <Header data={products[0]} />
//         </section>
//         <Tabs />
//       </div>
//       <div className="mb-[50px] sm:mb-20">
//         <ProductListSec title="NEW ARRIVALS" data={products} />
//       </div>
//     </main>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async () => {
//   const products = await getProducts();
//   return {
//     props: { products }, // will be passed to the page component as props
//   };
// };

// export default ProductPage;
