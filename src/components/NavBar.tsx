import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <NavbarSection>
      <header>
        <div className="large-menu">
          <nav className="navbar">
            <h1>myteam</h1>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>
          <button className="contactBtn">
            <Link to="/contact">Contact us</Link>
          </button>

          <div className="menu">
            <button className="menuContainer" onClick={toggleMenu}>
              {!menuVisible ? (
                <img src="/assets/icon-hamburger.svg" alt="Hamburger menu" />
              ) : (
                <img src="/assets/icon-close.svg" alt="close btn" />
              )}
            </button>

            {menuVisible && (
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <button className="contactBtn">
                  <Link to="/contact">Contact us</Link>
                </button>
              </ul>
            )}
          </div>
        </div>
        <div className="small-menu">
          <nav className="navbar">
            <h1>myteam</h1>
            <button className="menuContainer" onClick={toggleMenu}>
              <img src="/assets/icon-hamburger.svg" alt="Hamburger menu" />
            </button>
            <div className={menuVisible ? "menu open" : "menu"}>
              <button className="menuContainer" onClick={toggleMenu}>
                <img src="/assets/icon-close.svg" alt="close btn" />
              </button>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <button className="contactBtn">
                    <Link to="/contact">Contact us</Link>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </NavbarSection>
  );
};

const NavbarSection = styled.div`
  .small-menu {
    display: none;
  }
  .large-menu {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    list-style: none;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      li {
        list-style: none;
        margin: 0 1rem;
      }
    }
  }
  .contactBtn a:hover {
    background-color: none;
    color: #002529;
  }
  .contactBtn:hover {
    background-color: white;
    color: #002529;
  }

  .menu {
    display: none;
  }

  @media only screen and (max-width: 640px) {
    header {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        li {
          list-style: none;
          margin: 0 1rem;
          font-size: 30px;
        }
      }
      .large-menu {
        display: none;
      }

      .small-menu {
        display: block;
        button {
          border: none;
        }

        .menu {
          display: none;
        }

        .menu.open {
          background-color: #2c6269;
          position: absolute;
          right: 0;
          top: 0;
          height: 100vh;
          margin: 0;
          min-width: 60%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 4rem 1rem;
          button {
            background-color: #2c6269;
            align-self: flex-end;
          }
          ul {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            gap: 2rem;

            .contactBtn {
              border: 2px solid white;
              padding: 1rem 2rem;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;

export default NavBar;
