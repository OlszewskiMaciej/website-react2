import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
background-color: black;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterSubscription = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: white;
width: 100%;
`;

export const FooterSubHeading = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 24px;
font-size: 32px;

&:hover {
    transform: scale(1.1,1.1);
    transition: all 0.5s ease;
}
`;

export const FooterSubLink = styled(Link)`
text-decoration: none;
color: white;
`;

export const FooterSubText = styled.p`
margin-bottom: 24px;
font-size: 20px;
`;

export const SocialMedia = styled.section`
max-width: 100%;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`;

export const WebsiteRights = styled.small`
color: white;
margin-bottom: 16px;
font-size: 22px;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const SocialIconLink = styled.a`
color: white;
font-size: 24px;

&:hover {
    transform: scale(1.2,1.2);
    transition: all 0.3s ease;
}
`;