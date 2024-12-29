import { NavLink, useNavigate } from "react-router";
import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [navbar, setNavBar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleNavbar = () => {
    setNavBar(!navbar);
  };

  return (
    <header>
      <nav className="navbar_container">
        <div className="navbar_logo_container">
          <p className="navbar_logo_text">Solvexis</p>
        </div>
        <div
          className={`navbar_link_parent_container ${
            navbar ? "active_navbar" : ""
          }`}
        >
          <div className="navbar_link_container">
            <NavLink
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={({ isActive }) =>
                isActive ? "active_nav_link" : "inactive_nav_link"
              }
              to="/"
            >
              Services
            </NavLink>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="services_info"
            >
              <div
                className={`services_header_container ${
                  isHovered ? "services_header_container_hover" : ""
                }`}
              >
                <p
                  onClick={()=>{navigate("/services")}}
                  className={`services_header_txt ${
                    isHovered ? "services_header_txt_hover" : ""
                  }`}
                >
                  AI Product Development
                </p>
                <p
                  onClick={()=>{navigate("/data-and-cloud")}}

                  className={`services_header_txt ${
                    isHovered ? "services_header_txt_hover" : ""
                  }`}
                >
                  Data and Cloud Engineering
                </p>
                <p
                  onClick={()=>{navigate("/hr")}}

                  className={`services_header_txt ${
                    isHovered ? "services_header_txt_hover" : ""
                  }`}
                >
                  HR Services
                </p>
              </div>

              {/* <div className="services_parent_container">
                <div className="services_logo">
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2023/03/Georgia-Pacific-scaled-copy-1-WHITE-1.png"
                    alt="logo"
                  />
                </div>
                <div className="services_detailcontainer">
                  <p className="services_header_txt">AI Product Development</p>
                </div>
              </div>
              <div className="services_parent_container">
                <div className="services_logo">
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2023/03/Georgia-Pacific-scaled-copy-1-WHITE-1.png"
                    alt="logo"
                  />
                </div>
                <div className="services_detailcontainer">
                  <p
                    className="services_header_txt"
                    style={{ color: "yellow" }}
                  >
                    Data and Cloud Engineering
                  </p>
                </div>
              </div>
              <div className="services_parent_container">
                <div className="services_logo">
                  <img
                    src="https://www.trackmind.com/wp-content/uploads/2023/03/Georgia-Pacific-scaled-copy-1-WHITE-1.png"
                    alt="logo"
                  />
                </div>
                <div className="services_detailcontainer">
                  <p className="services_header_txt" style={{ color: "gray" }}>
                    HR Services
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="navbar_link_container">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active_nav_link" : "inactive_nav_link"
              }
            >
              Solutions{" "}
            </NavLink>
          </div>
          <div className="navbar_link_container">
            <NavLink
              to="/plan"
              className={({ isActive }) =>
                isActive ? "active_nav_link" : "inactive_nav_link"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="navbar_menubar_container" onClick={handleNavbar}>
          {!navbar && (
            <FontAwesomeIcon
              id="navbar_menubar_container"
              className="navbar_menubar_container"
              icon={faBars}
            />
          )}
          {navbar && (
            <FontAwesomeIcon className="navbar_close_icon" icon={faTimes} />
          )}
        </div>
      </nav>
      <div className={`dropdown_menubar_container ${navbar ? "open" : ""}`}>
        <div className="navbar_link_container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_nav_link" : "inactive_nav_link"
            }
            to="/home"
          >
            Services
          </NavLink>
          <div className="services_info">
            <p className="services_header_txt">AI Product Development</p>
            <p className="services_header_txt">Data and Cloud Engineering</p>
            <p className="services_header_txt">HR Services</p>
            {/* <div className="services_parent_container">
              <div className="services_logo">
                <img
                  src="https://www.trackmind.com/wp-content/uploads/2023/03/Georgia-Pacific-scaled-copy-1-WHITE-1.png"
                  alt="logo"
                />
              </div>
              <div className="services_detailcontainer">
                <p className="services_header_txt">AI Product Development</p>
                <p className="services_content_text">
                  Leverage the power of artificial intelligence to create
                  cutting-edge products tailored to your business needs. From
                  concept to deployment, we deliver AI-driven solutions that
                  automate workflows, enhance decision-making, and unlock new
                  opportunities.
                </p>
              </div>
            </div>
            <div className="services_parent_container">
              <div className="services_logo">
                <img
                  src="https://www.trackmind.com/wp-content/uploads/2023/03/Georgia-Pacific-scaled-copy-1-WHITE-1.png"
                  alt="logo"
                />
              </div>
              <div className="services_detailcontainer">
                <p className="services_header_txt " style={{ color: "yellow" }}>
                  Data and Cloud Engineering
                </p>
                <p className="services_content_text">
                  Empower your organization with modern data and cloud
                  architectures. Our expertise ensures seamless data
                  integration, efficient processing, and scalable cloud
                  infrastructure to support your growth.
                </p>
              </div>
            </div>
            <div className="services_parent_container">
              <div className="services_logo">
                <img
                  src="https://www.trackmind.com/wp-content/uploads/2023/03/Georgia-Pacific-scaled-copy-1-WHITE-1.png"
                  alt="logo"
                />
              </div>
              <div className="services_detailcontainer">
                <p className="services_header_txt" style={{ color: "gray" }}>
                  HR Services
                </p>
                <p className="services_content_text">
                  {" "}
                  Streamline HR processes with our comprehensive services. From
                  hiring top talent to ensuring compliance and efficient payroll
                  management, we help you focus on what matters—growing your
                  business.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="navbar_link_container">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active_nav_link" : "inactive_nav_link"
            }
          >
            Solutions{" "}
          </NavLink>
        </div>
        <div className="navbar_link_container">
          <NavLink
            to="/plan"
            className={({ isActive }) =>
              isActive ? "active_nav_link" : "inactive_nav_link"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar_container">
//       <div className="navbar_logo_container">
//         <p className="navbar_logo_text">Solvexis</p>
//         <button className="menu_toggle" onClick={toggleMenu}>
//           ☰
//         </button>
//       </div>
//       <motion.div
//         className={`navbar_link_parent_container ${isOpen ? "open" : ""}`}
//         initial={{ height: 0 }}
//         animate={{ height: isOpen ? "auto" : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="navbar_link_container">
//           <NavLink
//             className={({ isActive }) =>
//               isActive ? "active_nav_link" : "inactive_nav_link"
//             }
//             to="/"
//           >
//             Services
//           </NavLink>
//           <div className="services_info">
//             <div className="services_parent_container">
//               <div className="services_logo">
//                 <img
//                   src="https://www.trackmind.com/wp-content/uploads/2023/03/Georgia-Pacific-scaled-copy-1-WHITE-1.png"
//                   alt="logo"
//                 />
//               </div>
//               <div className="services_detailcontainer">
//                 <p className="services_header_txt">Real-Time Assessment</p>
//                 <p className="services_content_text">
//                   Instantly analyze candidate skills and behavior.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="navbar_link_container">
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "active_nav_link" : "inactive_nav_link"
//             }
//           >
//             Solutions
//           </NavLink>
//         </div>
//         <div className="navbar_link_container">
//           <NavLink
//             to="/plan"
//             className={({ isActive }) =>
//               isActive ? "active_nav_link" : "inactive_nav_link"
//             }
//           >
//             Contact Us
//           </NavLink>
//         </div>
//       </motion.div>
//     </nav>
//   );
// };
