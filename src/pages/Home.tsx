import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <HomeSection>
      <div>
        <NavBar />
        <p>Home Section</p>
      </div>
    
    </HomeSection>
  )
}

const HomeSection = styled.div`
    /* padding-top: 100px;
  p {
      margin-top: 100px;
  } */
    
`

export default Home
