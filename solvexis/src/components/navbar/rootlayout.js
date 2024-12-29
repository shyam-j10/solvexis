import "./navbar.css";
import { Link, Outlet } from "react-router";
import Navbar from "./navbar";

const RootLayout = () => {

  return (
    <div className="app_rootlayout_container">
      <div style={{ position: "relative", zIndex: 10000 }}>
        <div className="app_rootlayout_navbar_parent_container">
          <Navbar />
        </div>
        <div className="app_rootlayout_outlet_container">
          <Outlet />
        </div>
        <footer style={{ zIndex: 3 }} className="footer_container">
          <div className="footer_solvexis_info_container">
            <div className="footer_company_detail">
              <p className="footer_company_name">Solvexis</p>
              <p className="footer_company_description">
                Solvexis is a global leader in strategy, creative and technology
                solutions.
              </p>
            </div>
            <div className="footer_nav_links">
              <Link className="footer_nav_link">Services</Link>
              <Link className="footer_nav_link">Solutions</Link>
              <Link className="footer_nav_link">Contact Us</Link>
            </div>
            <div className="footer_contact_info">
              <div className="footer_contact_info_sub_container">
                <p className="footer_contact_info_sub_container_header">
                  Email
                </p>
                <a
                  className="footer_contact_links"
                  href="mailto:contact@solvexis.com"
                >
                  contact@solvexis.com
                </a>
              </div>
              <div className="footer_contact_info_sub_container">
                <p className="footer_contact_info_sub_container_header">
                  Mobile
                </p>
                <a className="footer_contact_links" href="tel:8976787-8787">
                  8976787-8787
                </a>
              </div>
            </div>
            {/* <div className="footer_logo_container">
              <img
                className="footer_logo_img"
                height="100px"
                width="100px"
                src="https://www.trackmind.com/wp-content/uploads/2024/04/image-removebg-preview.png"
              />
              <img
                width="100px"
                src="https://www.trackmind.com/wp-content/uploads/2024/04/Nasscom-logo-svg.png"
              />
            </div> */}
          </div>
          <div className="footer_social_media">
            <div className="footer_social_media_icons_container">
              <a>
                <img
                  src="https://assets.website-files.com/6352be3ac122e43cfbbc7d48/6353123cf635b2034af3046d_Group%20507.svg"
                  alt="instagram"
                  className="footer_icons"
                />
                <span className="footer_contact_links">@Solvexis</span>
              </a>
              <a>
                <img
                  src="https://trackmind.com/wp-content/uploads/2022/11/bxl_linkedin_1.png"
                  alt="linkedin"
                  className="footer_icons"
                />
                <span className="footer_contact_links">Solvexis</span>
              </a>
            </div>
            <div className="footer_solvexis_histry">
              <p className="footer_contact_links">
                ©2023 Solvexis Solutions, LLC.{" "}
              </p>
              <p className="footer_contact_links">Privacy Policy</p>
              <p className="footer_contact_links">Terms</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
