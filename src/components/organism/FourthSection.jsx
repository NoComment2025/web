import React from 'react';
import styled from 'styled-components';
import PersonIconImg from '../../assets/VideoIcon.png';
import MicIconImg from '../../assets/VoiceIcon.png';
import FeedbackIconImg from '../../assets/FeedbackIcon.png';
import Text from '../atom/text';

// --- Styled Components ---
const FourthSectionContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #141414;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    position: relative; /* KeyFeaturesText 기준 부모 */
`;

const KeyFeaturesText = styled.div`
    position: absolute;
    top: -190px;
    left: -120px;
    font-size: 1.5rem;
    font-weight: 500;
    color: #888888;
    z-index: 10;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 80px; /* KeyFeaturesText와 카드 간격 */
`;

const Card = styled.div`
    flex-basis: 300px;
    flex-grow: 1;
    max-width: 350px;
    height: 300px;
    background-color: ${props => props.bgColor};
    border-radius: 20px;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const CardTextWrapper = styled.div`
    position: relative;
    z-index: 2;
`;

const CardTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: ${props => props.color || '#FFFFFF'}; // 기본 흰색, 필요하면 다른 색 지정 가능
`;

const CardDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    margin: 0.5rem 0 0 0;
    color: ${props => props.color || '#DDDDDD'}; // 기본 연한 회색, 필요 시 변경 가능
    line-height: 1.4;
`;


const IconPlaceholder = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 1.5rem;
    width: 9rem;
    height: 9rem;
    z-index: 1;
`;

const IconImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

// --- Component ---
function FourthSection() {
    return (
        <FourthSectionContainer>
            <ContentWrapper>
                <KeyFeaturesText>
                    <Text $fontSize="20px" $fontWeight="400" color="#505050">
                        Key Features
                    </Text>
                </KeyFeaturesText>

                <CardContainer>
                    {/* 카드 1 */}
                    <Card bgColor="#FFFFFF">
                        <CardTextWrapper>
                            <CardTitle color='#595959'>영상 분석</CardTitle>
                            <CardDescription color='#595959'>
                                몸짓까지 분석하는 발표 코치
                            </CardDescription>
                        </CardTextWrapper>
                        <IconPlaceholder>
                            <IconImage src={PersonIconImg} alt="영상 분석" />
                        </IconPlaceholder>
                    </Card>

                    {/* 카드 2 */}
                    <Card bgColor="#2F3CDB">
                        <CardTextWrapper>
                            <CardTitle color='#020273'>음성 분석</CardTitle>
                            <CardDescription color='#020273'>
                                목소리 속 감정과 리듬까지
                            </CardDescription>
                        </CardTextWrapper>
                        <IconPlaceholder>
                            <IconImage src={MicIconImg} alt="음성 분석" />
                        </IconPlaceholder>
                    </Card>

                    {/* 카드 3 */}
                    <Card bgColor="#4A7AFF">
                        <CardTextWrapper>
                            <CardTitle color='#0A388B'>피드백 추출</CardTitle>
                            <CardDescription color='#0A388B'>
                                맞춤형 피드백으로 성장까지
                            </CardDescription>
                        </CardTextWrapper>
                        <IconPlaceholder>
                            <IconImage src={FeedbackIconImg} alt="피드백 추출" />
                        </IconPlaceholder>
                    </Card>
                </CardContainer>
            </ContentWrapper>
        </FourthSectionContainer>
    );
}

export default FourthSection;
