"use client";

import Image from "next/image";
import React from "react";

export default function Pricing() {
  const cardColors = ["#ffdddd", "#ddffdd", "#ddddff", "#ffffdd"];

  // Content data for the four cards
  const cardContent = [
    {
      title: "Industrial Mentors",
      description: "Our Certified Mentors recognize each student’s unique strengths, weaknesses, and learning styles. They offer personalized guidance to help you overcome challenges and achieve your goals.",
    },
    {
      title: " One-On-One Mentorship",
      description: "We believe in providing a personalized and engaging learning experience, and this new feature is designed to bring the classroom right to your doorstep.",
    },
    {
      title: "Scholarships",
      description: "We’re excited to offer scholarships to enhance your educational journey and make quality learning accessible. Explore our opportunities and apply to receive the recognition and support you deserve.",
    },
    {
      title: "Be a Part of Growing Community",

      description: "In our broad alumni network,you can access job referrals,career and life advice, and even find your future co-founder—all in one spot."
    },
  ];

  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title">Experience The SEOAK Magic</h2>
              <p className="sectionTitle__text">
              that elevates your career to new heights.              </p>
            </div>
          </div>
        </div>

        {/* Two rows with two cards each */}
        <div className="row y-gap-30 justify-center pt-60 lg:pt-40">
          {cardContent.map((content, index) => (
            <div className="col-lg-5 col-md-6 mb-4" key={index}>
              <div
                className="priceCard -type-1 rounded-16 shadow-2"
                style={{ backgroundColor: cardColors[index] }}
              >
                <div className="priceCard__content py-45 px-60 xl:px-40 text-center">
                  <div className="priceCard__type text-18 lh-11 fw-500 text-dark-1">
                    {content.title}
                  </div>
                  <div className="priceCard__description text-15 lh-16 fw-400 text-dark-1 mt-15">
                    {content.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
