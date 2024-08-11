import React from "react";
import { learningPathTwo } from "../../../data/learningPaths";
import Image from "next/image";
export default function LearningPath() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
            
              <p className="sectionTitle__text ">
              Partnerships &
              </p>
              <h2 className="sectionTitle__title ">
              Colloborations              </h2>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
        Wipro has officially become the Credential Platform Partner for SEOAK, signaling
the commencement of a collaborative journey rich with boundless opportunities.
This strategic alliance extends an invitation to participate in shaping the future
by fostering a community of learners and innovators. Stay engaged as we reveal
a groundbreaking era in learning, surpassing conventional boundaries and
unlocking a realm of diverse possibilities.
        </div>
      </div>
    </section>
  );
}
