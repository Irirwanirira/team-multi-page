import React from 'react'
import styled from 'styled-components';
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    < NavbarSection>
      <div>
        <h1>myteam</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
          </ul>
        </nav>
      </div>
    </ NavbarSection>
  )
}

const NavbarSection = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;


  h1 {
    font-size: 1.5rem;
    color: #333;
  }


`

export default NavBar
