"use client";

// import { useAppSelector } from "@/lib/hooks/redux";
// import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  // const { cart } = useAppSelector((state: RootState) => state.carts);

  return (
    <Link href="/cart-page" className="relative  p-1  mr-[14px]">
      <Image
        priority
        src="/icons/cart.svg"
        height={100}
        width={100}
        alt="cart"
        className="max-h-[23px] max-w-[22px] "
      />
      {/* {cart && cart.totalQuantities > 0 && ( */}
        <span className="border bg-black text-white rounded-full w-fit-h-fit px-1 text-xs absolute  -translate-x-1/2 -top-3 left-1/2">
          {/* {cart.totalQuantities} */} 
        </span>
      {/* )} */}
    </Link>
  );
};

export default CartBtn;
