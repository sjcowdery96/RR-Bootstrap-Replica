import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNavBar from './components/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherNavBar from './components/OtherNavBar';
import CaroselTest from './components/Carosel';
import GridSample from './components/GridSample';
import backgroundIMage from "./img/bgI.jpeg"

const theSauce = "https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"

function App() {
  return (
    <div className='App'>
      <MyNavBar>
      </MyNavBar>

      <CaroselTest >
      </CaroselTest>

      <GridSample>
      </GridSample>

    </div >
  );
}
export default App;
