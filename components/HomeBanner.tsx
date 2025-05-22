import React from "react";
import { Title } from "./text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-[#fef9ed]  rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          The cat lab coming soon! <br />
          Purrfect for your furry friend
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop-dark-green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop-dark-green hoverEffect"
        >
          View items
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96 h-125"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
