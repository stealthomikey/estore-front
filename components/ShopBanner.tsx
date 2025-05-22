import React from "react";
import { Title } from "./text";
import Link from "next/link";
import Image from "next/image";
import { logolarge } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-[#fef9ed] rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Shop Now for Your Furry Friend! <br />
          Get All the Products You Need
        </Title>
        <Link
          href="#productgrid"
          className="bg-shop-dark-green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop-dark-green hoverEffect"
        >
          Browse Products
        </Link>
      </div>
      <div className="flex justify-end -mr-10 lg:-mr-24">
        <Image
          src={logolarge}
          alt="large_logo"
          className="hidden md:inline-flex w-200 h-125"
        />
      </div>
    </div>
  );
};

export default HomeBanner;