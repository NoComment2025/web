import React from 'react';
import styled from 'styled-components';
import arrowImg from '../../assets/ThirdSectionArrow.png';
import Text from '../atom/text';

const ThirdSectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 80px;
  box-sizing: border-box;
`;

const ValuePropositionText = styled.div`
  position: absolute;
  top: 100px;
  left: 80px;
`;

const ComparisonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 60px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  text-align: center;
  max-width: 390px;
`;

const Label = styled.div`
  background-color: ${({ $active }) => ($active ? '#2244FF' : '#2E2E2E')};
  padding: 10px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
`;

const ArrowColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 65px;
  margin-top: 110px;
`;

const ArrowImg = styled.img`
  width: 32px;
  height: 32px;
  opacity: 0.8;
`;

const Highlight = styled.span`
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #2244ff;
  text-underline-offset: 3px;
`;

const TextItem = styled(Text)`
  font-size: 24px;
  text-align: center;
`;

function ThirdSection() {
  return (
    <ThirdSectionContainer>
      <ValuePropositionText>
        <Text color="#505050" $fontSize="20px">
          Value Proposition
        </Text>
      </ValuePropositionText>

      <ComparisonContainer>
        <Column>
          <Label>Before</Label>
          <TextItem $variant="caption">혼자 연습하면 부족한 점을 알기 어렵다</TextItem>
          <TextItem $variant="caption">학교·회사 피드백은 제한적이다</TextItem>
          <TextItem $variant="caption">전문 코칭은 비용과 시간이 부담된다</TextItem>
        </Column>

        <ArrowColumn>
          <ArrowImg src={arrowImg} alt="arrow" />
          <ArrowImg src={arrowImg} alt="arrow" />
          <ArrowImg src={arrowImg} alt="arrow" />
        </ArrowColumn>

        <Column>
          <Label $active>After</Label>
          <TextItem>AI가 <Highlight>발음·속도·제스처</Highlight>까지 정밀 분석</TextItem>
          <TextItem>개인 <Highlight>맞춤형 피드백</Highlight> 제공</TextItem>
          <TextItem>누구나 <Highlight>전문적인 발표 훈련</Highlight> 가능</TextItem>
        </Column>
      </ComparisonContainer>
    </ThirdSectionContainer>
  );
}

export default ThirdSection;