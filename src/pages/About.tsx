import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <AboutSection>
      <div>
        <div className="first_view">
          <NavBar />
          <div className="body_part">
            <h1>About</h1>
            <div className="content">
              <div className="short_line"></div>
              <p>
                Finding the right people and building high performing teams can
                be hard. most companies aren't topping the abudance of global
                talent we are about to change that.
              </p>
            </div>
          </div>
          <img
            src="../../assets/bg-pattern-home-2.svg"
            alt="home-2"
            className="home-2"
          />
        </div>
        <div className="about_second_view">
          <img
            src="../../assets/bg-pattern-about-2-contact-1.svg"
            alt="image-about-1"
            className="image-2"
          />
          <div className="content">
            <h1>Meet the directors</h1>
            <div className="card_collections">
              <div className="card">
                <div className="image_container">
                  <img src="../../assets/avatar-cruz.jpg" alt="avatar-cruz" />
                </div>

                <h2>Cruz Hamer</h2>
                <p>COO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img
                    src="../../assets/avatar-christian.jpg"
                    alt="avatar-christian"
                  />
                </div>
                <h2 className="name">Christian Watts</h2>
                <p className="position">CTO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img src="../../assets/avatar-cruz.jpg" alt="avatar-cruz" />
                </div>
                <h2>Cruz Hamer</h2>
                <p>COO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img src="../../assets/avatar-cruz.jpg" alt="avatar-cruz" />
                </div>
                <h2>Cruz Hamer</h2>
                <p>COO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img src="../../assets/avatar-cruz.jpg" alt="avatar-cruz" />
                </div>
                <h2>Cruz Hamer</h2>
                <p>COO</p>
                <button>+</button>
              </div>
              <div className="card">
                <h2>Cruz Hamer</h2>
                <p>
                  "Empowered teams create truly amazing products. Set the north
                  start and let them follow it"
                </p>
                <div className="social_icons">
                  <img src="../../assets/icon-facebook.svg" alt="facebook" />
                  <img src="../../assets/icon-twitter.svg" alt="twitter" />
                </div>
                <button>x</button>
              </div>
            </div>
          </div>
          <img
            src="../../assets/bg-pattern-home-4-about-3.svg"
            alt="about-3"
            className="about-3"
          />
        </div>
        <section className="about_third_section">
          <img src="../../assets/bg-pattern-about-4.svg" alt="" />
          <div className="contents">
            <h1>Some of our clients</h1>
            <div className="partners">
              <img src="../../assets/logo-the-verge.png" alt="" />
              <img src="../../assets/logo-jakarta-post.png" alt="" />
              <img src="../../assets/logo-the-guardian.png" alt="" />
              <img src="../../assets/logo-tech-radar.png" alt="" />
              <img src="../../assets/logo-gadgets-now.png" alt="" />
            </div>
          </div>
        </section>
        <section className="pink_section">
          <img
            src="../../assets/bg-pattern-home-6-about-5.svg"
            alt="home_5"
            className="home_5"
          />
          <h1>Ready to Get started? </h1>
          <button>contact us</button>
        </section>
        <footer className="footer_section">
          <div className="left_of_footer">
            <div className="team">
              <h1>myteam</h1>
              <ul className="links">
                <li>
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/About">about</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>987 hill crest lane</li>
                <li>Irving, CA</li>
                <li>California 94549</li>
                <li>Call Us: 949-833-7432</li>
              </ul>
            </div>
          </div>
          <div className="right_of_footer">
            <div className="social_icons">
              <img src="../../assets/icon-facebook.svg" alt="facebook" />
              <img src="../../assets/icon-pinterest.svg" alt="pinterest" />
              <img src="../../assets/icon-twitter.svg" alt="twitter" />
            </div>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.div`
  .first_view {
    padding: 0 12rem;
    position: relative;
    background-color: #024c52;
    height: 60vh;
    .body_part {
      padding-top: 5rem;
      display: flex;
      justify-content: space-between;
      h1 {
        flex: 2;
        color: white;
        span {
          color: #f38799;
        }
      }
      .content {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          height: 3px;
          width: 3rem;
          background-color: #d37db9;
        }
      }
    }
    .home-2 {
      position: absolute;
      right: 20%;
      bottom: 0;
    }
  }

  .about_second_view {
    background-color: #013e44;
    position: relative;
    .image-2 {
      position: absolute;
      top: 0;
      left: -5rem;
    }

    .content {
      padding: 5rem 12rem;
      text-align: center;

      .card_collections {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 3rem;

        .card {
          width: 70%;
          grid-column: span 4;
          background-color: #163a37;
          padding: 2rem 0 0 0;
          border-radius: 0.1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          h2 {
            margin: 0;
          }

          p {
            margin: 0 0 2em 0;
            font-style: italic;
          }
          button {
            background-color: #f38799;
            padding: 0;
            color: white;
            border: none;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
            margin-bottom: -1rem;
          }
          .image_container {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .social_icons {
            display: flex;
            gap: 1rem;
            padding: 1rem;
          }
        }
      }
    }
    .about-3 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  .about_third_section {
    background-color: #032427;
    .contents {
      padding: 0 12rem 5rem 12rem;
      text-align: center;
      .partners {
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
          width: 15%;
        }
      }
    }
  }
  .pink_section {
    background-color: #f38799;
    padding: 3rem 12rem 0 12rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #012f33;
    button {
      background-color: #f38799;
      border: 2px solid #012f33;
      color: #012f33;
    }
    img {
      position: absolute;
      left: 0;
    }
  }

  .footer_section {
    background-color: #012f33;
    padding: 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_of_footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10rem;
      .team {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
      }
      .links {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5rem;
        color: white;
      }
      ul {
        list-style: none;
        color: #4f7275;
        li {
          margin-bottom: 1rem;
        }
      }
    }

    .right_of_footer {
      display: flex;
      flex-direction: column;
      color: #4f7275;
      .social_icons {
        align-self: flex-end;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

export default About;
