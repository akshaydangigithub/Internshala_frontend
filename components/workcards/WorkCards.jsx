import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./workcard.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiDuration } from "react-icons/gi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";


const WorkCards = ({ head }) => {
  return (
    <>
      <div className="bg-light">
        <div className="container pt-4">
          <h3 style={{ color: "#333" }} className="text-center fw-bold">
            {head}
          </h3>
          <div className="mt-5 px-5 swiper-container bg-light">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper px-3"
            >
              <SwiperSlide className="shadow p-3 bg-white d-flex flex-column">
                <div className="text-start border-bottom ">
                  <h6 className="fw-bold">
                    Omni Sport Leadership - Hiking/Treking
                  </h6>
                  <p style={{ fontSize: 14 }} className="text-black-50">
                    Decathion
                  </p>
                </div>
                <div className="text-start mt-4">
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <HiOutlineLocationMarker className="text-black-50 me-2" />{" "}
                    Mumbai
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <LiaMoneyBillSolid className="text-black-50 me-2" /> 15000
                    /month
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <GiDuration className="text-black-50 me-2" /> 3 months
                  </p>
                </div>
                <div className="text-start mt-4">
                  <Link
                    style={{ fontSize: 14, color: "#008BDC" }}
                    className="text-decoration-none d-flex align-items-center"
                    href="#"
                  >
                    View Details <AiOutlineRight className="ms-2" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="shadow p-3 bg-white d-flex flex-column">
                <div className="text-start border-bottom ">
                  <h6 className="fw-bold">
                    Omni Sport Leadership - Hiking/Treking
                  </h6>
                  <p style={{ fontSize: 14 }} className="text-black-50">
                    Decathion
                  </p>
                </div>
                <div className="text-start mt-4">
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <HiOutlineLocationMarker className="text-black-50 me-2" />{" "}
                    Mumbai
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <LiaMoneyBillSolid className="text-black-50 me-2" /> 15000
                    /month
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <GiDuration className="text-black-50 me-2" /> 3 months
                  </p>
                </div>
                <div className="text-start mt-4">
                  <Link
                    style={{ fontSize: 14, color: "#008BDC" }}
                    className="text-decoration-none d-flex align-items-center"
                    href="#"
                  >
                    View Details <AiOutlineRight className="ms-2" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="shadow p-3 bg-white d-flex flex-column">
                <div className="text-start border-bottom ">
                  <h6 className="fw-bold">
                    Omni Sport Leadership - Hiking/Treking
                  </h6>
                  <p style={{ fontSize: 14 }} className="text-black-50">
                    Decathion
                  </p>
                </div>
                <div className="text-start mt-4">
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <HiOutlineLocationMarker className="text-black-50 me-2" />{" "}
                    Mumbai
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <LiaMoneyBillSolid className="text-black-50 me-2" /> 15000
                    /month
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <GiDuration className="text-black-50 me-2" /> 3 months
                  </p>
                </div>
                <div className="text-start mt-4">
                  <Link
                    style={{ fontSize: 14, color: "#008BDC" }}
                    className="text-decoration-none d-flex align-items-center"
                    href="#"
                  >
                    View Details <AiOutlineRight className="ms-2" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="shadow p-3 bg-white d-flex flex-column">
                <div className="text-start border-bottom ">
                  <h6 className="fw-bold">
                    Omni Sport Leadership - Hiking/Treking
                  </h6>
                  <p style={{ fontSize: 14 }} className="text-black-50">
                    Decathion
                  </p>
                </div>
                <div className="text-start mt-4">
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <HiOutlineLocationMarker className="text-black-50 me-2" />{" "}
                    Mumbai
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <LiaMoneyBillSolid className="text-black-50 me-2" /> 15000
                    /month
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <GiDuration className="text-black-50 me-2" /> 3 months
                  </p>
                </div>
                <div className="text-start mt-4">
                  <Link
                    style={{ fontSize: 14, color: "#008BDC" }}
                    className="text-decoration-none d-flex align-items-center"
                    href="#"
                  >
                    View Details <AiOutlineRight className="ms-2" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="shadow p-3 bg-white d-flex flex-column">
                <div className="text-start border-bottom ">
                  <h6 className="fw-bold">
                    Omni Sport Leadership - Hiking/Treking
                  </h6>
                  <p style={{ fontSize: 14 }} className="text-black-50">
                    Decathion
                  </p>
                </div>
                <div className="text-start mt-4">
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <HiOutlineLocationMarker className="text-black-50 me-2" />{" "}
                    Mumbai
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <LiaMoneyBillSolid className="text-black-50 me-2" /> 15000
                    /month
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <GiDuration className="text-black-50 me-2" /> 3 months
                  </p>
                </div>
                <div className="text-start mt-4">
                  <Link
                    style={{ fontSize: 14, color: "#008BDC" }}
                    className="text-decoration-none d-flex align-items-center"
                    href="#"
                  >
                    View Details <AiOutlineRight className="ms-2" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="shadow p-3 bg-white d-flex flex-column">
                <div className="text-start border-bottom ">
                  <h6 className="fw-bold">
                    Omni Sport Leadership - Hiking/Treking
                  </h6>
                  <p style={{ fontSize: 14 }} className="text-black-50">
                    Decathion
                  </p>
                </div>
                <div className="text-start mt-4">
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <HiOutlineLocationMarker className="text-black-50 me-2" />{" "}
                    Mumbai
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <LiaMoneyBillSolid className="text-black-50 me-2" /> 15000
                    /month
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="text-black-50 d-flex align-items-center mb-2"
                  >
                    <GiDuration className="text-black-50 me-2" /> 3 months
                  </p>
                </div>
                <div className="text-start mt-4">
                  <Link
                    style={{ fontSize: 14, color: "#008BDC" }}
                    className="text-decoration-none d-flex align-items-center"
                    href="#"
                  >
                    View Details <AiOutlineRight className="ms-2" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCards;
