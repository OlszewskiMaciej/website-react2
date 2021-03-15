import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
padding: 100px 0 160px;
display: flex;
flex-direction: column;
justify-content: center;
background: white;
`;

export const PricingWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;

@media screen and (max-width: 960px) {
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export const PricingHeading = styled.h1`
color: #fff;
font-size: 48px;
margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
`;

export const PricingCard = styled.div`
background: black;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
width: 280px;
height: 500px;
text-decoration: none;
border-radius: 4px;

&:nth-child(2) {
  margin: 24px;
}

@media screen and (max-width: 960px) {
  width: 90%;
  max-width: 500px;
}
`;

export const PricingCardInfo = styled.div`
display: flex;
flex-direction: column;
height: 500px;
padding: 24px;
align-items: center;
color: #fff;
`;

export const PricingCardIcon = styled.div`
margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
margin-bottom: 5px;
font-size: 24px;
`;

export const PricingCardDescription = styled.h4`
font-size: 32px;
margin-bottom: 5px;
`;

export const PricingCardLength = styled.p`
font-size: 14px;
margin-bottom: 24px;
text-align: justify; 
`;

export const Button = styled(Link)`
border-radius: 5px;
background: ${({primary}) => (primary ? '#0027c2' : '#3181ff')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: white;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
text-align: center;

&:hover {
    transition: all 0.3 ease-out;
    background: white;
    background: ${({primary}) => (primary ? '#3181ff' : '#0027c2')};
}

@media screen and (max-width: 960px) {
    width: 100%;
}
`;