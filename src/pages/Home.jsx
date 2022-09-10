import React from 'react';
import AboutMarathon from '../components/AboutMarathon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Offers from '../components/Offers';
import ParticipateBySize from '../components/ParticipateBySize';
import Project from '../components/Project';
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <AboutMarathon />
            <Offers />
            <ParticipateBySize />
            <Project />
            <Footer />
        </div>
    );
};

export default Home;