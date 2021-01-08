import React from 'react';
import { FooterContainer, FooterWrap, FooterText } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterText>
                    This is the footer
                </FooterText>
            </FooterWrap>
            <FooterWrap>
                <FooterText>
                    This website was made by Óli Ólafsson.
                </FooterText>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
