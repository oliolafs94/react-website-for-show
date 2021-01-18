import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Subtitle, ImgWrap, Img, TopLine, Heading, BigCol } from './InfoElements';
import SnakeGame from '../../Snake/SnakeGame';
import Questions from '../../Questions';
import Search from '../SearchComponent';
import '../../images/website.jpg';
//import { Button } from '../ButtonElements';

export const InfoSection = ({lightBg, id,imgStart, topLine, lightText, headline, darkText, description, img, alt, lightTopText}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <br/>
                            <br/>
                            <br/>
                        <TextWrapper>
                            <TopLine lightTopText={lightTopText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                                <a href="https://www.oliolafsson.net"> 
                                    <div>Visit my other website resume here!</div>
                                </a>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
                <br/>
                <br/>
                <br/>
            </InfoContainer>
        </>
    )
};

export const InfoSection2 = ({lightBg, id,imgStart, topLine, lightText, headline, darkText, description, lightTopText}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine lightTopText={lightTopText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <SnakeGame/>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export const InfoSection3 = ({lightBg, id,imgStart, topLine, lightText, headline, darkText, description, lightTopText}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine lightTopText={lightTopText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <Questions/>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export const InfoSection4 = ({lightBg, id}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <BigCol>
                    <Search/>
                </BigCol>
            </InfoContainer>
        </>
    )
}

export const InfoSection5 = ({lightBg, id}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

//export default ( InfoSection, InfoSection2 )
