import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const SliderSection = styled.section`
height: calc(100vh - 80px);
max-height: 1200px;
position: relative;
overflow: hidden;
background-color: white;
`;

export const SliderWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
max-width: 1300px;
margin: 0 auto;
`;

export const SliderSlide = styled.div`
z-index: 9;
width: 100%;
height: 100%;
`;

export const SliderSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: center;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    left: 0;
    overflow: hidden;
    /* background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%); */
}
`;

export const SliderImage = styled.img`
position: absolute;
top: 10px;
width: 90vw;
height: 70vh;
object-fit: cover;
`;

export const SliderContent = styled.div`
z-index: 9;
display: flex;
align-content: flex-start;
flex-direction: column;
color: black;
align-self: flex-end;
width: 90vw;

button {
    width: 160px;
    padding: 12px 64px;
    font-size: 20px;
}

h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
}

p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}
`;

export const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

export const SliderButtons = styled.div`
position: absolute;
top: 20px;
right: 40px;
z-index: 10;
`;

export const PrevArrow = styled(IoArrowBack)`
width: 50px;
height: 50px;
color: white;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;
opacity: 0.7;

&:hover {
    transform: scale(1.1,1.1);
    transition: all 0.3s ease;
    opacity: 1;
}
`;

export const NextArrow = styled(IoArrowForward)`
width: 50px;
height: 50px;
color: white;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;
opacity: 0.7;

&:hover {
    transform: scale(1.1,1.1);
    transition: all 0.3s ease;
    opacity: 1;
}
`;