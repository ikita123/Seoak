"use client";

import React, { useState } from "react";
import { pricingData } from "../../../data/pricing";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsYearly(event.target.checked);
  };
  return (
    <section className="layout-pt-lg ml-50 layout-pb-lg">
      <div className="row y-gap-15 justify-between items-end">
        <div className="col-lg-6">
          <div className="sectionTitle">
            <span className="sectionTitle__title ml-35 mr-20 text-20 text-black fw-100">
              INDUSTRIAL TRAINING PROGRAMS
            </span>
            <div className="badge_square px-15 py-8 text-11 bg-blue-5 text-white fw-400">
              3-4 Months
            </div>
          </div>
          <div className="sectionTitle" style={{width: "max-content;"}}>
            <div className="badge_square mr-15 ml-10 px-5 py-8 text-11 bg-blue-5 text-white fw-400" style={{height: "25px;"}}> </div>
            <span className="sectionTitle__title mr-10 text-black fw-400" style={{fontSize: "xxx-large;", fontFamily: "'Poppins', sans-serif"}}>
              Organised Way to Start your <span className="about-content__title" style={{fontSize: "xxx-large;"}}>Career path</span>
            </span>
          </div>
          <div className="sectionTitle mt-20" style={{width: "max-content;"}}>
            <div className="mr-15 ml-10 px-5 py-8 text-30 text-black fw-400"> </div>
              <i className="icon-check text-20 text-black mr-10"><span className="ml-10 mr-50">Guaranteed Placement Assistance</span></i>
              <i className="icon-check text-20 text-black mr-10"><span className="ml-10 mr-50">Get 100% Scholarship</span></i>
              <i className="icon-check text-20 text-black"><span className="ml-10 mr-50">Become Job ready</span></i>
          </div>
        </div>
      </div>
      <div className="container mr-150">
        {/* <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Simple Pricing</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

            <div className="d-flex justify-center items-center pt-60 lg:pt-30">
              <div className="text-14 text-dark-1">Monthly</div>
              <div className="form-switch px-20">
                <div className="switch" data-switch=".js-switch-content">
                  <input
                    checked={isYearly}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                  />
                  <span className="switch__slider"></span>
                </div>
              </div>
              <div className="text-14 text-dark-1">
                Annually <span className="text-purple-1">Save 30%</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row y-gap-30 pt-60 lg:pt-50">
          <div className="col-lg-4 col-md-6 bg-light-7 ml--200 mr-90">
            <div
              className="priceCard -type-1 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div>
                <Image
                  width={730}
                  height={530}
                  src={pricingData[0].imgSrc}
                  alt="image"
                />
              </div>

              <div className="priceCard__content pt-30 pl-10 pr-10  pb-50 bg-light-7 mr-25">
                <h4 className="text-24 text-center pl-50 text-black fw-600">
                {pricingData[0].title}
                </h4>
                <p className="text-17 mt-20 text-center pl-30 pr-10 text-black fw-400">
                  {pricingData[0].desc}
                </p>
                <div className="text-13 mt-20 text-left pl-30 pr-10 text-black fw-600">
                  Instructors are from
                  
                </div>
                <div className="text-13 ml--10 mt--20 text-left pl-30 pr-10 text-black fw-600">
                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/courses-list/Instructors_from.png"
                    alt="image"
                  />
                </div>
                <div className="text-13 ml--10 mt--80 text-right pl-30 pr-10 text-black">
                  <div className="line-through text-black text-20">₹{"24,999"}</div>
                  <div className="text-black text-24 fw-600">₹{"20,000"}</div>
                </div>
              </div>
              
              <div className="priceCard__button mt-10 ">
                  <Link
                    className="button -half_rounded -md bg-blue-5 text-24 text-white fw-800"
                    href="/courses-list-1"
                  >
                    Enroll Now
                  </Link>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 bg-light-7 mr-90">
          <div
              className="priceCard -type-1 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div>
                <Image
                  width={730}
                  height={530}
                  src={pricingData[1].imgSrc}
                  alt="image"
                />
               
              </div>

              <div className="priceCard__content pt-30 pb-50 bg-light-7 mr-25">
                <h4 className="text-24 text-center pl-50 text-black fw-600">
                {pricingData[1].title}
                </h4>
                <p className="text-17 mt-20 text-center pl-30 pr-10 text-black fw-400">
                  {pricingData[1].desc}
                </p>
                <div className="text-13 mt-20 text-left pl-30 pr-10 text-black fw-600">
                  Instructors are from
                  
                </div>
                <div className="text-13 ml--10 mt--20 text-left pl-30 pr-10 text-black fw-600">
                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/courses-list/Instructors_from.png"
                    alt="image"
                  />
                </div>
                <div className="text-13 ml--10 mt--80 text-right pl-30 pr-10 text-black">
                  <div className="line-through text-black text-20">₹{"24,999"}</div>
                  <div className="text-black text-24 fw-600">₹{"20,000"}</div>
                </div>
              </div>
              
              <div className="priceCard__button mt-10 ">
                  <Link
                    className="button -half_rounded -md bg-blue-5 text-24 text-white fw-800"
                    href="/courses-list-1"
                  >
                    Enroll Now
                  </Link>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 bg-light-7">
          <div
              className="priceCard -type-1 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div>
                <Image
                  width={730}
                  height={530}
                  src={pricingData[2].imgSrc}
                  alt="image"
                />
              </div>

              <div className="priceCard__content pt-30 pl-10 pr-10  pb-50 bg-light-7 mr-25">
                <h4 className="text-24 text-center pl-50 text-black fw-600">
                {pricingData[2].title}
                </h4>
                <p className="text-17 mt-20 text-center pl-30 pr-10 text-black fw-400">
                  {pricingData[2].desc}
                </p>
                <div className="text-13 mt-20 text-left pl-30 pr-10 text-black fw-600">
                  Instructors are from
                  
                </div>
                <div className="text-13 ml--10 mt--20 text-left pl-30 pr-10 text-black fw-600">
                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/courses-list/Instructors_from.png"
                    alt="image"
                  />
                </div>
                <div className="text-13 ml--10 mt--80 text-right pl-30 pr-10 text-black">
                  <div className="line-through text-black text-20">₹{"24,999"}</div>
                  <div className="text-black text-24 fw-600">₹{"20,000"}</div>
                </div>
              </div>
              
              <div className="priceCard__button mt-10 ">
                  <Link
                    className="button -half_rounded -md bg-blue-5 text-24 text-white fw-800"
                    href="/courses-list-1"
                  >
                    Enroll Now
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
