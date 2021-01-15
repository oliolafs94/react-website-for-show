import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components//Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import {InfoSection, InfoSection2, InfoSection3, InfoSection4 } from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection2 {...homeObjThree}/>
            <InfoSection3 {...homeObjFour}/>
            <InfoSection4 {...homeObjFive}/>
            <Footer />
        </>
    );
}

export default Home
