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
        <button className="contactBtn"><Link to="/contact">Contact us</Link></button>

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
              <button className="contactBtn"><Link to="/contact">Contact us</Link></button>
            </ul>
          )}
        </div>
      </header>
    </NavbarSection>
  );
};

const NavbarSection = styled.div`
  header {
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
  .contactBtn:hover{
    background-color: white;
    color: #002529;
  }

  .menu {
    display: none;
  }

  @media only screen and (max-width: 640px) {
    .navbar ul {
      display: none;
    }
    .contactBtn {
      display: none;
    }
    .menu {
      display: block;
      position: relative;
      button {
        border: none;
      }
      ul {
        text-align: center;
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 40%;
        li {
          list-style: none;
          margin: 1rem 0;
          text-decoration: underline;
        }
      }
    }
  }
`;

export default NavBar;
