import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const data = [
  {
    name: "Nikita Marks",
    position: " Founder & CEO",
    image: "/assets/avatar-nikita.jpg",
  },
  {
    name: "Cristian Duncan",
    position: "Co-founder & COO",
    image: "assets/avatar-christian.jpg",
  },
  {
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    image: "/assets/avatar-cruz.jpg",
  },
  {
    name: "Drake Heaton",
    position: "Business Development Lead",
    image: "/assets/avatar-drake.jpg",
  },
  {
    name: "Griffin Wise",
    position: "Lead Marketing",
    image: "/assets/avatar-griffin.jpg",
  },
];

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
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </p>
            </div>
          </div>
          <img
            src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
            alt="about_2-image"
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
              {data.map((item, index) => (
                <div className="card" key={index}>
                  <div className="image_container">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h2>{item.name}</h2>
                  <p>{item.position}</p>
                  <button>+</button>
                </div>
              ))}

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
                <button
                  onMouseEnter={(e: any) => {
                    e.target.style.backgroundColor = "#f67e7e";
                  }}
                  onMouseLeave={(e: any) => {
                    e.target.style.backgroundColor = "#79c8c7";
                  }}
                  style={{ backgroundColor: "#79c8c7" }}
                >
                  x
                </button>
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
              <img src="/assets/logo-the-verge.png" alt="The verge" />
              <img src="/assets/logo-jakarta-post.png" alt="Jakarta post" />
              <img src="/assets/logo-the-guardian.png" alt=" THe guardian" />
              <img src="/assets/logo-tech-radar.png" alt="Tech radar" />
              <img src="/assets/logo-gadgets-now.png" alt="gadgets" />
            </div>
          </div>
        </section>
        <section className="pink_section">
          <img
            src="../../assets/bg-pattern-home-6-about-5.svg"
            alt="home_5"
            className="home_5"
          />
          <h1>Ready to get started? </h1>
          <button>contact us</button>
        </section>
        <Footer />
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.div`
  .first_view {
    overflow: hidden;
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
          color: #f67e7e;
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
          background-color: #f67e7e;
        }
        p {
          font-size: 25px;
          font-weight: bold;
        }
      }
    }
    .home-2 {
      position: absolute;
      right: -5%;
      bottom: 0;
    }
  }

  .about_second_view {
    background-color: #004047;
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
          background-color: #012f34;
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
            background-color: #f67e7e;
            padding: 0;
            color: #004047;
            border: none;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            margin-bottom: -1rem;
          }
          button:hover {
            cursor: pointer;
            background-color: #79c8c7;
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
    background-color: #f67e7e;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #012f33;
    button {
      background-color: #f67e7e;
      border: 2px solid #012f33;
      color: #012f33;
    }
    button:hover {
      background-color: #012f33;
      color: #fff;
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
      .short_line {
        display: none;
      }
      .body_part {
        padding-block: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .home-2 {
        position: absolute;
        right: -12%;
        bottom: 0;
      }
    }

    .about_second_view {
      background-color: #013e44;
      position: relative;
      z-index: 10;
      .content {
        padding: 5rem 2rem;
        text-align: center;
        h1 {
          font-size: 35px;
        }
        .card_collections {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          row-gap: 3rem;
          column-gap: 0.5rem;
          margin-block: 4rem;
          .card {
            width: 100%;
            grid-column: span 1;
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
      z-index: 1;
      height: 30vh;
      .image-4 {
        top: -25%;
        width: 20%;
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
      img {
        position: absolute;
        left: 0;
        bottom: -5%;
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
      padding: 0 2rem;
      position: relative;
      height: 65vh;
      z-index: 20;
      .body_part {
        padding-top: 2rem;
        flex-direction: column;
        text-align: center;

        h1 {
          flex: 2;
          color: white;
          margin: 0;
          span {
            color: #f67e7e;
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
      .home-2 {
        position: absolute;
        right: -25%;
        bottom: -11%;
      }
    }
    .about_second_view {
      background-color: #013e44;
      position: relative;
      z-index: 15;

      .image-2 {
        position: absolute;
        top: -5%;
        left: -5rem;
      }

      .content {
        padding: 5rem 2rem;
        text-align: center;
        h1 {
          font-size: 35px;
        }

        .card_collections {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
      padding: 0 2rem;
      justify-content: space-between;
      .image-4 {
        top: -15%;
        left: -20%;
        width: 40%;
      }

      .contents {
        text-align: center;
        padding: 0;
        h1 {
          font-size: 32px;
          margin-block: 2rem;
        }
        .partners {
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img {
            width: 35%;
          }
        }
      }
    }

    .pink_section {
      position: relative;
      background-color: #f67e7e;
      height: 20vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #012f33;
      text-align: center;
      h1 {
        font-size: 30px;
        width: 50%;
      }
      button {
        background-color: #f67e7e;
        border: 2px solid #012f33;
        color: #012f33;
      }
      img {
        width: 30%;
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
