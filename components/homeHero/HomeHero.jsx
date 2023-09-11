import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

const HomeHero = () => {
  return (
    <>
      <div className="container mt-5">
        <div>
          <h2 style={{ color: "#333" }} className="text-center fw-bold">
            Make Your Dream Career A Reality
          </h2>
          <Image
            src="/underline.png"
            width={270}
            height={50}
            className="mx-auto d-block ps-5"
            alt="underline"
          />
        </div>
        <div className="d-flex justify-content-center">
          <h3 style={{ color: "#333" }} className="text-center fw-bold m-0">
            Trending on Internshala
          </h3>
          <Image
            src="/fire.png"
            width={50}
            height={40}
            className="ms-2"
            alt="underline"
          />
        </div>

        <div style={{height:"22rem"}} className="mt-5 px-5 swiper-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide style={{ height: 200 , borderRadius:20}}>
              <Image src="/img1.png" width={300} height={100} alt="banner" />
            </SwiperSlide>
            <SwiperSlide style={{ height: 200 , borderRadius:20}}>
              <Image src="/img2.png" width={300} height={100} alt="banner" />
            </SwiperSlide>
            <SwiperSlide style={{ height: 200 , borderRadius:20}}>
              <Image src="/img3.png" width={300} height={100} alt="banner" />
            </SwiperSlide>
            <SwiperSlide style={{ height: 200 , borderRadius:20}}>
              <Image src="/img4.png" width={300} height={100} alt="banner" />
            </SwiperSlide>
            <SwiperSlide style={{ height: 200 , borderRadius:20}}>
              <Image src="/img5.png" width={300} height={100} alt="banner" />
            </SwiperSlide>
            <SwiperSlide style={{ height: 200 , borderRadius:20}}>
              <Image src="/img6.png" width={300} height={100} alt="banner" />
            </SwiperSlide>
            <SwiperSlide style={{ height: 200 , borderRadius:20}}>
              <Image src="/img7.png" width={300} height={100} alt="banner" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
