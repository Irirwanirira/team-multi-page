import styled from "styled-components";

const About = () => {
  return (
    <AboutSection>
      <div>
        <div className="first_view">
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
            src="/assets/bg-pattern-home-2.svg"
            alt="home-2"
            className="home-2"
          />
        </div>
        <div className="about_second_view">
          <img
            src="/assets/bg-pattern-about-2-contact-1.svg"
            alt="image-about-1"
            className="image-2"
          />
          <div className="content">
            <h1>Meet the directors</h1>
            <div className="card_collections">
              <div className="card">
                <div className="image_container">
                  <img src="/assets/avatar-cruz.jpg" alt="avatar-cruz" />
                </div>

                <h2>Cruz Hamer</h2>
                <p>COO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img
                    src="/assets/avatar-christian.jpg"
                    alt="avatar-christian"
                  />
                </div>
                <h2 className="name">Christian Watts</h2>
                <p className="position">CTO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img src="/assets/avatar-cruz.jpg" alt="avatar-cruz" />
                </div>
                <h2>Cruz Hamer</h2>
                <p>COO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img src="/assets/avatar-cruz.jpg" alt="avatar-cruz" />
                </div>
                <h2>Cruz Hamer</h2>
                <p>COO</p>
                <button>+</button>
              </div>
              <div className="card">
                <div className="image_container">
                  <img src="/assets/avatar-cruz.jpg" alt="avatar-cruz" />
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
                  <img src="/assets/icon-facebook.svg" alt="facebook" />
                  <img src="/assets/icon-twitter.svg" alt="twitter" />
                </div>
                <button>x</button>
              </div>
            </div>
          </div>
          <img
            src="/assets/bg-pattern-home-4-about-3.svg"
            alt="about-3"
            className="about-3"
          />
        </div>
        <section className="about_third_section">
          <img
            src="/assets/bg-pattern-about-4.svg"
            alt="pattern-about-4.svg"
            className="image-4"
          />
          <div className="contents">
            <h1>Some of our clients</h1>
            <div className="partners">
              <img src="/assets/logo-the-verge.png" alt="" />
              <img src="/assets/logo-jakarta-post.png" alt="" />
              <img src="/assets/logo-the-guardian.png" alt="" />
              <img src="/assets/logo-tech-radar.png" alt="" />
              <img src="/assets/logo-gadgets-now.png" alt="" />
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
            <div className="address">
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
    padding: 0 12rem;
    height: 50vh;
    position: relative;
    background-color: #032427;
    display: flex;
    align-items: center;
    justify-content: center;
    .image-4 {
      position: absolute;
      top: 0;
      left: 0;
    }
    .contents {
      text-align: center;
      h1 {
        margin: 0;
      }
      .partners {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 3em;
        img {
          width: 15%;
        }
      }
    }
  }
  .pink_section {
    position: relative;
    background-color: #f38799;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #012f33;
    button {
      background-color: #f38799;
      border: 2px solid #012f33;
      color: #012f33;
    }
    img {
      position: absolute;
      left: 0;
      bottom: 0;
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

  @media only screen and (min-width: 641px) and (max-width: 1007px) {
    .first_view {
      padding: 0 6rem;
      position: relative;
      background-color: #024c52;
      height: 70vh;
      .body_part {
        padding-block: 5rem;
        display: flex;
        justify-content: space-between;
      }
    }

    .about_second_view {
      background-color: #013e44;
      position: relative;

      .content {
        padding: 5rem 2rem;
        text-align: center;
        h1 {
          font-size: 35px;
        }
        .card_collections {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2rem;
          margin-block: 4rem;
          .card {
            width: 100%;
            grid-column: span 3;
          }
          .social_icons {
            display: flex;
            gap: 1rem;
            padding: 1rem;
          }
        }
      }
    }

    .about_third_section {
      padding: 0 6rem;
      height: 30vh;
      .image-4 {
        width: 15%;
      }
      .contents {
        text-align: center;
        h1 {
          margin-block: 2rem;
        }
        .partners {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 3em;
          img {
            width: 15%;
          }
        }
      }
    }
    .pink_section {
      padding: 3rem;
      justify-content: space-around;
      h1 {
        font-size: 30px;
      }
      button {
        padding: 0.5rem 2rem;
      }
    }

    .footer_section {
      padding: 1rem 2rem;
      display: block;
      .left_of_footer {
        gap: 2rem;
        .team {
          gap: 1rem;
        }
      }
      .right_of_footer {
        display: flex;
        justify-content: center;
        align-items: center;
        .social_icons {
          align-self: flex-start;
        }
        p {
          align-self: flex-end;
        }
      }
    }
  }

  @media only screen and (max-width: 641px) {
    overflow: hidden;
    .first_view {
      padding: 0 3rem;
      position: relative;
      height: 90vh;
      .body_part {
        padding-top: 2rem;
        flex-direction: column;
        text-align: center;

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
            display: none;
          }
          p {
            font-size: 25px;
            font-weight: bold;
          }
        }
      }
    }
    .about_second_view {
      background-color: #013e44;
      position: relative;

      .content {
        padding: 5rem 2rem;
        text-align: center;
        h1 {
          font-size: 35px;
        }

        .card_collections {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2rem;
          margin-block: 4rem;
          .card {
            width: 100%;
            grid-column: span 3;
          }
          .social_icons {
            display: flex;
            gap: 1rem;
            padding: 1rem;
          }
        }
      }
    }
    .about_third_section {
      padding: 0 12rem;
      height: 30vh;
      justify-content: space-between;

      .image-4 {
        width: 20%;
      }
      .contents {
        text-align: center;
        h1 {
          font-size: 20px;
          margin-block: 2rem;
        }
        .partners {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 2em;
          img {
            width: 35%;
          }
        }
      }
    }

    .pink_section {
      position: relative;
      background-color: #f38799;
      height: 30vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #012f33;
      h1 {
        font-size: 30px;
        margin-block: 2rem;
      }
      button {
        background-color: #f38799;
        border: 2px solid #012f33;
        color: #012f33;
      }
      img {
        width: 20%;
      }
    }

    .footer_section {
      padding: 1rem 2rem;
      flex-direction: column;
      .left_of_footer {
        flex-direction: column;
        gap: 2rem;
        .links {
          padding: 0;
          margin: 0;
        }
        .address ul {
          padding: 0;
          margin: 0;
          text-align: center;
          font-size: 20px;
          font-weight: border;
        }
      }
      .right_of_footer {
        display: flex;
        margin: 0;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .social_icons {
          align-self: center;
        }
      }
    }
  }
`;

export default About;
