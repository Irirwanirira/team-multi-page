import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';

import './App.css'
import NavBar from './components/NavBar';

function App() {
  return (
    <AppContainer >
      <Router>
        <div className='navigationBar'>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path='/' element ={<Home />} />
            <Route path='/about' element ={<About />} />
          </Routes>
        </div>
      </Router>
    </AppContainer>
   
  )
 
}

const AppContainer = styled.div`
  
.navigationBar {
  padding: 0 12rem;
  background-color:#024c52;
}

`



export default App

