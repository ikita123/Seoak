"use client";
import Image from "next/image";
import { brands } from "../../data/brands";
const Brands = ({ backgroundColorComponent, brandsTwo }) => {
  return (
    <>
      <section
        className={` ${
          brandsTwo ? "layout-pt-md" : "layout-pt-lg"
        }  layout-pb-md  ${
          backgroundColorComponent ? backgroundColorComponent : ""
        } `}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="col text-center">
              <p className="text-30 mt-60 text-black">REGISTERED AND RECOGNISED BY</p>

            </div>
          </div>
          <div
            className={`recognised y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50`}
          >
            {brands.map((logo, i) => (
              <div
                data-aos-duration="300"
                key={i}
                className="col-lg-auto col-md-3 col-sm-3 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <Image
                    src={logo && logo}
                    alt="clients image"
                    width={285}
                    height={90}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-center">
            <div className="col text-center">
              <p className="text-30 mt-60 text-black">Get a job at over 2,000 top product and service-based companies globally</p>
              <p className="text-30 mt-60 text-black">(Company Logos should scroll on)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
