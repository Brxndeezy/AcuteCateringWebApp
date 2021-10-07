import React from 'react'
import HeroSection from '../../HeroSection'
import { aboutObjOne } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...aboutObjOne} />    
        </>
    );
}

export default Home