



"use client";

import { useRef, useContext } from "react";
import Slider from "react-slick";
import SliderData from "./slider-data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductContext } from "@/app/context/ecommerce-context";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductCarousel = () => {
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products?.find((p) => p.id === Number(id));
  const getProductImage = product?.photo || "";

  const thumbSettings = {
    focusOnSelect: true,
    swipeToSlide: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };

  const allImages = [
    ...(getProductImage ? [{ imgPath: getProductImage }] : []),
    ...SliderData,
  ];

  return (
    <div className="product px-5">
      {/* MAIN SLIDER */}
      <Slider
        asNavFor={sliderRef2.current ?? undefined}
        ref={(s) => {
          sliderRef1.current = s;
        }}
        arrows={false}
      >
        {allImages.map((item, index) => (
          <div key={index} >
            <Image
              src={item.imgPath}
              alt={`Product ${index}`}
              width={500}
              height={500}
              className="w-full rounded-xl h-130 object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* THUMBNAIL SLIDER */}
      <Slider
        asNavFor={sliderRef1.current ?? undefined}
        ref={(s) => {
          sliderRef2.current = s;
        }}
        {...thumbSettings}
        className="mt-3 product-thumb "
      >
        {allImages.map((item, index) => (
          <div key={index} className="cursor-pointer p-2 w-full ">
            <Image
              src={item.imgPath}
              alt={`Thumbnail ${index}`}
              width={60}
              height={60}
              className="rounded-md w-full  h-15 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
