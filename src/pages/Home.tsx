import styled from "styled-components";
import NavBar from "../components/NavBar";
import styles from "../animations.module.css";
import Footer from "../components/Footer";

const data = [
  {
    name: " Kady Baker",
    image: "/assets/avatar-kady.jpg",
    position: "Product Manager at Bookmark",
    description:
      " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
  },
  {
    name: "Aiysha Reese",
    image: "/assets/avatar-aiysha.jpg",
    position: "Founder of Manage",
    description:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
  },
  {
    name: "Arthur Clarke",
    image: "/assets/avatar-arthur.jpg",
    position: "Co-founder of MyPhysio",
    description:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
  },
];

const Home = () => {
  return (
    <HomeSection>
      <div>
        <div className="first_view">
          <img
            src="/assets/bg-pattern-home-1.svg"
            alt="home-1"
            className="home-1"
          />
          <NavBar />
          <div className="body_part">
            <h1>
              Find the best <span>talent</span>
            </h1>
            <div className="content">
              <div
                className={`${styles.rotateLines} ${styles.animate} ${styles.animateInfinite} ${styles.animateOrigin} short_line`}
              ></div>
              <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </p>
            </div>
          </div>
          <img
            src="/assets/bg-pattern-home-2.svg"
            alt="home-2"
            className="home-2"
          />
        </div>
        <div className="second_view">
          <div className="build_side">
            <div
              className={`${styles.rotateLines} ${styles.animate} ${styles.animateInfinite} ${styles.animationSlow} short_line`}
            ></div>
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>
          <div className="character">
            <div className="small_card">
              <img
                src="/assets/icon-person.svg"
                alt=""
                className="icon_holder"
              />
              <div>
                <p className="title">Experienced Individuals</p>
                <p className="content">
                Our network is made up of highly experienced professionals who are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="small_card">
              <img
                src="/assets/icon-cog.svg"
                alt=""
                className="icon_holder"
              />
              <div>
                <p className="title">Easy to implement</p>
                <p className="content">
                Our processes have been refined over years of implementation meaning our teams always deliver.
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
                <p className="title">Enhanced Productivity</p>
                <p className="content">
                  Our customized platform with in-built analytics helps you manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/assets/bg-pattern-home-3.svg"
            alt="home-3"
            className="home-3"
          />
        </div>
        <div className="third_view">
          <img
            src="/assets/bg-pattern-home-4-about-3.svg"
            alt="home-4"
            className="home-4"
          />
          <h1 className="introduction">
            Delivering real results for top companies Some of our{" "}
            <span>success stories</span>
          </h1>
          <div className="middle_content">
            {data &&
              data.map((item, index) => (
                <div className="card" key={index}>
                  <img
                    src="/assets/icon-quotes.svg"
                    alt="Quotations"
                    className="quotes"
                  />
                  <p className="text">{item.description}</p>
                  <h4> {item.name}</h4>
                  <p className="position">{item.position}</p>
                  <div className="image_container">
                    <img src={item.image} alt="avatar image" />
                  </div>
                </div>
              ))}
          </div>
          <img
            src="/assets/bg-pattern-home-5.svg"
            alt="home_5"
            className="home_5"
          />
        </div>
        <section className="pink_section">
          <img
            src="/assets/bg-pattern-home-6-about-5.svg"
            alt="home_5"
            className="home_5"
          />
          <h1 className={styles.getStarted}>Ready to Get started? </h1>
          <button>contact us</button>
        </section>
        <Footer />
      </div>
    </HomeSection>
  );
};

const HomeSection = styled.div`
  .first_view {
    overflow: hidden;
    padding: 0 12rem;
    position: relative;
    background-color: #024c52;
    height: 60vh;
    .home-1 {
      position: absolute;
      left: -5%;
      top: 35%;
    }
    .body_part {
      padding-top: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        max-width: 25%;
        flex: 2;
        color: white;
        span {
          color: #f67e7e;
        }
      }
      .content {
        flex: 2;
        max-width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          height: 5px;
          width: 3rem;
          background-color: #79cbc7;
        }
        p {
          color: white;
          font-weight: bolder;
        }
      }
    }
    .home-2 {
      position: absolute;
      right: 20%;
      bottom: 0;
    }
  }

  .second_view {
    padding: 6rem 12rem;
    background-color: #012f33;
    display: flex;
    justify-content: space-between;
    position: relative;

    .build_side {
      flex: 1;
      max-width: 25%;
      .short_line {
        width: 3rem;
        height: 5px;
        background-color: #f67e7e;
      }
      h2 {
        font-size: 3em;
      }
    }
    .character {
      flex: 2;
      max-width: 45%;
      .small_card {
        display: flex;
        align-items: center;
        gap: 1rem;
        .icon_holder {
          display: block;
        }
        .title {
          color: #f67e7e;
        }
        .content {
        }
        div{
          font-weight: bolder;
        }
      }
    }
    .home-3 {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .third_view {
    padding: 6rem 12rem;
    background-color: #0c3c41;
    text-align: center;
    position: relative;

    .home-4 {
      position: absolute;
      left: 0;
      top: 0;
    }
    .introduction {
      text-align: center;
      span {
        color: #04afbe;
      }
    }
    .middle_content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .quotes {
          margin-bottom: -2rem;
        }
        .text {
          width: 70%;
        }
        h4 {
          color: #04afbe;
        }
        .position {
          margin-top: -1em;
          font-style: italic;
        }
        .image_container {
          background-color: #ecfdff;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          padding: 0.1rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }

    .home_5 {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .pink_section {
    background-color: #f67e7e;
    padding: 3rem 12rem 0 12rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #012f33;
    position: relative;
    button {
      background-color: #f67e7e;
      border: 2px solid #012f33;
      color: #012f33;
    }
    button:hover {
      background-color: #012f33;
      color: #fff;
    }
    .home_5 {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  @media only screen and (min-width: 641px) and (max-width: 1007px) {
    .first_view {
      padding: 0 2rem;
      height: 60vh;
      .home-1 {
        display: none;
      }
      .body_part {
        flex-direction: column;
        align-items: center;
        h1 {
          max-width: 50%;
          text-align: center;
        }
        .content {
          max-width: 100%;
          text-align: center;
          .short_line {
            display: none;
          }
          p {
            margin: auto;
            width: 70%;
          }
        }
      }
    }
    .second_view {
      padding: 2rem;
      flex-direction: column;
      overflow: hidden;
      .build_side {
        max-width: 70%;
        h2 {
          font-size: 2em;
        }
      }
      .character {
        max-width: 80%;
      }
      .home-3 {
        top: 0;
        right: -10%;
      }
    }
    .third_view {
      padding: 2rem;

      .introduction {
        max-width: 80%;
        margin: 3rem auto;
      }
      .middle_content {
        flex-direction: column;
        max-width: 80%;
        margin: auto;
        gap: 2rem;
        .card {
          .text {
            width: 100%;
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
  }

  @media only screen and (max-width: 640px) {
    .first_view {

      padding: 0 2rem;
      height: 100vh;
      .home-1 {
        display: none;
      }
      .body_part {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 8rem;
        h1 {
          max-width: 70%;
          margin: 0;
          padding: 0;
          text-align: center;
        }
        .content {
          max-width: 100%;
          text-align: center;
          padding-top: 3rem;

          .short_line {
            display: none;
          }
        }
      }
    }
    .second_view {
      padding: 2rem;
      flex-direction: column;
      overflow: hidden;
      .build_side {
        max-width: 70%;
        .short_line {
          height: 0.5rem;
          width: 3.5rem;
        }
        h2 {
          line-height: 1;
        }
      }
      .character {
        text-align: center;
        margin: auto;
        max-width: 100%;
        .small_card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          margin: auto;

          .title {
            font-size: 1.5em;
            font-weight: bold;
          }
          .content {
            font-size: 1.5em;
          }
        }
      }
      .home-3 {
        top: 0;
        right: -15%;
      }
    }
    .third_view {
      padding: 2rem;
      .introduction {
        max-width: 90%;
        margin: 6rem auto;
      }
      .middle_content {
        flex-direction: column;
        font-weight: bold;
        margin: auto;
        gap: 2rem;
        .card {
          .text {
            width: 100%;
          }
          .image_container {
            width: 5rem;
            height: 5rem;
            padding: 0.2rem;
          }
        }
      }
    }
    .pink_section {
      padding: 2rem;
      flex-direction: column;
      text-align: center;
      z-index: 5;
      h1 {
        font-size: 30px;
        max-width: 50%;
      }
      button {
        padding: 0.5em 2em;
      }
      .home_5 {
        width: 35%;
      }
    }
  }
`;

export default Home;
