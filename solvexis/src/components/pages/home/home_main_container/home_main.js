import { useEffect, useState } from "react";
import AnimatedText from "./animated_text/animated_text";
import "./home_main.css";
const Home_Main = () => {
  const [initialOptions, setInitialOption] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const options = [
    {
      header: "AI Innovation",
      description: "Custom Solutions to Drive Your Business Forward.",
    },
    {
      header: "Data and Cloud Engineering",
      description: "Unlocking Scalability, Security, and Insights.",
    },
    {
      header: "HR Services",
      description: "Empowering Teams and Simplifying Workforce Solutions.",
    },
  ];
  useEffect(() => {
    setIsAnimating(true); // Start animation

    const timeout = setTimeout(() => {
      if (initialOptions < options.length - 1) {
        // console.log("enter.");
        setInitialOption(initialOptions + 1);
      } else {
        setInitialOption(0);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [initialOptions]);

  useEffect(() => {
    if (isAnimating) {
      const animationTimeout = setTimeout(() => {
        setIsAnimating(false); // Reset animation trigger
      }, 600); // Matches the animation duration
      return () => clearTimeout(animationTimeout);
    }
  }, [isAnimating]);
  const [description, setDescription] = useState(options[0].description);
  return (
    <div className="home_main_content">
      <p className="home_main_header_txt">Leading Experts In</p>
      {/* <AnimatedText options={options} setDescription={setDescription} /> */}
      <p
        className={`home_main_header_experts_txt ${
          isAnimating ? "text-visible" : ""
        }`}
      >
        {options[initialOptions].header}
      </p>
      <div
        className={`home_main_header_experts_description ${
          isAnimating ? "text-visible" : ""
        }`}
      >
        {/* <p>{description}</p> */}
        <p>{options[initialOptions].description}</p>
      </div>
    </div>
  );
};
export default Home_Main;
