// import React, { useState } from "react";
// import "./contact.css";

// const ContactUsForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     let tempErrors = {};
//     tempErrors.name = formData.name ? "" : "Name is required";
//     tempErrors.email = formData.email ? "" : "Email is required";
//     tempErrors.message = formData.message ? "" : "Message is required";
//     setErrors(tempErrors);
//     return Object.values(tempErrors).every((x) => x === "");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Handle form submission
//       console.log("Form submitted:", formData);
//     }
//   };

//   return (
//     <div className="contact-form-container">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={errors.name ? "error" : ""}
//           />
//           {errors.name && <span className="helper-text">{errors.name}</span>}
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? "error" : ""}
//           />
//           {errors.email && <span className="helper-text">{errors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label>Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className={errors.message ? "error" : ""}
//           ></textarea>
//           {errors.message && (
//             <span className="helper-text">{errors.message}</span>
//           )}
//         </div>
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactUsForm;
import React, { useRef, useState } from "react";
import "./contact.css";
import { isValidEmail, isValidName, otherFealds } from "../../utils/regex";
import emailjs from "emailjs-com";
const ContactUsForm = () => {
  const form = useRef();
  const messageRef = useRef(null);

  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(false);
  const [emailErr, seterrStatus] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({});
  };

  const inputValidation = (form) => {
    const formKeys = Object.keys(form);

    let err = {};
    let errText = {
      firstName: "Invalid First Name",
      lastName: "Invalid Last Name",
      email: "Invalid email",
      service: "Invalid Service",
      additionalInfo: "Invalid Additional Info",
    };
    console.log("neter");
    Object.keys(errText).forEach((errKey) => {
      console.log(errKey, "000000000000000000");
      if (!formKeys.includes(errKey)) {
        console.log("ernter no value feald ", errKey);
        err[errKey] = errText[errKey];
      }
    });
    console.log(err);
    formKeys.forEach((key) => {
      switch (key) {
        case "firstName":
          console.log("enmter name");
          const checkName = isValidName(form?.firstName);
          if (!checkName) {
            err.firstName = "Invalid First Name";
          }

          break;

        case "lastName":
          const checklastName = isValidName(form?.lastName);
          if (!checklastName) {
            err.lastName = "Invalid Last Name";
          }

          break;

        case "email":
          const checkEmail = isValidEmail(form?.email);
          if (!checkEmail) {
            err.email = "Invalid Email";
          }

          break;
        case "additionalInfo":
          const checkadditionalInfo = otherFealds(form?.additionalInfo);
          if (!checkadditionalInfo) {
            err.additionalInfo = "Invalid Email";
          }

          break;
        case "service":
          const checkService = otherFealds(form?.service);
          if (!checkService) {
            err.service = "Invalid Email";
          }

          break;

        default:
          break;
      }
    });
    if (!formKeys.length) {
      err = errText;
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkFormError = inputValidation(formData);
    const checkErrorLength = Object.keys(checkFormError);
    if (checkErrorLength.length) {
      setErrors(checkFormError);
    } else {
      setStatus(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE,
          process.env.REACT_APP_templateId,
          form.current,
          process.env.REACT_APP_EMAILJS_PRIVATE_KEY
        )
        .then(
          (result) => {
            e.target.reset();
            setStatus(false);
            setFormData({});
            console.log(result);
            console.log(result.text);
            messageRef.current.value = "";
          },
          (error) => {
            setStatus(false);

            console.log(error, ".......kjuyhtfgd");
            setStatus(false);
            seterrStatus(true);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact_header">Connect With Us</h2>
      <form
        ref={form}
        autoComplete="off"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className="form-group flex-group">
          <div className="flex-item">
            <input
              type="text"
              name="firstName"
              value={formData?.firstName}
              autoComplete="off"
              className={errors?.firstName ? "error" : ""}
            />
            <label className={formData?.firstName ? "filled" : ""}>
              First Name
            </label>
            {errors.firstName && (
              <span className="helper-text">{errors?.firstName}</span>
            )}
          </div>
          <div className="flex-item" style={{ position: "relative" }}>
            <input
              type="text"
              name="lastName"
              autoComplete="off"
              value={formData?.lastName}
              className={errors?.lastName ? "error" : ""}
            />
            <label className={formData?.lastName ? "filled" : ""}>
              Last Name
            </label>
            {errors?.lastName && (
              <span className="helper-text">{errors?.lastName}</span>
            )}
          </div>
        </div>
        <div className="form-group flex-group">
          <div className="flex-item">
            <input
              type="text"
              name="email"
              autoComplete="off"
              value={formData?.email}
              className={errors?.email ? "error" : ""}
            />
            <label className={formData?.email ? "filled" : ""}>Email</label>
            {errors.email && (
              <span className="helper-text">{errors?.email}</span>
            )}
          </div>
          <div className="flex-item" style={{ position: "relative" }}>
            <select
              name="service"
              value={formData?.service ? formData?.service : ""}
              className={errors?.service ? "error" : ""}
            >
              <option value="" disabled>
                {""}
              </option>
              <option value="AI Product Development">
                AI Product Development
              </option>
              <option value="Data And Cloud Engineering">
                Data And Cloud Engineering
              </option>
              <option value="HR Services">HR Services</option>
            </select>
            <label className={formData.service ? "filled" : ""}>Service</label>
            {errors.service && (
              <span className="helper-text">{errors.service}</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="additionalInfo"
            autoComplete="off"
            ref={messageRef}
            value={formData?.additionalInfo}
            className={errors?.additionalInfo ? "error" : ""}
          ></textarea>
          <label className={formData?.additionalInfo ? "filled" : ""}>
            Message
          </label>
          {errors?.additionalInfo && (
            <span className="helper-text">{errors.additionalInfo}</span>
          )}
        </div>
        <button type="submit" className="submit-button">
          {status ? "Sending..." : "Send Message"}
        </button>
        {emailErr && <p>Somthing Wrong... Check your connection</p>}
      </form>
    </div>
  );
};

export default ContactUsForm;
