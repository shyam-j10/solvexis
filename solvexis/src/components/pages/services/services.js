import digitaleyeaiconcept from "../../../assets/our_services/digital-eye-ai-concept.jpg"
import infra from "../../../assets/our_services/infrastructure-automation-icon.png"
import chatboticon from "../../../assets/our_services/chatbot-icon.png"
import knowledge from "../../../assets/our_services/knowledge-share-icon.png"

import codeReview from "../../../assets/our_services/code-review-icon.png"
import ourProcess from "../../../assets/our_services/Picture1.png"
import clientChoose from "../../../assets/our_services/Picture2.png"

import "./services.css"
const ServicesPage = () => {
    let aiProducts = [
      {header : "Custom AI Solutions", desc:"Transform your vision into reality with tailored AI applications crafted to meet your specific business goals."},
      {header : "Machine Learning Model Development", desc:"Harness the power of data with sophisticated machine learning models that deliver actionable insights."},

      {header : "Natural Language Processing (NLP)", desc:"Elevate communication with cutting-edge NLP solutions for chatbots, sentiment analysis, and text processing."},
      {header : "AI-Driven Process Automation", desc:"Drive efficiency by automating complex workflows and repetitive tasks using intelligent AI systems."},
      {header : "Computer Vision Solutions", desc:"Redefine visual analysis with AI-powered tools for object detection, recognition, and image processing."},
     
      
      {header : " AI Integration Services", desc:"Seamlessly integrate AI into your operations, ensuring scalability and enhanced system capabilities."},

    ]
    return (
     <div className="services_container">
        <header className="services_header_parent_container">
            <div className="services_header_content_container">
                <p className="services_enterprise">Generative AI for Enterprise</p>
                <div className="services_header_main_content">
                    <p className="services_header_main"><span class="overline"></span> Realize the value of generative AI at your organization.</p>
                    <p className="services_header_description">We’ll help you drive AI-based process transformation quickly and securely with clear business impact from the start.</p>
                    <button className="services_contact_btn">Hear From our Team</button>
                </div>
            </div>
            <div className="services_img">
                <img alt="AI" src={digitaleyeaiconcept} className="services_header_img" />
            </div>

        </header>
        <div className="services_work_container">
            <div className="services_work_description_container">
              <p className="services_work_header">Put natural language processing to work.</p>
              <p className="services_work_description">Many technologies and business processes are incorporating generative AI — creating new opportunities for success. An effective generative AI adoption requires a secure and sustainable approach that addresses your infrastructure performance, data quality and integrity, and cost controls.</p>
              <p className="services_work_description">
               Unlock the power of generative AI and what it can do for your business, employees and customers with Insight. We’ll help you integrate an enterprise generative AI strategy into your processes and capabilities by building a foundation for success that delivers long-term value.
              </p>
            </div>
            <div className="services_work_logos">
              <p className="services_work_logo_header"><span class="overlineThin"></span> With Insight, you’ll be able to:</p>
              <div className="services_work_logo_container">
                <img src={infra} alt="services logo" />
                <p className="services_work_description">Increase employee productivity by automating repetitive tasks and streamlining processes.</p>
              </div>
              <div className="services_work_logo_container">
                <img src={chatboticon} alt="services logo" />
                <p className="services_work_description">Increase employee productivity by automating repetitive tasks and streamlining processes.</p>
              </div>
              <div className="services_work_logo_container">
                <img src={knowledge} alt="services logo" />
                <p className="services_work_description">Increase employee productivity by automating repetitive tasks and streamlining processes.</p>
              </div>
              <div className="services_work_logo_container">
                <img src={codeReview} alt="services logo" />
                <p className="services_work_description">Increase employee productivity by automating repetitive tasks and streamlining processes.</p>
              </div>
            </div>

        </div>
        <div className="services_ai">
           <p className="ai_header">AI Product Development Services</p>
           <div className="ai_products_list_container"> 
             {
              aiProducts.map((prod, key) => <div key={key} className="ai_products_container">
              <p className="ai_product_header">
              {prod?.header}
              </p>
              <p className="ai_product_description">{prod?.desc}</p>
              <p className="ai_product_link">Go </p>
              <svg class="go-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 33 15"><path d="M32 8.3c.4-.4.4-1 0-1.5L25.6.5a1 1 0 0 0-1.4 1.4L30 7.6l-5.7 5.6a1 1 0 0 0 1.4 1.4L32 8.3ZM.8 8.6h30.5v-2H.8v2Z"  /><defs><lineargradient id="a" x1="31.3" y1="7.6" x2=".8" y2="7.1" gradientunits="userSpaceOnUse"><stop stop-color="#66FFE5" /><stop offset="1" stop-color="#99A9FF" /></lineargradient></defs></svg>
           </div>)
             }
           </div>
        </div>
        <div className="services_process">
          <p className="services_process_header">Our Process</p>
          <div className="process_content_container">
            <img src={ourProcess} alt="" className="ourprocess_img"></img>
            <div className="process_container_description">
              <div>
                <p className="process_container_description_header" >Understanding Your Needs: </p>
                <p className="process_container_description_description">We start by understanding your business objectives and the challenges you face.</p>
              </div>
              <div>
                <p className="process_container_description_header" >Custom Solution Design:</p>
                <p className="process_container_description_description">Based on your unique requirements, we design and build an AI solution tailored to your business.</p>
              </div>
              <div>
                <p className="process_container_description_header" >Seamless Integration: </p>
                <p className="process_container_description_description">We ensure that the AI solution integrates smoothly into your existing systems, ensuring minimal disruption.</p>
              </div>

            </div>

          </div>
        </div>
        <div className="services_process">
          <p className="services_process_header">Why Clients Choose Us</p>
          <div className="process_content_container">
            <div className="process_container_description">
              <div>
                <p className="process_container_description_header" >End-to-End Expertise:</p>
                <p className="process_container_description_description">From strategy to deployment, we handle every aspect of AI and data engineering.</p>
              </div>
              <div>
                <p className="process_container_description_header" >Results-Driven Approach: </p>
                <p className="process_container_description_description">Our focus is on delivering solutions that make a measurable impact on your business.</p>
              </div>
              <div>
                <p className="process_container_description_header" >Scalable Solutions:  </p>
                <p className="process_container_description_description">Our solutions grow with your business, ensuring long-term success and adaptability.</p>
              </div>
              <div>
                <p className="process_container_description_header" >Ongoing Support & Optimization:  </p>
                <p className="process_container_description_description">             After deployment, we provide continuous monitoring and optimization to ensure the solution evolves with your needs</p>
              </div>
            </div>
            <img src={clientChoose} alt="" className="ourprocess_img"></img>


          </div>
        </div>
     </div>
    )
}

export default ServicesPage