import React, { useEffect, useRef } from "react";
import "./servicesMp4.css";
const ServicesVedio = ({ src }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);
  return (
    <div className="vidio_container">
      <div className="vedio_background_gradient"></div>{" "}
      <video
        className="vedio"
        ref={videoRef}
        width="100%"
        height="100%"
        muted
        loop
        autoPlay
        playsInline
      >
        {" "}
        <source src={src} type="video/mp4" /> Your browser does not support the
        video tag.{" "}
      </video>
    </div>
  );
};
export default ServicesVedio;
