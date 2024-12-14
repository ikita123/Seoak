import React from "react";
import Image from "next/image";

export default function LearningPath() {
  const titleWrapperStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack them vertically
    alignItems: 'flex-start', // Align to the left
  };

  const sectionTitleTextStyle = {
    color: 'black',
    fontWeight: 'bold',
    margin: 0,
    fontSize: '70px', // Adjust as needed
    lineHeight: '1.5',
    marginLeft:'-522px'
  };

  const contentBlockHighlightStyle = {
    fontWeight: 'bold',
    margin: 0,
    fontSize: '70px', // Adjust as needed
    lineHeight: '1.5',
    marginLeft:'-8px',
    marginTop:'-106px'
    ,
  };

  const iconWrapperStyle = {
    marginLeft: '850px', // Adjust spacing between text and image
    marginTop:'-360px'
  };
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle">
              <div className="title-wrapper" style={titleWrapperStyle}>
                <p className="sectionTitle__text" style={sectionTitleTextStyle}>
                  Partnerships &
                </p>
                <h3 className="contentBlock__highlight" style={contentBlockHighlightStyle}>
                  Collaborations
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
          <div className="col-12">
          <div className="contentBlock" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft:'-103PX' }}>
              <p className="contentBlock__text" style={{ maxWidth: '54%', marginTop:'-24px', fontSize:'24px', color:'black' }}>
                Wipro has officially become the Credential Platform Partner for SEOAK, 
                signaling the commencement of a collaborative journey rich with boundless 
                opportunities. This strategic alliance extends an invitation to participate 
                in shaping the future by fostering a community of learners and innovators. 
                Stay engaged as we reveal a groundbreaking era in learning, surpassing 
                conventional boundaries and unlocking a realm of diverse possibilities.
              </p>
            </div>
          </div>
          <div className="icon-wrapper" style={iconWrapperStyle}>
                <Image                     src="/assets/img/general/Wipro.png"
                      alt="Wipro Logo"  width={800} 
                      height={200}  />
              </div>
        </div>
      </div>
    </section>
  );
}
