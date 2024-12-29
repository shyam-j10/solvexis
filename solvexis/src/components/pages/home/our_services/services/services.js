import { useEffect, useRef, useState } from "react";
import "./services.css";
import aiProduct from "../../../../../assets/our_services/aiProduct.mp4";
import dataAndCloud from "../../../../../assets/our_services/dataAndCloud.mp4";

import SVGAnimation from "./svgAnimation";
import ServicesVedio from "./servicesMp4Vedio/servicesVedio";
const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-left_, .animate-right_"
    );
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-active");
        } else {
          entry.target.classList.remove("in-active");
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="services_container">
      <p className="Our_services_header_txt">Our Services</p>
      <div className="our_services_lap_view">
        <div className="services_parent_container">
          <div className="services_content animate-left_ ">
            {/* <p className="services_header">
            Transforming Ideas into Intelligent Solutions
          </p> */}
            <div>
              <p className="services_header_description">
                AI Product Development
              </p>
            </div>
            <p className="services_description">
              Leverage the power of artificial intelligence to create
              cutting-edge products tailored to your business needs. From
              concept to deployment, we deliver AI-driven solutions that
              automate workflows, enhance decision-making, and unlock new
              opportunities.
            </p>
            <div>
              {" "}
              <p className="our_Services_offer">Key Offerings:</p>
              <ul className="services_keys">
                <li>Machine Learning Models.</li>
                <li>Natural Language Processing.</li>
                <li>Computer Vision Applications.</li>
              </ul>
            </div>
            {/* <p className="our_services_cta">
              
            </p> */}
            <button className="services_btn">
              Learn More About Our AI Expertise
            </button>
          </div>
          <div className="services_animate_vidio">
            <ServicesVedio src={aiProduct} />
          </div>
        </div>
        <div className="services_parent_container">
          <div className="services_animate_vidio">
            <ServicesVedio src={dataAndCloud} />
          </div>
          <div className="services_content animate-right_">
            {/* <p className="services_header">
            Build Scalable, Secure, and Insightful Solutions
          </p> */}
            <div>
              <p className="services_header_description">
                Data And Cloud Engineering
              </p>
            </div>

            <p className="services_description">
              Empower your organization with modern data and cloud
              architectures. Our expertise ensures seamless data integration,
              efficient processing, and scalable cloud infrastructure to support
              your growth.
            </p>
            <div>
              {" "}
              <p className="our_Services_offer">Key Offerings:</p>
              <ul className="services_keys">
                <li>Data analytics and visualisation.</li>
                <li>Cloud Migration and Optimization.</li>
                <li>Real-time Analytics Platforms.</li>
              </ul>
            </div>
            {/* <p className="our_services_cta">
              Optimize Your Data and Cloud Ecosystem Today
            </p> */}

            <button className="services_btn">
              {" "}
              Optimize Your Data and Cloud Ecosystem Today
            </button>
          </div>
        </div>
        <div className="services_parent_container">
          <div className="services_content animate-left_ ">
            {/* <p className="services_header">
            Seamless Workforce Management, Simplified
          </p> */}
            <div>
              <p className="services_header_description">HR Services</p>
            </div>

            <p className="services_description">
              Streamline HR processes with our comprehensive services. From
              hiring top talent to ensuring compliance and efficient payroll
              management, we help you focus on what matters—growing your
              business.
            </p>
            <div>
              {" "}
              <p className="our_Services_offer">Key Offerings:</p>
              <ul className="services_keys">
                <li>Team Augmentation.</li>
                <li>Payroll and Compliance.</li>
                <li>End-to-End HR Operations.</li>
              </ul>
            </div>
            {/* <p className="our_services_cta">
              
            </p> */}
            <button className="services_btn">
              {" "}
              Learn More About Our AI Expertise
            </button>
          </div>
          <div className="services_animate_vidio">
            <SVGAnimation />
          </div>
        </div>
      </div>
      <div className="our_services_mob_view">
        <div className="services_parent_container">
          <div className="services_animate_vidio">
            <ServicesVedio src={aiProduct} />
          </div>
          <div className="services_content animate-left_ ">
            {/* <p className="services_header">
            Transforming Ideas into Intelligent Solutions
          </p> */}
            <div>
              <p className="services_header_description">AI Product</p>
              <p className="services_header_description">Development</p>
            </div>
            <p className="services_description">
              Leverage the power of artificial intelligence to create
              cutting-edge products tailored to your business needs. From
              concept to deployment, we deliver AI-driven solutions that
              automate workflows, enhance decision-making, and unlock new
              opportunities.
            </p>
            <button className="services_btn">Learn More</button>
          </div>
        </div>
        <div className="services_parent_container">
          <div className="services_animate_vidio">
            <ServicesVedio src={dataAndCloud} />
          </div>
          <div className="services_content animate-right_">
            {/* <p className="services_header">
            Build Scalable, Secure, and Insightful Solutions
          </p> */}
            <div>
              <p className="services_header_description">Data and</p>
              <p className="services_header_description">Cloud Engineering</p>
            </div>

            <p className="services_description">
              Empower your organization with modern data and cloud
              architectures. Our expertise ensures seamless data integration,
              efficient processing, and scalable cloud infrastructure to support
              your growth.
            </p>
            <button className="services_btn">Optimize Your Data</button>
          </div>
        </div>
        <div className="services_parent_container">
          <div className="services_animate_vidio">
            <SVGAnimation />
          </div>
          <div className="services_content animate-left_ ">
            {/* <p className="services_header">
            Seamless Workforce Management, Simplified
          </p> */}
            <div>
              <p className="services_header_description">HR Services</p>
            </div>

            <p className="services_description">
              Streamline HR processes with our comprehensive services. From
              hiring top talent to ensuring compliance and efficient payroll
              management, we help you focus on what matters—growing your
              business.
            </p>
            <button className="services_btn"> HR Operations Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
