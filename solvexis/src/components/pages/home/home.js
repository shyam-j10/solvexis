import { useEffect, useRef, useState } from "react";
import "./home.css";
import Home_Main from "./home_main_container/home_main.js";
import { Link } from "react-router";
import OurServices from "./our_services/our_services.js";
import Notes from "./notes/notes.js";
import Services from "./our_services/services/services.js";
import Footer_notes from "./notes/footerNotes.js";
import Expertise from "./notes/ExpertiseNotes/Expertise.js";
import Communication_notes from "./notes/communication/communication.js";
import ContactUsForm from "../contact/contact.js";

const Home = () => {
  let techWorkObj = {
    stack1: [
      <img
        width={"153"}
        height={"90"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/AWS.png"
      />,
      <img
        width={"205"}
        height={"59"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Microsoft_Azure_Logo-2.png"
      />,
      <img
        width={"537"}
        height={"84"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Google-Cloud.png"
      />,
      <img
        width={"263"}
        height={"66"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Power-Bi-logo-transparent-1-1.png"
      />,
      <img
        width={"153"}
        height={"90"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/AWS.png"
      />,
      <img
        width={"333"}
        height={"65"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Tableau.png"
      />,
    ],
    stack2: [
      <img
        width={136}
        height={90}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/cassandra.png"
      />,
      <img
        width={184}
        height={96}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Mysql_logo-2.png"
      />,
      <img
        width={159}
        height={60}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Neo4j-logo_color-2-1.png"
      />,
      <img
        width={260}
        height={110}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/DataikuStraight-1.png"
      />,
      <img
        width={244}
        height={124}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/kafka.png"
      />,
      <img
        width={141}
        height={55}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/snowflake.png"
      />,
    ],
    stack3: [
      <img
        width={"153"}
        height={"90"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/AWS.png"
      />,
      <img
        width={"205"}
        height={"59"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Microsoft_Azure_Logo-2.png"
      />,
      <img
        width={"537"}
        height={"84"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Google-Cloud.png"
      />,
      <img
        width={"263"}
        height={"66"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Power-Bi-logo-transparent-1-1.png"
      />,
      <img
        width={"153"}
        height={"90"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/AWS.png"
      />,
      <img
        width={"333"}
        height={"65"}
        src="https://www.trackmind.com/wp-content/uploads/2024/10/Tableau.png"
      />,
    ],
  };
  const [techWorkElementCount, setTechWorkElementCount] = useState(0);
  const [techWorkWithElement, setTechWorkWithElement] = useState(
    techWorkObj.stack1
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const stackTimer = setInterval(() => {
      setTechWorkElementCount((prevCount) => {
        const newCount = (prevCount + 1) % 3;
        setTechWorkWithElement(techWorkObj[`stack${newCount + 1}`]);
        return newCount;
      });
    }, 3000);
    return () => clearInterval(stackTimer);
  }, []);

  // video
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);
  useEffect(() => {
    // // const handleScroll = () => {
    // //   const elementsLeft = document.querySelectorAll(".animate_left");
    // //   const elementsRight = document.querySelectorAll(".animate_right");
    // //   elementsLeft.forEach((element) => {
    // //     if (element.getBoundingClientRect().top < window.innerHeight) {
    // //       element.classList.add("animate-left");
    // //     }
    // //   });
    // //   elementsRight.forEach((element) => {
    // //     if (element.getBoundingClientRect().top < window.innerHeight) {
    // //       element.classList.add("animate-right");
    // //     }
    // //   });
    // // };
    // // const handleMouseMove = (event) => {
    // //   const elementsLeft = document.querySelectorAll(".case_studies_img");
    // //   const cursorY = event.clientY;
    // //   elementsLeft.forEach((element) => {
    // //     const elementY = element.getBoundingClientRect().top + window.scrollY;
    // //     const distance = cursorY - elementY;
    // //     const translateX = Math.min(distance / 10, 50); // Adjust the divisor and max value as needed
    // //     console.log(translateX);
    // //     element.style.transform = `translateX(${translateX}px)`;
    // //   });
    // // };
    // // window.addEventListener("mousemove", handleMouseMove);
    // // window.addEventListener("scroll", handleScroll);
    // // return () => {
    // //   window.removeEventListener("scroll", handleScroll);
    // //   window.removeEventListener("mousemove", handleMouseMove);
    // // };
    // const observerOptions = { threshold: 0.1 };
    // const observerCallback = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       if (entry.target.classList.contains("case_studies_img")) {
    //         entry.target.classList.add("animate-left");
    //       } else if (entry.target.classList.contains("case_studies_details")) {
    //         entry.target.classList.add("animate-right");
    //       }
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // };
    // const observer = new IntersectionObserver(
    //   observerCallback,
    //   observerOptions
    // );
    // const elementsLeft = document.querySelectorAll(".animate_left");
    //   const elementsRight = document.querySelectorAll(".animate_right");
    // elementsLeft.forEach((element) => observer.observe(element));
    // elementsRight.forEach((element) => observer.observe(element));
    // return () => {
    //   elementsLeft.forEach((element) => observer.unobserve(element));
    //   elementsRight.forEach((element) => observer.unobserve(element));
    // };
    // -----------------------
    // const elementsLeft = document.querySelectorAll(".animate_left");
    // const elementsRight = document.querySelectorAll(".animate_right");
    // const handleScrollMove = () => {
    //   const scrollY = window.scrollY;
    //   elementsLeft.forEach((element) => {
    //     const elementY = element.getBoundingClientRect().top + window.scrollY;
    //     const distance = scrollY - elementY;
    //     const translateX = Math.min(distance / 10, 50); // Adjust the divisor and max value as needed
    //     element.style.transform = `translateX(${0}px)`;
    //     // element.classList.add("animate-left");
    //   });
    //   elementsRight.forEach((element) => {
    //     const elementY = element.getBoundingClientRect().top + window.scrollY;
    //     const distance = scrollY - elementY;
    //     const translateX = Math.min(-distance / 10, 50); // Adjust the divisor and max value as needed
    //     element.style.transform = `translateX(-${0}px)`;
    //     // element.classList.add("animate-right");
    //   });
    // };
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add("animate-left");
    //       window.addEventListener("scroll", handleScrollMove);
    //     } else {
    //       entry.target.classList.remove("animate-left");
    //       window.removeEventListener("scroll", handleScrollMove);
    //     }
    //   });
    // });
    // elementsLeft.forEach((element) => observer.observe(element));
    // elementsRight.forEach((element) => observer.observe(element));
    // return () => {
    //   elementsLeft.forEach((element) => observer.unobserve(element));
    //   elementsRight.forEach((element) => observer.unobserve(element));
    //   window.removeEventListener("scroll", handleScrollMove);
    // };
    // ----------------
    // const elementsLeft = document.querySelectorAll(".case_studies_img");
    // const elementsRight = document.querySelectorAll(".case_studies_details");
    // const observerOptions = {
    //   root: null,
    //   rootMargin: "30px",
    //   threshold: 0.1,
    // };
    // const observerCallback = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       if (entry.target.classList.contains("case_studies_img")) {
    //         entry.target.classList.add("animate-left");
    //       } else if (entry.target.classList.contains("case_studies_details")) {
    //         entry.target.classList.add("animate-right");
    //       }
    //     }
    //   });
    // };
    // const observer = new IntersectionObserver(
    //   observerCallback,
    //   observerOptions
    // );
    // elementsLeft.forEach((element) => observer.observe(element));
    // elementsRight.forEach((element) => observer.observe(element));
    // const handleScrollMove = () => {
    //   const scrollY = window.scrollY;
    //   elementsLeft.forEach((element) => {
    //     const elementY = element.getBoundingClientRect().top + window.scrollY;
    //     const distance = scrollY - elementY;
    //     const translateX = Math.min(distance / 10, 50); // Adjust the divisor and max value as needed
    //     element.style.transform = `translateX(${translateX}px)`;
    //   });
    // };
    // window.addEventListener("scroll", handleScrollMove);
    // return () => {
    //   window.removeEventListener("scroll", handleScrollMove);
    //   observer.disconnect();
    // };
  }, []);

  // useEffect(() => {
  //   const elements = document.querySelectorAll(
  //     ".partners_outer_div, .home_wraper_text"
  //   );
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "30px",
  //     threshold: 0.1,
  //   };
  //   const observerCallback = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animate-up");
  //       }
  //     });
  //   };
  //   const observer = new IntersectionObserver(
  //     observerCallback,
  //     observerOptions
  //   );
  //   elements.forEach((element) => observer.observe(element));
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".partners_outer_div, .home_wraper_text, .home_solutions_header_text_p, .home_solutions_description , .solvexis_works_sub_container,.our_services_home_parent_container,.tech_work_header , .tech_work_logos_container , .case_studies_header_txt , .case_studies_description , .case_studies_footer_header , .case_studies_footer_conclution, h1, .slider__col-btns, .Our_services_header_txt"
    );
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-up");
        } else {
          entry.target.classList.remove("animate-up");
        }
      });
      // const currentScrollY = window.scrollY;
      // entries.forEach((entry) => {
      //   if (entry.isIntersecting && currentScrollY > lastScrollY) {
      //     entry.target.classList.add("in-view");
      //   } else if (!entry.isIntersecting) {
      //     entry.target.classList.remove("in-view");
      //   }
      //   setLastScrollY(currentScrollY);
      // });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
    };
  }, [lastScrollY]);
  useEffect(() => {
    const firstContainer = document.querySelector(
      ".home_main_content_container"
    );
    const secondContainer = document.querySelector(
      ".solvexis_main_content_container"
    );
    const observerOptions = {
      root: null,
      rootMargin: "40px",
      threshold: 0.1,
    };
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          secondContainer.classList.add(".animate-up-slide");
        } else {
          secondContainer.classList.remove(".animate-up-slide");
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(firstContainer);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="home_container">
      <div className="home_main_content_container">
        <Home_Main />
      </div>
      <div className="solvexis_main_content_container">
        <div className="solvexis_section_2">
          {/* <div className="solvexis_top_mild"></div> */}
          <div className="home_wraper">
            <div className="partners_Wrap">
              <div className="partners_outer_div">
                <div className="partners_outer_Container_Left">
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2024/02/BiomEdit-Logo-1.svg"
                    className="partners_img"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            <p className="home_wraper_text">NEW YORK / LONDON / INDIA</p>
          </div>

          <div className="home_solutions_header_text">
            <p className="home_solutions_header_text_p">
              Introducing iConnect: Your Virtual AI Pannel For Real-Time,
              Accurate Candidate Assessments.
            </p>
          </div>
          <p className="home_solutions_description">
            Transform your recruitment process with iConnect—the AI tool that
            evaluates candidate responses in real-time.
          </p>
          <div className="solvexis_works_container">
            <div className="solvexis_works_sub_container">
              <p className="work_name">Real-Time Assessment</p>
              <p className="work_description">
                Instantly analyze candidate skills and behavior.
              </p>
            </div>
            <div className="solvexis_works_sub_container">
              <p className="work_name">Bias-Free Insights</p>
              <p className="work_description">
                Get objective, data-driven feedback.
              </p>
            </div>
            <div className="solvexis_works_sub_container">
              <p className="work_name">Seamless Integration</p>
              <p className="work_description">
                Easily fit into your existing hiring workflow.
              </p>
            </div>
          </div>
        </div>
        <Expertise />
        <Services />
        {/* <div className="our_services_home_parent_container">
          <OurServices />
        </div> */}
        <div className="section_3">
          <Communication_notes />
          <div className="tech_work_with_container">
            <p className="tech_work_header">Tech We Work with:</p>
            <div className="tech_work_logos_container">
              {techWorkWithElement.map((stackLogoUrl, i) => {
                // console.log(i);
                return (
                  <div key={i} className="tech_work_logos_sub_container">
                    {stackLogoUrl}
                  </div>
                );
              })}
            </div>
          </div>
          <Notes />
          <div className="case_studies_container">
            <p className="case_studies_header_txt">Solutions Delivered</p>
            <p className="case_studies_description">
              Proven Expertise: Delivering High-Impact Data Solutions for
              Industry Leaders.
            </p>
          </div>
          <div className="case_studies_roles_container web">
            <div className="case_studies_roles_sub_container">
              <img
                alt="fintech"
                draggable={false}
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-11.jpg"
                className="case_studies_img"
              />
              <div className="case_studies_details ">
                <p className="case_studies_details_header">
                  AI-Powered Legal Research Tool for Law Firms
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    A law firm struggled with time-intensive manual legal
                    research, often missing critical precedents.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Solution
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Solvexis created an AI-driven legal research tool using NLP,
                    advanced search algorithms, and contextual insights to
                    streamline the process.
                  </p>
                  {/* <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      Natural Language Processing (NLP) to analyze and
                      understand legal queries.
                    </li>
                    <li>
                      Advanced Search Algorithms to quickly find relevant case
                      laws, statutes, and legal documents.
                    </li>
                    <li>
                      Contextual Insights to highlight relevant precedents and
                      legal arguments.
                    </li>
                  </ul> */}
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Reduced research time by 40%, improved accuracy, and
                    enhanced client outcomes with faster, data-driven insights.
                  </p>
                  {/* <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>40% Reduction in time spent on legal research</li>
                    <li>
                      Enhanced accuracy with relevant case law and precedents
                      identified instantly
                    </li>
                    <li>
                      Improved client outcomes by providing faster, data-driven
                      insights.
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="case_studies_roles_sub_container">
              <div className="case_studies_details ">
                <p className="case_studies_details_header">
                  AI-Powered RAG System for Document Processing
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    The client faced inefficiencies and delays in processing and
                    retrieving information from unstructured documents.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Solution
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Solvexis deployed an AI-powered RAG system for intelligent
                    search, automated summarization, and natural language
                    queries.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Achieved 70% faster document processing, instant access to
                    key information, and enhanced productivity and
                    decision-making.
                  </p>
                  {/* <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li> 70% faster document processing</li>
                    <li>Instant access to key information</li>
                    <li>Improved productivity and decision-makin</li>
                  </ul> */}
                </div>
              </div>
              <img
                alt="fintech"
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106108.png"
                className="case_studies_img "
              />
            </div>
            <div className="case_studies_roles_sub_container">
              <img
                alt="fintech"
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106109.png"
                className="case_studies_img "
              />
              <div className="case_studies_details ">
                <p className="case_studies_details_header">
                  Data Integration and Cloud Optimization for Healthcare
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Fragmented data and high infrastructure costs limited
                    real-time access to patient information.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Solution
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Solvexis migrated systems to a secure cloud platform,
                    developed data pipelines for integration, and implemented a
                    real-time analytics dashboard.
                  </p>
                </div>
                {/* <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    What We Did:
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      Cloud Migration to a secure, scalable platform
                      (AWS/Azure).
                    </li>
                    <li>
                      Data Pipeline Development to integrate patient data across
                      systems.
                    </li>
                    <li>
                      Real-Time Analytics Dashboard to provide actionable
                      insights for healthcare teams.
                    </li>
                  </ul>
                </div> */}
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Reduced operational costs by 30%, enabled instant access to
                    patient data, and improved decision-making with real-time
                    analytics.
                  </p>
                  {/* <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>30% reduction in operational costs</li>
                    <li>Instant access to critical patient data.</li>
                    <li>
                      Improved decision-making with real-time, integrated
                      analytics.
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="case_studies_roles_sub_container">
              <div className="case_studies_details ">
                <p className="case_studies_details_header">
                  HR Services and Team Augmentation for a Tech Giant
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    A fast-growing tech startup struggled with scaling their
                    team and managing recruitment, onboarding, and HR compliance
                    efficiently.
                  </p>
                </div>
                {/* <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    What We Did:
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      {" "}
                      Team Augmentation: Provided skilled professionals to fill
                      critical roles in software development and project
                      managements.
                    </li>
                    <li>
                      End-to-End HR Support: Managed recruitment, employee
                      onboarding, payroll, and compliance
                    </li>
                    <li>
                      HR Technology Integration: Streamlined HR processes using
                      modern tools for performance tracking and employee
                      management.
                    </li>
                  </ul>
                </div> */}
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Solution
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Solvexis provided team augmentation, end-to-end HR support,
                    and integrated modern HR technology to streamline processes.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Achieved a 40% team scale-up in 6 months, reduced HR costs
                    by 25%, and improved employee satisfaction with seamless
                    onboarding and support.
                  </p>
                  {/* <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      {" "}
                      Successfully scaled the team by 40% within 6 months.
                    </li>
                    <li>
                      Reduced HR management costs by 25% through streamlined
                      processes.
                    </li>
                    <li>
                      Enhanced employee satisfaction with efficient onboarding
                      and support.
                    </li>
                  </ul> */}
                </div>
              </div>
              <img
                alt="fintech"
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106108.png"
                className="case_studies_img "
              />
            </div>
          </div>
          <div className="case_studies_roles_container mobile">
            <div className="case_studies_roles_sub_container">
              <img
                alt="fintech"
                draggable={false}
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-11.jpg"
                className="case_studies_img "
              />
              <div className="case_studies_details ">
                <p className="case_studies_details_header">
                  AI-Powered Legal Research Tool for Law Firms
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    A law firm faced challenges with time-consuming manual legal
                    research, often missing important precedents or case law
                    that could impact their cases
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Solution
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Solvexis developed an AI-powered legal research tool that
                    utilized{" "}
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      Natural Language Processing (NLP) to analyze and
                      understand legal queries.
                    </li>
                    <li>
                      Advanced Search Algorithms to quickly find relevant case
                      laws, statutes, and legal documents.
                    </li>
                    <li>
                      Contextual Insights to highlight relevant precedents and
                      legal arguments.
                    </li>
                  </ul>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <p className="case_studies_details_sub_container_description"></p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>40% Reduction in time spent on legal research</li>
                    <li>
                      Enhanced accuracy with relevant case law and precedents
                      identified instantly
                    </li>
                    <li>
                      Improved client outcomes by providing faster, data-driven
                      insights.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="case_studies_roles_sub_container">
              <img
                alt="fintech"
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106108.png"
                className="case_studies_img animate_right"
              />
              <div className="case_studies_details animate_left">
                <p className="case_studies_details_header">
                  AI-Powered RAG System for Document Processing
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    The client struggled to process and retrieve critical
                    information from a large volume of unstructured documents,
                    leading to delays and inefficiencies
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Solution
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Solvexis implemented a Retrieval-Augmented Generation (RAG)
                    system that enabled intelligent search, automated
                    summarization, and natural language queries for document
                    handling.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li> 70% faster document processing</li>
                    <li>Instant access to key information</li>
                    <li>Improved productivity and decision-makin</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="case_studies_roles_sub_container">
              <img
                alt="fintech"
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106109.png"
                className="case_studies_img animate_left"
              />
              <div className="case_studies_details animate_right">
                <p className="case_studies_details_header">
                  Data Integration and Cloud Optimization for Healthcare
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    Fragmented data and high infrastructure costs hindered
                    real-time access to patient information.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    What We Did:
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      Cloud Migration to a secure, scalable platform
                      (AWS/Azure).
                    </li>
                    <li>
                      Data Pipeline Development to integrate patient data across
                      systems.
                    </li>
                    <li>
                      Real-Time Analytics Dashboard to provide actionable
                      insights for healthcare teams.
                    </li>
                  </ul>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>30% reduction in operational costs</li>
                    <li>Instant access to critical patient data.</li>
                    <li>
                      Improved decision-making with real-time, integrated
                      analytics.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="case_studies_roles_sub_container">
              <img
                alt="fintech"
                src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106108.png"
                className="case_studies_img animate_right"
              />
              <div className="case_studies_details animate_left">
                <p className="case_studies_details_header">
                  HR Services and Team Augmentation for a Tech Giant
                </p>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Challenge
                  </p>
                  <p className="case_studies_details_sub_container_description">
                    A rapidly growing tech startup faced challenges in scaling
                    their team quickly, lacking the internal resources to manage
                    recruitment, onboarding, and HR compliance efficiently.
                  </p>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    What We Did:
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      {" "}
                      Team Augmentation: Provided skilled professionals to fill
                      critical roles in software development and project
                      managements.
                    </li>
                    <li>
                      End-to-End HR Support: Managed recruitment, employee
                      onboarding, payroll, and compliance
                    </li>
                    <li>
                      HR Technology Integration: Streamlined HR processes using
                      modern tools for performance tracking and employee
                      management.
                    </li>
                  </ul>
                </div>
                <div className="case_studies_details_sub_container">
                  <p className="case_studies_details_sub_container_txt">
                    Outcome
                  </p>
                  <ul
                    style={{ listStyleType: "none" }}
                    className="case_studies_details_sub_container_description"
                  >
                    <li>
                      {" "}
                      Successfully scaled the team by 40% within 6 months.
                    </li>
                    <li>
                      Reduced HR management costs by 25% through streamlined
                      processes.
                    </li>
                    <li>
                      Enhanced employee satisfaction with efficient onboarding
                      and support.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer_notes />

        {/* <div className="case_studies_footer">
          <p c className="case_studies_footer_header">
            Let’s Build Something Amazing Together.
          </p>
          <div className="case_studies_footer_conclution">
            <p className="case_studies_footer_txt">
              “Trackmind brings careful strategic planning, exceptional creative
              design and vast technical expertise to any project we send their
              way. Deep industry knowledge and transparent communication makes
              our experience smooth and straightforward every time.”
            </p>
            <p className="case_studies_footer_brent">Brent Eck</p>
            <p className="case_studies_footer_ceo">CEO Metagenics</p>
          </div>
        </div> */}
        <ContactUsForm />
        
      </div>
    </div>
  );
};
export default Home;
// import React, { useEffect } from 'react';
// import './App.css'; // Import your CSS file

// const CaseStudies = () => {
//   useEffect(() => {
//     const elementsLeft = document.querySelectorAll('.case_studies_img');
//     const elementsRight = document.querySelectorAll('.case_studies_details');

//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1,
//     };

//     const observerCallback = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target.classList.contains('case_studies_img')) {
//             entry.target.classList.add('animate-left');
//           } else if (entry.target.classList.contains('case_studies_details')) {
//             entry.target.classList.add('animate-right');
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     elementsLeft.forEach((element) => observer.observe(element));
//     elementsRight.forEach((element) => observer.observe(element));

//     const handleScrollMove = () => {
//       const scrollY = window.scrollY;

//       elementsLeft.forEach((element) => {
//         const elementY = element.getBoundingClientRect().top + window.scrollY;
//         const distance = scrollY - elementY;
//         const translateX = Math.min(distance / 10, 50); // Adjust the divisor and max value as needed
//         element.style.transform = `translateX(${translateX}px)`;
//       });
//     };

//     window.addEventListener('scroll', handleScrollMove);
//     return () => {
//       window.removeEventListener('scroll', handleScrollMove);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="case_studies_roles_container web">
//       <div className="case_studies_roles_sub_container">
//         <img
//           alt="fintech"
//           draggable={false}
//           src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-11.jpg"
//           className="case_studies_img animate_left"
//         />
//         <div className="case_studies_details animate_right">
//           <p className="case_studies_details_header">
//             Fintech API Performance Enhancement
//           </p>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Challenge
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               A healthcare provider required deep insights from large datasets.
//             </p>
//           </div>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Solution
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               Developed an AI-powered data analytics platform for comprehensive data analysis.
//             </p>
//           </div>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Outcome
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               Better patient care strategies and streamlined operations.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="case_studies_roles_sub_container">
//         <div className="case_studies_details animate_left">
//           <p className="case_studies_details_header">
//             Fintech API Performance Enhancement
//           </p>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Challenge
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               A healthcare provider required deep insights from large datasets.
//             </p>
//           </div>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Solution
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               Developed an AI-powered data analytics platform for comprehensive data analysis.
//             </p>
//           </div>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Outcome
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               Better patient care strategies and streamlined operations.
//             </p>
//           </div>
//         </div>
//         <img
//           alt="fintech"
//           src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106108.png"
//           className="case_studies_img animate_right"
//         />
//       </div>
//       <div className="case_studies_roles_sub_container">
//         <img
//           alt="fintech"
//           src="https://www.trackmind.com/wp-content/uploads/2024/09/Group-15106109.png"
//           className="case_studies_img animate_left"
//         />
//         <div className="case_studies_details animate_right">
//           <p className="case_studies_details_header">
//             Fintech API Performance Enhancement
//           </p>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Challenge
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               A healthcare provider required deep insights from large datasets.
//             </p>
//           </div>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Solution
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               Developed an AI-powered data analytics platform for comprehensive data analysis.
//             </p>
//           </div>
//           <div className="case_studies_details_sub_container">
//             <p className="case_studies_details_sub_container_txt">
//               Outcome
//             </p>
//             <p className="case_studies_details_sub_container_description">
//               Better patient care strategies and streamlined operations.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudies;
