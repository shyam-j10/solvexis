
import React, { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/navbar/rootlayout";
import Home from "./components/pages/home/home";
import "./App.css"; // Import your CSS file
import ServicesPage from "./components/pages/services/services";
import DataAndCloud from "./components/pages/dataAndCloud/dataAndCloud";

function App() {
  // State to track if the screen is mobile or not
  // const [isMobile, setIsMobile] = useState(false);
  // const [Spline, setSpline] = useState(null); // State for the dynamically imported Spline component

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, path: "", element: <Home /> },{ path: "/services", element: <ServicesPage /> },{path:"/data-and-cloud", element:<DataAndCloud />}],
    },
  ]);

  // // Dynamically import the Spline component when the screen size is not mobile
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) {
  //       setIsMobile(true);
  //       setSpline(null); // Don't load Spline if it's a mobile screen
  //     } else {
  //       setIsMobile(false);
  //       import("@splinetool/react-spline").then((module) => {
  //         setSpline(module.default); // Import Spline for desktop sizes
  //       });
  //     }
  //   };

  //   handleResize(); // Call it immediately to set the state based on the initial size
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize); // Clean up on component unmount
  //   };
  // }, []); // Empty dependency array, so it runs only once when the component is mounted

  // const [splineLoading, setSplineLoading] = useState(true);

  return (
    <div className="app_container">
      {/* <div className="fade__from-top"></div> */}

      {/* Only render the Spline background if it's not a mobile device */}
      {/* {!isMobile && Spline && (
        <div className="spline-bg">
          <div className="spline-bg-cont">
            <Suspense
              fallback={
                <div
                  className="solvexis_loading_screen"
                  style={{ fontSize: "13px" }}
                >
                  Solvexis
                </div>
              }
            >
              <Spline
                onLoad={() => setSplineLoading(false)}
                scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode"
              />
            </Suspense>
          </div>
          <div className="spline-bg__fade"></div>
        </div>
      )} */}

      {/* Render content when the Spline is loaded or not needed */}
      {/* {!splineLoading && (
        <div style={{ position: "relative", zIndex: 1 }}>
          <RouterProvider router={router} />
        </div>
      )} */}
      {/* {isMobile && (
        <div>
          <RouterProvider router={router} />
        </div>
      )} */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
