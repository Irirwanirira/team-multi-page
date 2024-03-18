import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("form submitted:", formData);
      formData.name = "";
      formData.email = "";
      formData.companyName = "";
      formData.title = "";
      formData.message = "";
    } else {
      console.log("Validation error");
      console.log(formErrors);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
    };
    if (!formData.name) {
      errors.name = "This field is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "This field is required";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };
  return (
    <ContactSection>
      <div>
        <div className="first_view">
          <NavBar />
          <div className="body_part">
            <div className="character">
              <h1>Contact</h1>
              <h2>Ask us about</h2>
              <div className="small_card">
                <img
                  src="/assets/icon-person.svg"
                  alt=""
                  className="icon_holder"
                />
                <div>
                  <p className="title">The quality of your talent network</p>
                </div>
              </div>
              <div className="small_card">
                <img
                  src="/assets/icon-cog.svg"
                  alt=""
                  className="icon_holder"
                />
                <div>
                  <p className="title">
                    Usage & Implementation of our software
                  </p>
                </div>
              </div>
              <div className="small_card">
                <img
                  src="/assets/icon-chart.svg"
                  alt=""
                  className="icon_holder"
                />
                <div>
                  <p className="title">How do we help drive innovation</p>
                </div>
              </div>
            </div>
            <div className="form">
              <form action="submit" onSubmit={handleSubmit}>
                <input
                  className={
                    formErrors.name
                      ? "error"
                      : formErrors.email === ""
                      ? ""
                      : "valid"
                  }
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                {formErrors.name && (
                  <span className="errorMsg">{formErrors.name}</span>
                )}

                <input
                  className={
                    formErrors.email
                      ? "error"
                      : formErrors.name === ""
                      ? ""
                      : "valid"
                  }
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                {formErrors.email && (
                  <span className="errorMsg">{formErrors.email}</span>
                )}

                <input
                  type="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="companyName"
                />
                <input
                  type="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
                <button type="submit" className="submitBtn">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <img
            src="/assets/bg-pattern-contact-2.svg"
            alt="contact-2"
            className="contact_2_img"
          />
        </div>
        <Footer />
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  .first_view {
    height: 80vh;
    overflow: hidden;
    padding: 0 12rem;
    position: relative;
    background-color: #014e56;
    .contact_1_image {
      position: absolute;
      left: -5%;
      top: 30%;
    }
    .body_part {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .character {
        flex: 2;
        h1 {
          font: 64px;
        }
        h2 {
          color: #f67e7e;
          font-size: 32px;
        }

        .small_card {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-block: 1rem;
          color: #fff;
          font-weight: bold;
        }
      }
      .form {
        flex: 2;
        form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          input,
          textarea {
            background-color: #014e56;
            border: none;
            padding: 0.6rem;
            border-bottom: 1px solid white;
            outline: none;
            color: white;
          }
          .errorMsg {
            color: #f67e7e;
            font-size: 12px;
            font-style: italic;
          }

          .error {
            border-bottom: 1px solid #f67e7e;
          }
          .error::placeholder {
            color: #f67e7e;
          }
          .valid {
            border-bottom: 1px solid #79c8c7;
          }

          button {
            align-self: flex-start;
            background-color: #fff;
            color: #004047;
          }
        }
      }
    }
    .contact_2_img {
      position: absolute;
      right: -5%;
      bottom: 0;
    }
  }

  @media only screen and (min-width: 641px) and (max-width: 1007px) {
    .first_view {
      padding: 0 4rem;

      .contact_1_image {
        display: none;
      }
      .body_part {
        .character {
          h1 {
            font-size: 32px;
          }
          h2 {
            font-size: 24px;
          }
          .small_card {
            gap: 1rem;
            p {
              font-size: 16px;
            }
          }
        }
        .form {
          form {
            input,
            textarea {
              padding: 0.4rem;
            }
            button {
              padding: 0.4rem 1rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .first_view {
      padding: 0 2rem;
      height: max-content;
      .body_part {
        flex-direction: column;
        margin-top: 0;
        .character {
          h1 {
            text-align: center;
            font-size: 40px;
            margin: 0;
          }
          h2 {
            text-align: center;
            font-size: 32px;
            margin: 0.5rem 0;
          }
          .small_card {
            gap: 1rem;
            p {
              font-size: 16px;
            }
          }
        }

        .form {
          width: 100%;
          margin: 2rem 0;
          form {
            input,
            textarea {
              padding: 0.4rem;
            }
            button {
              padding: 0.4rem 1rem;
            }
          }
        }
      }
      .contact_2_img {
        right: -15%;
        bottom: -8%;
        width: 30%;
      }
    }
  }
`;

export default Contact;
