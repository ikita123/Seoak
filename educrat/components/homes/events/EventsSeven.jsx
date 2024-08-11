import React from "react";
import { blogs } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
export default function EventsSeven() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-6">
      <div className="container">
        <div className="row y-gap-20 justify-center items-center">
          <div className="col-lg-6">
            <div className="sectionTitle" style={{width: "max-content;"}}>
              <span className="sectionTitle__title mr-10 text-black fw-400" style={{fontSize: "xx-large;", fontFamily: "'Poppins', sans-serif"}}>
                Stay Up-to-Date with Our <span className="about-content__title" style={{fontSize: "xx-large;"}}>Blogs!</span>
              </span>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-60">
          {blogs.slice(2, 6).map((elm, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-6"
              data-aos="fade-left"
              data-aos-duration={(i + 1) * 450}
            >
              <div className="blogCard -type-1 rounded-8 border-light shadow-1 overflow-hidden">
                <div className="blogCard__image ratio ratio-3:2">
                  <Image
                    width={510}
                    height={340}
                    className="img-ratio"
                    src={"/assets/img/home-1/hero/blog.png"}
                    alt="image"
                  />
                </div>
                <div className="px-30 py-30 bg-white">
                  <div
                    style={{ cursor: "pointer" }}
                    className="d-flex items-center text-14 lh-1 text-black mb-15"
                  >
                    <div className="ml-8 text-24 fw-600">{elm.title}</div>
                  </div>
                  <h4 className="text-17 text-black lh-15 fw-500">
                    {elm.desc}
                  </h4>
                  <h4 className="text-17 lh-15 fw-500 text-readmore underline">
                    <Link className="linkCustom" href={`/events/${elm.id}`}>
                      {"Read More"}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row y-gap-20 justify-center items-center mt-20" >

          <div className="col-auto">
            <Link
              href="/event-list-2"
              className="button -half_rounded -md bg-blue-5 text-24 text-white fw-800"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
