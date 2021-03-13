import React from 'react';
import { InfoSection, Pricing, Slider } from '../../components';
import { SliderData } from '../../components/Slider/SliderData';
import { homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <Slider slides={SliderData}/>
            <Pricing />
        </>
    )
}

export default Home
