import React from 'react'
import { GiLibra, GiLaurelCrown, GiLotus } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import {   
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardDescription,
    PricingCardLength,
    Button
 } from './Services.elements';

const Pricing = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64}}>
                <PricingSection>
                    <PricingWrapper>
                        <PricingHeading>Our services</PricingHeading>
                        <PricingContainer>
                            <PricingCard>
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiLaurelCrown />
                                    </PricingCardIcon>
                                        <PricingCardPlan>Plan 1</PricingCardPlan>
                                        <PricingCardDescription>Description</PricingCardDescription>
                                        <PricingCardLength>Lorem ipsum dolor sit amet lorem. Nunc a ante pretium eros viverra accumsan, libero purus sit amet, massa. Sed dolor. Integer auctor augue eget commodo magna, tincidunt dictum suscipit in, ante. Vestibulum at bibendum leo, pretium porttitor. Aenean tortor a lorem tempus dictum enim. Phasellus vestibulum. Aenean lacus tincidunt lorem, id dui.</PricingCardLength>
                                    <Button to = '/' primary>Choose</Button>
                                </PricingCardInfo>
                            </PricingCard>
                            <PricingCard>
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiLotus />
                                    </PricingCardIcon>
                                        <PricingCardPlan>Plan 2</PricingCardPlan>
                                        <PricingCardDescription>Description</PricingCardDescription>
                                        <PricingCardLength>Lorem ipsum dolor sit amet mauris. Pellentesque nunc faucibus turpis. Cras non ante. Praesent tortor libero, egestas a, tortor. Nam eget velit lectus blandit iaculis, dui convallis purus. Aliquam pharetra faucibus. Aliquam erat at elit metus, quis neque ante, vitae massa a ornare elementum leo. Nulla mi risus, euismod mi. Fusce suscipit in, cursus aliquet.</PricingCardLength>
                                    <Button to = '/' primary>Choose</Button>
                                </PricingCardInfo>
                            </PricingCard>
                            <PricingCard>
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiLibra />
                                    </PricingCardIcon>
                                        <PricingCardPlan>Plan 3</PricingCardPlan>
                                        <PricingCardDescription>Description</PricingCardDescription>
                                        <PricingCardLength>Lorem ipsum dolor sit amet sagittis vel, placerat fringilla, massa. Mauris ullamcorper risus. Ut wisi id dolor sit amet elit laoreet enim. Aenean congue ac, varius nunc ac viverra ligula. Aliquam erat lacinia ut, magna. Vestibulum ante ullamcorper ultrices posuere quis, dictum eget, condimentum auctor scelerisque, diam. Aenean ipsum dolor tellus quis neque eu nunc.</PricingCardLength>
                                    <Button to = '/' primary>Choose</Button>
                                </PricingCardInfo>
                            </PricingCard>
                        </PricingContainer>
                    </PricingWrapper>
                </PricingSection>
            </IconContext.Provider>
        </>
    )
}

export default Pricing
