
import React from 'react';
import styled from 'styled-components';
import userproblem1 from '../../assets/user-problem1.png';
import userproblem2 from '../../assets/user-problem1-2.png';
import userproblem3 from '../../assets/user-problem1-3.png';
import Text from '../atom/text';

const SecondSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 0 170px;
  position: relative;
`;

const LeftTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 317px;
  max-width: 400px;
  position: relative;
`;

const ExistingProblemText = styled.div`
  position: absolute;
  top: -160px;
  left: -80px;
`;

const RightContentContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 88px;
`;

const UserProblem2Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -200px;
`;

const UserProblem1Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 250px;
`;

const UserProblem3Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StudentText = styled.div`
  transform: translateY(-4px);
`;

const TextContainer = styled.div`
  position: absolute;
  top: calc(20px + 0.5vw);
  left: 5.5vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  z-index: 10;
`;

const AdditionalTextContainer = styled.div`
  position: absolute;
  top: calc(60px + 0.5vw);
  left: 5.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  z-index: 10;
  white-space: normal;
`;

const InlineTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`;

function SecondSection() {
  return (
    <SecondSectionContainer>
      <LeftTextContainer>
        <ExistingProblemText>
          <Text $fontSize="20px" $fontWeight="400" color="#505050">
            Existing Problem
          </Text>
        </ExistingProblemText>

        <Text $fontSize="36px" $fontWeight="700" color="#505050">
          연습은 많아도,
        </Text>
        <Text $fontSize="36px" $fontWeight="700" color="#3048D2">
          객관적 피드백은 부족
        </Text>
      </LeftTextContainer>

      <RightContentContainer>
        <UserProblem3Container>
          <TextContainer>
            <Text $fontSize="20px" $fontWeight="600" color="#828282">김철수</Text>
            <StudentText>
              <Text $fontSize="10px" $fontWeight="500" color="#828282">학생</Text>
            </StudentText>
          </TextContainer>

          <AdditionalTextContainer>
            <Text $fontSize="16px" $fontWeight="500" color="#000">" 혼자 연습하다 보니까 내가 발음을 잘못하는지,</Text>
            <InlineTextContainer>
              <Text $fontSize="16px" $fontWeight="500" color="#000">속도가 빠른지</Text>
              <Text $fontSize="16px" $fontWeight="800" color="#000">제대로 알 수가 없었어요</Text>
              <Text $fontSize="16px" $fontWeight="500" color="#000">"</Text>
            </InlineTextContainer>
          </AdditionalTextContainer>
          <img src={userproblem3} alt="사용자 문제 그림 3" />
        </UserProblem3Container>

        <UserProblem2Container>
          <TextContainer>
            <Text $fontSize="20px" $fontWeight="600" color="#828282">박영희</Text>
            <StudentText>
              <Text $fontSize="10px" $fontWeight="500" color="#828282">대학생·직장인</Text>
            </StudentText>
          </TextContainer>

          <AdditionalTextContainer>
            <InlineTextContainer>
              <Text $fontSize="16px" $fontWeight="500" color="#000">" 학교나 회사에서 발표를 해도</Text>
              <Text $fontSize="16px" $fontWeight="800" color="#000">구체적인</Text>
            </InlineTextContainer>
            <InlineTextContainer>
              <Text $fontSize="16px" $fontWeight="800" color="#000">피드백을 받기가 어려워서</Text>
              <Text $fontSize="16px" $fontWeight="500" color="#000">아쉬웠습니다 "</Text>
            </InlineTextContainer>
          </AdditionalTextContainer>
          <img src={userproblem2} alt="사용자 문제 그림 2" />
        </UserProblem2Container>

        <UserProblem1Container>
          <TextContainer>
            <Text $fontSize="20px" $fontWeight="600" color="#828282">이철웅</Text>
            <StudentText>
              <Text $fontSize="10px" $fontWeight="500" color="#828282">학생</Text>
            </StudentText>
          </TextContainer>

          <AdditionalTextContainer>
            <Text $fontSize="16px" $fontWeight="500" color="#000">" 기존 연습은 그냥 녹화해서 보는 수준이라</Text>
            <InlineTextContainer>
              <Text $fontSize="16px" $fontWeight="500" color="#000">뭘 고쳐야 하는지</Text>
              <Text $fontSize="16px" $fontWeight="800" color="#000">명확하지 않았어요</Text>
              <Text $fontSize="16px" $fontWeight="500" color="#000">"</Text>
            </InlineTextContainer>
          </AdditionalTextContainer>
          <img src={userproblem1} alt="사용자 문제 그림 1" />
        </UserProblem1Container>
      </RightContentContainer>
    </SecondSectionContainer>
  );
}

export default SecondSection;