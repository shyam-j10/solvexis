import { useEffect } from "react";
import "./footerNotes.css";
const Footer_notes = () => {
  useEffect(() => {
    const contentContainer = document.querySelector(".footer_notes_content");
    const backgroundImg = document.querySelector(
      ".footer_notes_background_img"
    );
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentContainer.classList.add("animate-left-to-right");
          backgroundImg.classList.add("footer_notes_view_bg_animate");
        } else {
          contentContainer.classList.remove("animate-left-to-right");
          backgroundImg.classList.remove("footer_notes_view_bg_animate");
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(contentContainer);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="footer_notes_container">
      <div className="footer_notes_content_container">
        <div className="footer_notes_arrow">
          <svg
            className="arrow_img"
            width="24px"
            height="70px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.9393 69.4069C11.5251 69.9926 12.4749 69.9926 13.0607 69.4069L22.6066 59.8609C23.1924 59.2751 23.1924 58.3254 22.6066 57.7396C22.0208 57.1538 21.0711 57.1538 20.4853 57.7396L12 66.2249L3.51476 57.7396C2.92897 57.1538 1.97922 57.1538 1.39344 57.7396C0.807654 58.3254 0.807654 59.2751 1.39344 59.8609L10.9393 69.4069ZM10.5 0.5V68.3462H13.5V0.5H10.5Z"></path>
          </svg>
        </div>

        <div className="footer_notes_content">
          <div className="footer_notes_main_content">
            <div className="footer_notes_header_txt">Trust</div>

            <h2 className="footer_notes_header_description">
              <span>We're built on relationships.</span>
            </h2>

            <div className="footer_notes_description_points">
              <ul>
                <li>
                  We have delivered IT solutions across industries for over
                  three decades.&nbsp;
                </li>
                <li>
                  Our people, process, and tools have transformed technology for
                  the world's top companies.&nbsp;
                </li>
                <li>
                  We have achieved universal respect by nurturing relationships
                  on a global scale.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_notes_background_img">
        <div className="footer_notes_background_gradient"></div>
        <img
          loading="lazy"
          src="https://www.align.com/hubfs/Align%20Theme/New%20Hero%20Images/hero-5.jpg"
          alt
          data-desktopsrc="https://www.align.com/hubfs/Align%20Theme/New%20Hero%20Images/hero-2.jpg"
          data-mobilesrc="https://www.align.com/hubfs/Align%20Theme/New%20Hero%20Images/Mobile%20Versions/Align%20New%20Site-Mobile%20Image%20Sizing%20(14).png"
        />
      </div>
    </div>
  );
};

export default Footer_notes;
