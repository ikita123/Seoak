"use client";

import { useState, useEffect } from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import React from "react";
import Image from "next/image";
import { alumnis } from "../../data/alumnis";
export default function SkillsOne() {

  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <>
      <section className={"layout-pt-md"}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="sectionTitle" style={{width: "max-content;"}}>
              <span className="sectionTitle__title mr-10 text-black fw-400" style={{fontSize: "xx-large;", fontFamily: "'Poppins', sans-serif"}}>
                Our Alumni work at some of <span className="about-content__title" style={{fontSize: "xx-large;"}}>the best companies in the world</span>
              </span>
            </div>
          </div>
          <div className="pt-60 lg:pt-50">
          <div className="overflow-hidden js-section-slider">
            <div className="swiper-wrapper">
              {showSlider && (
                <Swiper
                  // {...setting}

                  modules={[Navigation, Pagination]}
                  pagination={{
                    el: ".pagination-skils",
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: ".arrow-right-one",
                    prevEl: ".arrow-left-one",
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    // when window width is >= 576px
                    450: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      // when window width is >= 992px
                      slidesPerView: 6,
                    },
                  }}
                  loop={true}
                >
                  {alumnis.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="swiper-slide h-100 overflow-visible">
                        <div
                          className="infoCard -type-1"
                          data-aos="fade-left"
                          data-aos-duration={(i + 1) * 300}
                        >
                          <div className="infoCard__image">
                            <Image
                              width={150}
                              height={100}
                              style={{ width: "100%", objectFit: "contain" }}
                              src={elm.imageSrc}
                              alt="image"
                            />
                          </div>
                          <h5 className="infoCard__title text-17 lh-15 mt-10">
                            {elm.skill}
                          </h5>
                        </div>
                      </div>
                    </SwiperSlide>
                    // 140,90
                  ))}
                </Swiper>
              )}
            </div>

            <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
              <div className="col-auto">
                <div className="pagination-skils -arrows js-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}