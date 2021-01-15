import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Subtitle, ImgWrap, Img, TopLine, Heading, BigCol } from './InfoElements';
import SnakeGame from '../../Snake/SnakeGame';
import Questions from '../../Questions';
import Search from '../SearchComponent';

export const InfoSection = ({lightBg, id,imgStart, topLine, lightText, headline, darkText, description, ButtonLabel, img, alt, lightTopText}) => {
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
                            <ImgWrap>
                            <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
};

export const InfoSection2 = ({lightBg, id,imgStart, topLine, lightText, headline, darkText, description, ButtonLabel, lightTopText}) => {
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

export const InfoSection3 = ({lightBg, id,imgStart, topLine, lightText, headline, darkText, description, ButtonLabel, lightTopText}) => {
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

//export default ( InfoSection, InfoSection2 )
