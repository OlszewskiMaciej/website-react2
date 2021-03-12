import React from 'react';
import { InfoSection, Pricing, Slider } from '../../components';
import { SliderData } from '../../components/Slider/SliderData';
import { homeObjOne, homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Slider slides={SliderData}/>
            <Pricing />
        </>
    )
}

export default Home
