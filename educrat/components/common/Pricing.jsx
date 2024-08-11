"use client";

import Image from "next/image";
import React from "react";

export default function Pricing() {
  const cardColors = ["#CB6CE6", "#FFBD59", "#00BF63", "#004AAD"];
  const cardimages = ["/assets/img/SEOAK-RECEPIE/1.png", "/assets/img/SEOAK-RECEPIE/2.png", "/assets/img/SEOAK-RECEPIE/3.png", "/assets/img/SEOAK-RECEPIE/4.png"];
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
    <section className="layout-pt-lg layout-pb-md mb-50">
      <div className="container">
        <div className="row justify-left text-left">
          <div className="col-auto">
            <div className="sectionTitle">
              <span className="sectionTitle__title text-center mr-10 text-black fw-400" style={{fontSize: "xxx-large;", fontFamily: "'Poppins', sans-serif"}}>
                <span className="about-content__title" style={{fontSize: "xxx-large;"}}>Experience The SEOAK Magic</span> that elevates your career to new heights. 
              </span>
            </div>
          </div>
        </div>

        {/* Two rows with two cards each */}
        {/* -webkit-text-stroke-width: 0.8px;
        -webkit-text-stroke-color: black; */}
        <div className="row box_recognised y-gap-30 justify-center pt-60 lg:pt-40 mb-50">
          {cardContent.map((content, index) => (
            <div className="col-lg-6 col-md-6 mb-20" key={index}>
              <div
                className="priceCard -type-1 rounded-50 shadow-2 ''"
                style={{ backgroundColor: cardColors[index] }}
              >
                <div className="priceCard__content py-45 px-40 xl:px-40 text-center">
                  <div className="priceCard__type box-stroke text-50 lh-11 fw-600 text-white">
                    {content.title}
                  </div>
                  <div className="priceCard__description text-35 lh-16 fw-400 text-black mt-15" style={{
            marginBottom: index === 3 ? '180px' : '130px'}}>
                    {content.description}
                  </div>
                </div>
                
              </div>
              <div className="hidden" style={{
            display: index === 0 ? 'block' : 'none'}}>
                <Image
                  src={cardimages[0]}
                  alt="clients image"
                  width={400}
                  height={90}
                  style={{ position: "absolute", marginTop: "-250px", marginLeft: "300px"}}
                />
              </div>
              <div className="hidden" style={{
            display: index === 1 ? 'block' : 'none'}}>
                <Image
                  src={cardimages[1]}
                  alt="clients image"
                  width={450}
                  height={90}
                  style={{ position: "absolute", marginTop: "-270px", marginLeft: "320px"}}
                />
              </div>
              <div className="hidden" style={{
            display: index === 2 ? 'block' : 'none'}}>
                <Image
                  src={cardimages[2]}
                  alt="clients image"
                  width={320}
                  height={90}
                  style={{ position: "absolute", marginTop: "-200px", marginLeft: "420px"}}
                />
              </div>
              <div className="hidden" style={{
            display: index === 3 ? 'block' : 'none'}}>
                <Image
                  src={cardimages[3]}
                  alt="clients image"
                  width={450}
                  height={90}
                  style={{ position: "absolute", marginTop: "-280px", marginLeft: "305px"}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
