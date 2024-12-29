import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";

const SVGAnimation = () => {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    const fetchAndCorrectJSON = async () => {
      const response = await fetch("https://www.align.com/hubfs/data.json");
      const data = await response.json();
      const correctedData = JSON.parse(
        JSON.stringify(data).replace(
          /https:\/\/www\.align\.com\/hubfs\/https:\/\/www\.align\.com\/hubfs\//g,
          "https://www.align.com/hubfs/"
        )
      );
      setAnimationData(correctedData);
    };
    fetchAndCorrectJSON();
  }, []);
  useEffect(() => {
    if (animationData) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,

        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      return () => animation.destroy();
    }
  }, [animationData]);

  return (
    <div className="svg_animation_container">
      <div className="vedio_background_gradient"></div>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default SVGAnimation;
