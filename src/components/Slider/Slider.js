import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { 
    SliderSection, 
    SliderWrapper, 
    SliderSlide, 
    SliderSlider, 
    SliderImage, 
    SliderContent, 
    SliderButtons, 
    PrevArrow, 
    NextArrow
 } from './Slider.elements';

const Slider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <SliderSection>
            <SliderWrapper>
                {slides.map((slide, index) => {
                    return (
                        <SliderSlide key={index}>
                            {index === current && (
                            <SliderSlider>
                            <SliderImage src={slide.image} alt={slide.alt} />
                                <SliderContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.desc}</p>
                                    <Link to={slide.path}>
                                        <Button>
                                            {slide.label}
                                            {/* <Arrow /> */}
                                        </Button>
                                    </Link>
                                </SliderContent>
                            </SliderSlider>
                            )}
                        </SliderSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </SliderWrapper>
        </SliderSection>
    )
}

export default Slider
