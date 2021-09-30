import React from 'react'
import HeroSection from '../../HeroSection'
import { serviceObjOne } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...serviceObjOne} />    
        </>
    );
}

export default Home;