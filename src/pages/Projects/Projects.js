import React from 'react';
import { Pricing, Slider } from '../../components';
import { SliderData } from '../../components/Slider/SliderData';

const Home = () => {
    return (
        <>
            <Slider slides={SliderData}/>
            <Pricing />
        </>
    )
}

export default Home
