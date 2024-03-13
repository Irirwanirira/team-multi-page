import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <HomeSection>
      <div>
        <div className="first_view">
          <img
            src="../../assets/bg-pattern-home-1.svg"
            alt="home-1"
            className="home-1"
          />
          <NavBar />
          <div className="body_part">
            <h1>
              Find the best <span>talent</span>
            </h1>
            <div className="content">
              <div className="short_line"></div>
              <p>
                Finding the right people and building high performing teams can
                be hard. most companies aren't topping the abudnace of global
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
        <div className="second_view">
          <div className="build_side">
            <div className="short_line"></div>
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>
          <div className="character">
            <div className="small_card">
              <img
                src="../../assets/icon-person.svg"
                alt=""
                className="icon_holder"
              />
              <div>
                <p className="title">Experience individual</p>
                <p className="content">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do
                </p>
              </div>
            </div>
            <div className="small_card">
              <img
                src="../../assets/icon-person.svg"
                alt=""
                className="icon_holder"
              />
              <div>
                <p className="title">Easy to implement</p>
                <p className="content">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do
                </p>
              </div>
            </div>
            <div className="small_card">
              <img
                src="../../assets/icon-person.svg"
                alt=""
                className="icon_holder"
              />
              <div>
                <p className="title">Enhance Productivity</p>
                <p className="content">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do
                </p>
              </div>
            </div>
            <img
              src="../../assets/bg-pattern-home-3.svg"
              alt="home-3"
              className="home-3"
            />
          </div>
        </div>
        <div className="third_view">
          <img
            src="../../assets/bg-pattern-home-4-about-3.svg"
            alt="home-4"
            className="home-4"
          />
          <h1 className="introduction">
            Delivering real results for top companies Some of our{" "}
            <span>success stories</span>
          </h1>
          <div className="middle_content">
            <div className="card">
              <img
                src="../../assets/icon-quotes.svg"
                alt="Quotations"
                className="quotes"
              />
              <p className="text">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                quisquam quod error accusantium quos accusamus, rerum minus
                maiores culpa aperiam veritatis sit repudiandae sunt quidem ad?
                Facere ipsam molestiae quaerat eos.
              </p>
              <h4> Kady Baker</h4>
              <p className="position">Product designer at Bookmark</p>
              <div className="image_container">
                <img src="../../assets/avatar-kady.jpg" alt="avatar image" />
              </div>
            </div>
            <div className="card">
              <img
                src="../../assets/icon-quotes.svg"
                alt="Quotations"
                className="quotes"
              />
              <p className="text">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                quisquam quod error accusantium quos accusamus, rerum minus
                maiores culpa aperiam veritatis sit repudiandae sunt quidem ad?
                Facere ipsam molestiae quaerat eos.
              </p>
              <h4> Kady Baker</h4>
              <p className="position">Product designer at Bookmark</p>
              <div className="image_container">
                <img src="../../assets/avatar-kady.jpg" alt="avatar image" />
              </div>
            </div>
            <div className="card">
              <img
                src="../../assets/icon-quotes.svg"
                alt="Quotations"
                className="quotes"
              />
              <p className="text">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                quisquam quod error accusantium quos accusamus, rerum minus
                maiores culpa aperiam veritatis sit repudiandae sunt quidem ad?
                Facere ipsam molestiae quaerat eos.
              </p>
              <h4> Kady Baker</h4>
              <p className="position">Product designer at Bookmark</p>
              <div className="image_container">
                <img src="../../assets/avatar-kady.jpg" alt="avatar image" />
              </div>
            </div>
          </div>
          <img src="../../assets/bg-pattern-home-5.svg" alt="home_5" className="home_5" />
        </div>
        <section className="pink_section">
          <img src="../../assets/bg-pattern-home-6-about-5.svg" alt="home_5" className="home_5"/>
          <h1>Ready to Get started? </h1>
          <button>contact us</button>
        </section>
        <footer className="footer_section">
          <div className="left_of_footer">
            <div className="team">
              <h1>myteam</h1>
              <ul className="links">
              <li><a href="/">home</a></li>
              <li><a href="/About">about</a></li>
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
            <p>
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </HomeSection>
  );
};

const HomeSection = styled.div`
  .first_view {
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
          color: #f38799;
        }
      }
      .content {
        flex: 2;
        max-width: 40%;
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

  .second_view {
    padding: 6rem 12rem;
    background-color: #012f33;
    display: flex;
    justify-content: space-between;

    .build_side {
      flex: 1;
      max-width: 25%;
      .short_line {
        width: 3rem;
        height: 2px;
        background-color: #f38799;
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
          color: #f38799;
        }
        .content {
        }
      }
    }
    .home-3 {
      position: absolute;
      right: 0;
      bottom: -20%;
    }
  }

  .third_view {
    position: relative;
    padding: 6rem 12rem;
    background-color: #0c3c41;
    text-align: center;

    .home-4 {
      position: absolute;
      left: 0;
      bottom: 87%;
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
          /* width: 2rem; */
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
          background-color: #04afbe;
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

    .home_5{
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  
  .pink_section{
    background-color:  #f38799;
    padding: 3rem  12rem 0 12rem; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #012f33;
    button{
      background-color: #f38799;
      border: 2px solid #012f33;
      color: #012f33;
    }
    img{
      position: absolute;
      left: 0;
    }
  }

  .footer_section{
    background-color: #012f33;
    padding: 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_of_footer{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10rem;
      .team{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start
      }
      .links{
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5rem;
        color: white;
      }
      ul{
        list-style: none;
        color: #4f7275;
        li{
          margin-bottom: 1rem;
        }
      }
    }

    .right_of_footer{
      display: flex;
      flex-direction: column;
      color: #4f7275;
      .social_icons{
        align-self: flex-end;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
export default Home;
