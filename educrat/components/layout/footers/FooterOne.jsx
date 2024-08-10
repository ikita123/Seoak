"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Socials from "@/components/common/Socials";
import FooterLinks from "../component/FooterLinks";
import Links from "../component/Links";
export default function FooterOne() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
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
  );
}
