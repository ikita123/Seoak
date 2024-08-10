"use client";
import Star from "../../common/Star";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { events } from "../../../data/events";
import Link from "next/link";
export default function EventsOne() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg ml-50 mt-20 layout-pb-lg">
      <div className="row y-gap-15 justify-between items-end">
        <div className="col-lg-6">
          <div className="sectionTitle">
            <span className="sectionTitle__title ml-35 mr-20 text-20 text-black fw-100">
              SEOAK BASICS COURSES
            </span>
            <div className="badge_square px-15 py-8 text-11 bg-blue-5 text-white fw-400">
              4-8 WEEKS
            </div>
          </div>
          <div className="sectionTitle" style={{width: "max-content;"}}>
            <div className="badge_square mr-15 ml-10 px-5 py-8 text-11 bg-blue-5 text-white fw-400" style={{height: "25px;"}}> </div>
            <span className="sectionTitle__title mr-10 text-black fw-400" style={{fontSize: "xxx-large;", fontFamily: "'Poppins', sans-serif"}}>
              Launch your <span className="about-content__title" style={{fontSize: "xxx-large;"}}> Career Journey Right Here, Right Now</span>
            </span>
          </div>
          <div className="sectionTitle mt-20" style={{width: "max-content;"}}>
            <div className="mr-15 ml-10 px-5 py-8 text-30 text-black fw-400"> </div>
              <i className="icon-check text-20 text-black mr-20"><span className="ml-10 mr-50">Study on your own time</span></i>
              <i className="icon-check text-20 text-black mr-20"><span className="ml-10 mr-50">Practical Learning</span></i>
              <i className="icon-check text-20 text-black"><span className="ml-10 mr-50">Industry Recognised certificate</span></i>
          </div>
        </div>
      </div>
      <div className="container mt-30">
        <span className="sectionTitle__title ml--240 mr-10 --text-20 text-black fw-100">
          Categories
        </span>
        <div className="lg:pt-40 js-section-slider">
          <div>
          {showSlider && (
            <Swiper
              className="overflow-visible"
              // {...setting}
              modules={[Navigation, Pagination]}
              pagination={{
                el: ".event-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".event-slide-next",
                prevEl: ".event-slide-prev",
              }}
              // loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 576px
                450: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  // when window width is >= 992px
                  slidesPerView: 3,
                },
              }}
            >
              {events.slice(0, 6).map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide">
                    <div
                      className="eventCard -type-1"
                      data-aos="fade-left"
                      data-aos-duration={(i + 1) * 500}
                    >
                      <div className="eventCard__img">
                        <Image
                          width={730}
                          height={530}
                          src={elm.imgSrc}
                          alt="image"
                        />
                      </div>

                      <div className="eventCard__bg bg-white">
                        <div className="eventCard__content y-gap-10">
                          <div className="eventCard__inner">
                            <div className="d-flex items-center text-white">
                              <div className="text-14 lh-1 text-yellow-4 mr-10">
                                {4.2}
                              </div>
                              <div className="d-flex x-gap-10 items-center">
                                <Star star={4.2} textColor={"text-yellow-4"} />
                              </div>
                            </div>
                            <h4 className="eventCard__title text-17 text-black">
                              <Link
                                className="linkCustom"
                                href={`/events/${elm.id}`}
                              >
                                {elm.title}
                              </Link>
                            </h4>
                            <div className="d-flex x-gap-15 pt-10 text-black">
                              <div className="d-flex items-center ml-5 mr-70">
                                <div className="text-14">{"15 lesson"}</div>
                              </div>
                              <div className="d-flex items-center mr-70">
                                <div className="text-14">{"6h 33m"}</div>
                              </div>
                              <div className="d-flex items-center">
                                <div className="text-14">{"Intermediate"}</div>
                              </div>
                            </div>
                          </div>

                          
                        </div>
                        <div className="eventCard__button text-24 mt-10 ">
                          <Link
                            href={`/events/${elm.id}`}
                            className="button -rounded bg-blue-5 text-white px-25 fw-800"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}</div>
        </div>

        <div className="row justify-between mt-50 items-end" style={{marginRight: "calc(var(--bs-gutter-x) * -8.5);"}}>
          <div className="col-lg-6">
          </div>
          <div className="col-auto">
            <div className="d-flex justify-center items-center">
              <div className="col-auto">
                <div className="pagination event-pagination -arrows js-events-slider-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
