import React from 'react';
import Profile from './Profile';
import Footer from "./Footer/Footer"
import Navbar from './Navbar/Navbar';
import "./Home.css"
function Home(props) {
    return (
        <div className='home-container'>
            <Navbar/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default Home;