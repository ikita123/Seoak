"use client";
import gsap from "gsap";
import Link from "next/link";
import { ShapeRendering } from "../../../svg/index";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import hero_bg from "../../../public/assets/img/home-1/hero/bg.png";
import hero_Banner from "../../../public/assets/img/home-1/hero/Banner-Image-3-png.png";
import Modern_Education from "../../../public/assets/img/home-1/hero/Modern-Education-and-Employement.png";
import Socials from "../../../components/common/Socials";
import FooterLinks from "../../../components/layout/component/FooterLinks";
import Links from "../../../components/layout/component/Links";
import masthead_icon_1 from "../../../public/assets/img/masthead/icons/1.svg";
import masthead_icon_2 from "../../../public/assets/img/masthead/icons/2.svg";
import masthead_icon_3 from "../../../public/assets/img/masthead/icons/3.svg";
// move img and icon
import move_img_1 from "../../../public/assets/img/masthead/1.png";
import FooterLinksTwo from "../../../components/layout/component/FooterLinksTwo";

import move_img_2 from "../../../public/assets/img/masthead/2.png";
import move_img_3 from "../../../public/assets/img/masthead/3.png";
import move_icon_1 from "../../../public/assets/img/masthead/1.svg";
import move_icon_2 from "../../../public/assets/img/masthead/4.png";
import move_icon_3 from "../../../public/assets/img/masthead/2.svg";

const handleSubmit = (e) => {
  e.preventDefault();
};
const masthead_info = [
  {
    id: 1,
    icon: masthead_icon_1,
    text: "Over 12 million students",
  },
  {
    id: 2,
    icon: masthead_icon_2,
    text: "More than 60,000 courses",
  },
  {
    id: 3,
    icon: masthead_icon_3,
    text: "Learn anything online",
  },
];

const hero_content = {
  title: "Learn New Skills Online with Top",
  text_underline: "Educators",
  info_hero: (
    <>
      Build skills with courses, certificates, and degrees online from
      <br /> world-class universities and companies.
    </>
  ),
  starts: [
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
  ],
};
const { title, text_underline, info_hero, starts } = hero_content;

const HomeHero = () => {
  useEffect(() => {
    const parallaxIt = () => {
      const target = document.querySelectorAll(".js-mouse-move-container");

      target.forEach((container) => {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const movement = el.getAttribute("data-move");

          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - container.offsetLeft;
            const relY = e.pageY - container.offsetTop;

            gsap.to(el, {
              x:
                ((relX - container.offsetWidth / 2) / container.offsetWidth) *
                Number(movement),
              y:
                ((relY - container.offsetHeight / 2) / container.offsetHeight) *
                Number(movement),
              duration: 0.2,
            });
          });
        });
      });
    };

    parallaxIt();
  }, []);

  return (
    <>
      <section>
        <div className="masthead__container masthead -type-1">

          <div className="masthead__bg mb-50" style={{ marginTop: "-200px" }}>
            <Image src={hero_bg} alt="image" />
          </div>

          <div className="masthead__overlay">
            <Image src={hero_Banner} alt="image" width={700} height={410} />
          </div>

          <div className="col-xl-6 col-lg-11" data-aos="fade-up" data-aos-delay="500">
            <div className="masthead__content">
              <h1 className="masthead__title text-white mb-50 mt--1300 ml-90">
                <p className="text-33" >REACH YOUR CAREER</p>
                LEARN FROM BIGGEST ONLINE LEARNING SOURCE
              </h1>
              <div className="masthead__button d-flex items-center mt-50 ml-90 text-30 ml-20 md:d-none">
                <Link href="/courses-list-1" className="button px-30 h-50 -blue-5 text-white ml-10">
                  Explore Courses
                </Link>
                <Link href="/courses-list-1" className="button px-30 h-50 -green-1 text-white ml-10">
                  Request Call back
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="y-gap-133">
          <Image src={Modern_Education} alt="image" width={"100%"} height={"100%"} />
        </div>
        <div className="masthead__overlay_info -type-7">
          <div className="container" style={{ boxShadow: "0px 1px 43px rgba(20, 3, 66, 0.2)", borderRadius: "16px" }}>
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-xl-12 col-lg-11" data-aos="fade-up" data-aos-delay="500">
                <div className="masthead__content">
                  <div>
                    <div className="masthead-form bg-white rounded-16 mt-30 px-10 py-10">
                      <form className=" d-flex x-gap-30 y-gap-10 items-center flex-wrap">

                        <div className="masthead-form__item">
                          <div className="d-flex items-center justify-center text-black -dark-text-black">
                            <div className="d-flex items-center">
                              <span>Our Hiring Partners</span>
                            </div>
                          </div>

                          <div className="enrolled-title">
                            100+
                          </div>
                        </div>


                        <div className="masthead-form__item">
                          <div className="d-flex items-center justify-center text-black -dark-text-black">
                            <div className="d-flex items-center">
                              <span>Sucess Rate</span>
                            </div>
                          </div>

                          <div className="enrolled-title">
                            95.8%
                          </div>
                        </div>


                        <div className="masthead-form__item">
                          <div className="d-flex items-center justify-center text-black -dark-text-black">
                            <div className="d-flex items-center">
                              <span>Industry Experts</span>
                            </div>
                          </div>

                          <div className="enrolled-title">
                            50+
                          </div>
                        </div>

                        <div className="masthead-form__item">
                          <div className="d-flex items-center justify-center text-black -dark-text-black">
                            <div className="d-flex items-center">
                              <span>Students Enrolled</span>
                            </div>
                          </div>

                          <div className="enrolled-title">
                            10K+
                          </div>
                        </div>


                        {/* <div className="masthead-form__button">
                            <button
                              onClick={() => router.push("/courses-list-2")}
                              className="button -dark-1 text-white -dark-button-dark-1"
                            >
                              Search
                            </button>
                          </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .masthead__overlay {
            position: relative;
            // margin-top: -222px;
            top: -222px;; /* Adjust as needed */
            left: 62%;
            transform: translatex(3%);
            transform: translateY(273px);
          }
          .masthead__overlay_info {
            color: black;
            font-size: medium;
            position: absolute;
            width: -webkit-fill-available;
            // margin-top: -222px;
            top: 344px; /* Adjust as needed */
            transform: translatex(3%);
            transform: translateY(273px);
          }
        `}</style>
        {/* animated shape start */}
        {/* <ShapeRendering /> */}
        {/* animated shape end */}



        <footer className="footer -type-1 bg-black -green-links">
          <div className="container">
            <div className="footer-header" style={{ borderBottom: 'none' }}>
              <div className="row y-gap-20 justify-between items-center">
                <div className="col-auto">
                  <div className="footer-header__logo">
                    <Image
                      width={140}
                      height={50}
                      src="/assets/img/general/logo-white.png"
                      alt="logo"
                    />          </div>
                </div>
                <div className="col-auto">
                  <div className="footer-header-socials">
                    <div className="footer-header-socials__title text-white">
                      Follow us on social media
                    </div>
                    <div className="footer-header-socials__list">
                      <Socials componentsClass="my-custom-class" textSize="text-24" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-columns">
              <div className="row y-gap-30">
                {/* Get in Touch Section */}
                <div className="col-md-4">
                  <p className="text-white mb-4">
                    We specialize in delivering a comprehensive<br />
                    Hands-on Practical Training cum Placement<br />
                    Program in Advanced Industrial & Process<br />
                    Automation.
                  </p>
                  <p className="text-white mb-4">
                    Get in Touch
                  </p>
                  <p className="text-white mb-4">
                    We don’t send spam so don’t worry.
                  </p>
                  <div className="footer-columns-form">
                    <form
                      onSubmit={handleSubmit}
                      className="form-single-field -base mt-15"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px', // Space between input and button
                        marginBottom: '10px', // Space below the form
                        marginLeft: '-7px',
                        height: '60px'
                      }}
                    >
                      <input
                        required
                        type="text"
                        placeholder="Enter your email"
                        style={{
                          backgroundColor: 'black', // Black background
                          color: 'white', // White text
                          padding: '15px 20px', // Adjusted padding for a smaller input
                          borderRadius: '200px', // Rounded corners
                          border: '1px solid white', // White border
                          width: '100%', // Full width of container
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          backgroundColor: 'white', // White background for button
                          color: 'black', // Black text color
                          border: '2px solid white', // White border for button
                          borderRadius: '50%', // Circular button
                          padding: '8px 10px', // Smaller padding for a smaller button
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px', // Smaller text size for the button
                        }}
                      >
                        <i className="icon-arrow-right text-24" style={{ color: 'black' }}></i> {/* Icon color adjusted to black */}
                      </button>
                    </form>

                  </div>



                </div>



                {/* Combined Links Section */}
                <div className="col-md-8">
                  <div className="row">
                    {/* Company Section */}
                    <div className="col-md-4">
                      <div className="text-17 fw-500 text-white uppercase mb-25">
                        Company
                      </div>
                      <ul className="list-unstyled text-white">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <div className="text-17 fw-500 text-white uppercase mb-25">
                        Top Courses
                      </div>
                      <ul className="list-unstyled text-white">
                        <li>
                          Full Stack Development Industrial training
                          Program
                        </li>
                        <li>
                          Data Science Industrial training Program
                        </li>
                        <li>
                          Advanced AI Industrial training Program
                        </li>
                      </ul>
                    </div>

                    {/* Useful Links Section */}
                    <div className="col-md-4">
                      <div className="text-17 fw-500 text-white uppercase mb-25">
                        Useful Links
                      </div>
                      <ul className="list-unstyled text-white">
                        <li>Careers</li>
                        <li>Become an Instructor</li>
                        <li>Refer Now</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-30 border-top-light-15">
              <div className="row justify-between items-center y-gap-20" style={{ marginBottom: '7px' }}>
                <div className="col-auto">
                  <div className="d-flex items-center h-100 text-white">
                    © SEOAK INNOVATIONS PRIVATE LIMITED. All Rights Reserved 2023.
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                    <div>
                      <div className="d-flex x-gap-15 text-white">
                        <span>Help</span>
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                        <span>Refund Policy</span>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="#"
                        className="button px-30 h-50 rounded-200 text-white"
                        style={{
                          backgroundColor: 'var(--color-black)',
                          border: '2px solid white',
                        }}
                      >
                        <i className="icon-worldwide text-20 mr-15"></i>
                        <span className="text-15">English</span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>






      </section>
    </>
  );
};

export default HomeHero;
