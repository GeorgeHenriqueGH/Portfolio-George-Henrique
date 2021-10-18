import React from "react";
import Footer from "../../components/Footer";

import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <HeroImage/>
            <Footer/>
        </>
    );
}

export default Home;