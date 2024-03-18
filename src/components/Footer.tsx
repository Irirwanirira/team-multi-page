import styled from "styled-components";
import styles from "../animations.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterSection>
      <footer className="footer_section">
        <div className="left_of_footer">
          <div className="team">
            <h1>myteam</h1>
            <ul className="links">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
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
            <img
              src="/assets/icon-facebook.svg"
              alt="facebook"
              className="icon"
            />
            <img
              src="/assets/icon-pinterest.svg"
              alt="pinterest"
              className="icon"
            />
            <img
              src="/assets/icon-twitter.svg"
              alt="twitter"
              className={`${styles.bounce} ${styles.animate} ${styles.animateInfinite} icon`}
            />
          </div>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </footer>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  .footer_section {
    background-color: #002529;
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
      .links li a:hover {
        color: #f67e7e;
      }
    }
    ul {
      list-style: none;
      color: #4f7275;
      li {
        margin-bottom: 1rem;
        cursor: pointer;
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
      .icon {
        width: 20px;
        height: 20px;
        transition: filter 0.3s;
      }
    }
    .icon:hover {
      cursor: pointer;
      filter: grayscale(100%) brightness(1) sepia(100%) hue-rotate(0deg)
        saturate(100%) contrast(1);
    }
  }

  @media only screen and (min-width: 641px) and (max-width: 1007px) {
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

  @media only screen and (max-width: 640px) {
    .footer_section {
      overflow: none;
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

export default Footer;
