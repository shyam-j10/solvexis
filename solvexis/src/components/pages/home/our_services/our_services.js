import "./our_services.css";
import React, { useRef, useEffect } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,
  autoPlay: false,
  cellAlign: "center",
  contain: true,
};
const OurServices = React.memo(() => {
  // console.log("rendered");
  const flickityRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".pb-card");
    slides.forEach((slide) => {
      slide.style.transform = "scale(0.9)";
      slide.style.transition = "transform 1s ease-in-out";
    });
    if (slides.length > 0) {
      slides[1].style.transform = "scale(1)";
    }
    const flkty = flickityRef.current;
    // const slides = document.querySelectorAll(".pb-card");
    // slides.forEach((slide) => {
    //   slide.style.transform = "scale(0.9)";
    //   slide.style.transition = "transform 1s ease-in-out";
    // });
    // document.querySelectorAll(".pb-card")[0].style.transform = "scale(1)";
    const handleSelect = () => {
      const slides = flkty.cells.map((cell) => cell.element);

      slides.forEach((slide) => slide.classList.remove("is-selected"));
      slides.forEach((slide) => {
        slide.querySelector(".pb-card").style.transform = "scale(0.9)";

        slide.querySelector(".pb-card").style.transition =
          "transform 0.3s ease-in-out";

        return slide;
      });

      const selectedSlide = slides[flkty.selectedIndex];
      selectedSlide.classList.add("is-selected");
      const element = selectedSlide.querySelector(".pb-card");
      // console.log(element);
      element.style.transform = "scale(1)";

      element.style.transition = "transform 0.3s ease-in-out";
    };

    if (flkty) {
      flkty.on("select", handleSelect);
      handleSelect();
    }

    return () => {
      if (flkty) {
        flkty.off("select", handleSelect);
      }
    };
  }, []);
  const handlePrev = () => {
    const slidess = document.querySelectorAll(".pb-card");
    slidess.forEach((slide) => {
      slide.style.transform = "scale(0.9)";
      slide.style.transition = "transform 0.3ss ease-in-out";
    });
    if (flickityRef.current) {
      flickityRef.current.previous();
      flickityRef.current.on("settle", () => {
        const flkty = flickityRef.current;
        const slides = flkty.cells.map((cell) => cell.element);

        const selectedSlide = slides[flkty.selectedIndex];
        const element = selectedSlide.querySelector(".pb-card");
        element.style.transform = "scale(1)";
        element.style.transition = "transform 0.3s ease-in-out";
      });
    }
  };
  const handleNext = () => {
    const slidess = document.querySelectorAll(".pb-card");
    slidess.forEach((slide) => {
      slide.style.transform = "scale(0.9)";
      slide.style.transition = "transform 0.3s ease-in-out";
    });
    if (flickityRef.current) {
      flickityRef.current.next();
      flickityRef.current.on("settle", () => {
        const flkty = flickityRef.current;

        const slides = flkty.cells.map((cell) => cell.element);
        const selectedSlide = slides[flkty.selectedIndex];
        const element = selectedSlide.querySelector(".pb-card");
        element.style.transform = "scale(1)";
        // element.style.transition = "transform 0.3s ease-in-out";
      });
    }
  };
  return (
    <section
      data-bg-section="blue"
      data-theme-section="lightsecondary"
      className="portfolio-slider"
    >
      <div className="container is--medium">
        <div className="slider__row-title">
          <div className="slider__col-row-title">
            <h1  data-animation-scroll="" data-split-words="">
              Our Services
            </h1>
            <div
              data-animation-scroll="fade"
              className="slider__col-btns is--floating"
            >
              <div
                data-flickity-control="prev"
                data-hover=""
                data-arrow="internal"
                className="btn-arrow is--flipped"
                onClick={handlePrev}
              >
                <div className="btn__wipe"></div>
                <div className="btn__border is--transparent"></div>
                <div className="btn-arrow__arrow-box">
                  <div className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 19 22"
                      fill="none"
                      className="arrow-svg"
                    >
                      <path
                        d="M0 6H2.28171L9.50084 15.0239L16.72 6H19L9.50084 18.2255L0 6Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-flickity-control="next"
                data-hover=""
                data-arrow="internal"
                className="btn-arrow"
                onClick={handleNext}
              >
                <div className="btn__wipe"></div>
                <div className="btn__border is--transparent"></div>
                <div className="btn-arrow__arrow-box">
                  <div className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 19 22"
                      fill="none"
                      className="arrow-svg"
                    >
                      <path
                        d="M0 6H2.28171L9.50084 15.0239L16.72 6H19L9.50084 18.2255L0 6Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* <div data-animation-scroll="fade" className="slider__col-row-btn">
              <a
                data-size="small"
                data-hover=""
                data-arrow="internal"
                href="/news-insights"
                className="btn w-inline-block"
              >
                <div className="btn__blur"></div>
                <div className="btn__bg"></div>
                <div className="btn__wipe"></div>
                <p className="btn__p">Full portfolio</p>
                <div className="btn__arrow-box">
                  <div className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 19 22"
                      fill="none"
                      className="arrow-svg"
                    >
                      <path
                        d="M9.26147 21.6157L0.261475 12.6798L1.70276 11.2065L5.73834 15.2421C7.40382 16.9076 8.36468 18.1567 8.36468 18.1567C8.36468 18.1567 8.14048 16.6193 8.14048 14.2492L8.14048 0.797241L10.3504 0.797241L10.3504 14.2812C10.3504 16.6193 10.1583 18.1887 10.1583 18.1887C10.1583 18.1887 11.0871 16.9396 12.7526 15.2741L16.8202 11.1745L18.2615 12.6478L9.26147 21.6157Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div data-animation-scroll="fade" className="container">
        <Flickity
          flickityRef={(c) => (flickityRef.current = c)}
          className={"carousel  card-slider__group"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <div className="card-slider__slide w-dyn-item">
            <div className="pb-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 10 200"
                fill="none"
                className="pb-card__deco-x"
              >
                <path d="M0 0L10 10V190L0 200V0Z" fill="currentColor"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 10 200"
                fill="none"
                className="pb-card__deco-x is--flipped"
              >
                <path d="M0 0L10 10V190L0 200V0Z" fill="currentColor"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 200 10"
                fill="none"
                className="pb-card__deco-y"
              >
                <path
                  d="M0 10L10 8.02726e-06L190 8.74228e-07L200 10L0 10Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 200 10"
                fill="none"
                className="pb-card__deco-y is--flipped"
              >
                <path
                  d="M0 10L10 8.02726e-06L190 8.74228e-07L200 10L0 10Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="pb-card__col-image">
                <div className="filter-image">
                  <div className="before__100"></div>
                  <div className="filter-image__wrap">
                    <img
                      src="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e094e810e5b2f65c40b9c3_Portco%2BPage%2B(2).webp"
                      loading="lazy"
                      alt="Cookie3"
                      sizes="(max-width: 479px) 79vw, (max-width: 767px) 76vw, (max-width: 991px) 68vw, 34vw"
                      srcset="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e094e810e5b2f65c40b9c3_Portco%2BPage%2B(2)-p-500.webp 500w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e094e810e5b2f65c40b9c3_Portco%2BPage%2B(2)-p-800.webp 800w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e094e810e5b2f65c40b9c3_Portco%2BPage%2B(2).webp 1000w"
                      className="filter-image__img"
                    />
                    <div className="filter-image__blend"></div>
                    <div className="filter-image__logo">
                      <div data-logo-size="" className="card-logo">
                        <img
                          src="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66c84c04b01802576c691ad8_logo-cookie3.png"
                          loading="lazy"
                          alt="Cookie3"
                          className="card-logo__img"
                        />
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 760 760"
                    fill="none"
                    className="filter-image__border-svg"
                  >
                    <path
                      d="M9.5 279V278.793L9.35355 278.646L0.5 269.793V0.5H269.793L278.646 9.35355L278.793 9.5H279H481H481.207L481.354 9.35355L490.207 0.5H759.5V269.793L750.646 278.646L750.5 278.793V279V481V481.207L750.646 481.354L759.5 490.207V759.5H490.207L481.354 750.646L481.207 750.5H481H279H278.793L278.646 750.646L269.793 759.5H0.5V490.207L9.35355 481.354L9.5 481.207V481V279Z"
                      stroke="currentColor"
                      stroke-width="1"
                      vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="pb-card__col-text">
                {/* <div className="pb-card__col-row-tags w-dyn-list">
                  <div role="list" className="tags w-dyn-items">
                    <div role="listitem" className="tag is--light w-dyn-item">
                      <div className="tag__bg is--light"></div>
                      <p className="is--s is--500">Crypto</p>
                    </div>
                    <div role="listitem" className="tag is--light w-dyn-item">
                      <div className="tag__bg is--light"></div>
                      <p className="is--s is--500">AI</p>
                    </div>
                  </div>
                </div> */}
                <div className="pb-card__col-row-title">
                  <h3> AI Product Development</h3>
                </div>
                <div className="pb-card__col-row-intro">
                  <p>
                    Transforming Ideas into Intelligent Solutions Leverage the
                    power of artificial intelligence to create cutting-edge
                    products tailored to your business needs. From concept to
                    deployment, we deliver AI-driven solutions that automate
                    workflows, enhance decision-making, and unlock new
                    opportunities
                  </p>
                </div>

                <div className="pb-card__col-row-text">
                  <div className="w-richtext">
                    <ul role="list">
                      <li>Machine Learning Models</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision Applications </li>
                    </ul>
                  </div>
                </div>
                <p>"Learn More About Our AI Expertise"</p>
              </div>
              <a
                href="/portfolio/cookie3"
                className="pb-card__link w-inline-block"
              ></a>
            </div>
          </div>
          <div className="card-slider__slide w-dyn-item">
            <div className="pb-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 10 200"
                fill="none"
                className="pb-card__deco-x"
              >
                <path d="M0 0L10 10V190L0 200V0Z" fill="currentColor"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 10 200"
                fill="none"
                className="pb-card__deco-x is--flipped"
              >
                <path d="M0 0L10 10V190L0 200V0Z" fill="currentColor"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 200 10"
                fill="none"
                className="pb-card__deco-y"
              >
                <path
                  d="M0 10L10 8.02726e-06L190 8.74228e-07L200 10L0 10Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 200 10"
                fill="none"
                className="pb-card__deco-y is--flipped"
              >
                <path
                  d="M0 10L10 8.02726e-06L190 8.74228e-07L200 10L0 10Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="pb-card__col-image">
                <div className="filter-image">
                  <div className="before__100"></div>
                  <div className="filter-image__wrap">
                    <img
                      src="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0944950db42f1489f91bf_bornless.webp"
                      loading="lazy"
                      alt="Cathedral Studios"
                      sizes="(max-width: 479px) 79vw, (max-width: 767px) 76vw, (max-width: 991px) 68vw, 34vw"
                      srcset="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0944950db42f1489f91bf_bornless-p-500.webp 500w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0944950db42f1489f91bf_bornless-p-800.webp 800w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0944950db42f1489f91bf_bornless-p-1080.webp 1080w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0944950db42f1489f91bf_bornless-p-1600.webp 1600w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66e0944950db42f1489f91bf_bornless.webp 1920w"
                      className="filter-image__img"
                    />
                    <div className="filter-image__blend"></div>
                    <div className="filter-image__logo">
                      <div
                        data-logo-size="Medium (default)"
                        className="card-logo"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66c84abf932826c1ddde7172_logo-cathedralstudios.png"
                          loading="lazy"
                          alt="Cathedral Studios"
                          className="card-logo__img"
                        />
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 760 760"
                    fill="none"
                    className="filter-image__border-svg"
                  >
                    <path
                      d="M9.5 279V278.793L9.35355 278.646L0.5 269.793V0.5H269.793L278.646 9.35355L278.793 9.5H279H481H481.207L481.354 9.35355L490.207 0.5H759.5V269.793L750.646 278.646L750.5 278.793V279V481V481.207L750.646 481.354L759.5 490.207V759.5H490.207L481.354 750.646L481.207 750.5H481H279H278.793L278.646 750.646L269.793 759.5H0.5V490.207L9.35355 481.354L9.5 481.207V481V279Z"
                      stroke="currentColor"
                      stroke-width="1"
                      vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="pb-card__col-text">
                {/* <div className="pb-card__col-row-tags w-dyn-list">
                  <div role="list" className="tags w-dyn-items">
                    <div role="listitem" className="tag is--light w-dyn-item">
                      <div className="tag__bg is--light"></div>
                      <p className="is--s is--500">Crypto</p>
                    </div>
                    <div role="listitem" className="tag is--light w-dyn-item">
                      <div className="tag__bg is--light"></div>
                      <p className="is--s is--500">Gaming</p>
                    </div>
                  </div>
                </div> */}
                <div className="pb-card__col-row-title">
                  <h3>Data and Cloud Engineering</h3>
                </div>
                <div className="pb-card__col-row-intro">
                  <p>
                    Build Scalable, Secure, and Insightful Solutions Empower
                    your organization with modern data and cloud architectures.
                    Our expertise ensures seamless data integration, efficient
                    processing, and scalable cloud infrastructure to support
                    your growth
                  </p>
                </div>
                <div className="pb-card__col-row-text">
                  <div className="w-richtext">
                    <ul role="list">
                      <li>Data analytics and visualisation</li>
                      <li>Cloud Migration and Optimization</li>
                      <li>Real-time Analytics Platforms </li>
                    </ul>
                  </div>
                </div>
                <p>"Optimize Your Data and Cloud Ecosystem Today"</p>
              </div>
              <a
                href="/portfolio/cathedral-studios"
                className="pb-card__link w-inline-block"
              ></a>
            </div>
          </div>
          <div className="card-slider__slide w-dyn-item">
            <div className="pb-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 10 200"
                fill="none"
                className="pb-card__deco-x"
              >
                <path d="M0 0L10 10V190L0 200V0Z" fill="currentColor"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 10 200"
                fill="none"
                className="pb-card__deco-x is--flipped"
              >
                <path d="M0 0L10 10V190L0 200V0Z" fill="currentColor"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 200 10"
                fill="none"
                className="pb-card__deco-y"
              >
                <path
                  d="M0 10L10 8.02726e-06L190 8.74228e-07L200 10L0 10Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 200 10"
                fill="none"
                className="pb-card__deco-y is--flipped"
              >
                <path
                  d="M0 10L10 8.02726e-06L190 8.74228e-07L200 10L0 10Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="pb-card__col-image">
                <div className="filter-image">
                  <div className="before__100"></div>
                  <div className="filter-image__wrap">
                    <img
                      src="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66cd720e21721ae25a8bcae9_ShapesXR-2.webp"
                      loading="lazy"
                      alt="ShapesXR"
                      sizes="(max-width: 479px) 79vw, (max-width: 767px) 76vw, (max-width: 991px) 68vw, 34vw"
                      srcset="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66cd720e21721ae25a8bcae9_ShapesXR-2-p-500.webp 500w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66cd720e21721ae25a8bcae9_ShapesXR-2-p-800.webp 800w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66cd720e21721ae25a8bcae9_ShapesXR-2-p-1080.webp 1080w, https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66cd720e21721ae25a8bcae9_ShapesXR-2.webp 1920w"
                      className="filter-image__img"
                    />
                    <div className="filter-image__blend"></div>
                    <div className="filter-image__logo">
                      <div
                        data-logo-size="Medium (default)"
                        className="card-logo"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/66c84831f6824c3c1ff44ac4_logo-shapexr.svg"
                          loading="lazy"
                          alt="ShapesXR"
                          className="card-logo__img"
                        />
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 760 760"
                    fill="none"
                    className="filter-image__border-svg"
                  >
                    <path
                      d="M9.5 279V278.793L9.35355 278.646L0.5 269.793V0.5H269.793L278.646 9.35355L278.793 9.5H279H481H481.207L481.354 9.35355L490.207 0.5H759.5V269.793L750.646 278.646L750.5 278.793V279V481V481.207L750.646 481.354L759.5 490.207V759.5H490.207L481.354 750.646L481.207 750.5H481H279H278.793L278.646 750.646L269.793 759.5H0.5V490.207L9.35355 481.354L9.5 481.207V481V279Z"
                      stroke="currentColor"
                      stroke-width="1"
                      vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="pb-card__col-text">
                <div className="pb-card__col-row-title">
                  <h3>HR Services</h3>
                </div>
                <div className="pb-card__col-row-intro">
                  <p>
                    Seamless Workforce Management, Simplified Streamline HR
                    processes with our comprehensive services. From hiring top
                    talent to ensuring compliance and efficient payroll
                    management, we help you focus on what matters—growing your
                    business.
                  </p>
                </div>
                <div className="pb-card__col-row-text">
                  <div className="w-richtext">
                    <ul role="list">
                      <li>Team Augmentation</li>
                      <li>Payroll and Compliance</li>
                      <li>End-to-End HR Operations </li>
                    </ul>
                  </div>
                </div>
                <p>"Simplify Your HR Operations Now"</p>
              </div>
              <a
                href="/portfolio/shapesxr"
                className="pb-card__link w-inline-block"
              ></a>
            </div>
          </div>
        </Flickity>
      </div>
    </section>
  );
});
export default OurServices;
{
  /*
     <div
          data-flickity-cards-init="center"
          className="card-slider__group w-dyn-list"
        >
          <div
            role="list"
            className="card-slider w-dyn-items flickity-enabled is-draggable"
            id="flickity-slider-type-cards-id-1"
            tabIndex={0}
            style={{ display: "block" }}
          >
            <div
              className="flickity-viewport"
              style={{ height: "478.115px", touchAction: "pan-y" }}
            >
              <div
                className="flickity-slider"
                style={{ left: "0px", transform: "translateX(12.5%)" }}
              >
               
              </div>
            </div>
          </div>
        </div> */
}
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./our"
// const OurServices = () => {
//   return (
//     <div classNameName="our_services_parent_container">
//       <div classNameName="our_services_header">
//         <p classNameName="our_services_header_txt">Our Services</p>
//         <div classNameName="our_services_pages_controle">
//           <button classNameName="our_services_pages_btn">
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//           <button>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;
