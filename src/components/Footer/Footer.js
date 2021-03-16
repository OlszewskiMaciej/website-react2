import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterSubLink
 } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubText> 
                    Get in touch.
                </FooterSubText>
                <FooterSubHeading>
                    <FooterSubLink to ='/'>contact@mail.com</FooterSubLink>
                </FooterSubHeading>
            </FooterSubscription>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>
                        Website © 2021
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href = {'/'} target = "_blank" aria-label = "Mail">
                            <GoMail />
                        </SocialIconLink>
                        <SocialIconLink href = {'/'} target = "_blank" aria-label = "Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href = {'/'} target = "_blank" aria-label = "Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href = {'/'} target = "_blank" aria-label = "Github">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href = {'/'} target = "_blank" aria-label = "Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
export default Footer
