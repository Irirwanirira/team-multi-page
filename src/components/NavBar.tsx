import React from 'react'
import styled from 'styled-components';
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    < NavbarSection>
      <div className='contents'>
        <nav>
          <h1>myteam</h1>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/About">about</a></li>
          </ul>
        </nav>
        <button>Contact us</button>
      </div>
    </ NavbarSection>
  )
}

const NavbarSection = styled.div`

.contents{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  nav{
    display: flex;
    align-items: baseline;

    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      list-style: none;
    }
    li{
      text-decoration: none;
    }
    a{
      color: white;
    }
  }
}


`

export default NavBar
