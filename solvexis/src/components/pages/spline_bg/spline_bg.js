import React, { lazy, Suspense, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineScene = ({ onLoad }) => {
  const [splineLoading, setSplineLoading] = useState(true);
   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 900);
  
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 900);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    if (!isLargeScreen) {
      return null;
    }
  return (
    <div className="spline-bg">
      <div className="spline-bg-cont">
        <Suspense
          fallback={<div className="solvexis_loading_screen">Solvexis</div>}
        >
          <Spline
            onLoad={() => {
              setSplineLoading(false);

              console.log("Spline scene loaded");
            }}
            scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode"
          />
        </Suspense>
      </div>
      <div className="spline-bg__fade"></div>
      {splineLoading && (
        <div className="solvexis_loading_screen">Solvexis...</div>
      )}
    </div>
  );
};

export default SplineScene;
