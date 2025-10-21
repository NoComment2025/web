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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 88px;
`;

// 이미지 위치 조정을 위한 스타일
// 기존 UserProblem2와 UserProblem1 스타일 컴포넌트들을 재활용하거나 새롭게 정의
// 아래는 UserProblemContainer를 확장하여 재활용하는 예시입니다.
// 원본 코드에 따라 아래 두 라인은 이전 코드의 UserProblem2Container와 UserProblem1Container를 대체
const UserProblem2Container = styled.div` // UserProblem2 (박영희) 위치 조정
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -200px; /* 원래 UserProblem2의 margin-left 값 */
`;

const UserProblem1Container = styled.div` // UserProblem1 (이철웅) 위치 조정
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 250px; /* 원래 UserProblem1의 margin-left 값 */
`;

const UserProblem3Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 학생 텍스트는 위치만 약간 조정
const StudentText = styled.div`
  transform: translateY(-4px);
`;

// 김철수 이름 텍스트 컨테이너 (2vw 아래로 이동)
const TextContainer = styled.div`
  position: absolute;
  top: calc(20px + 0.5vw);  /* 기존 20px에서 0.5vw만큼 더 내림 */
  left: 4.5vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  z-index: 10;
`;

// 인용문 텍스트 컨테이너 (2vw 아래로 이동)
const AdditionalTextContainer = styled.div`
  position: absolute;
  top: calc(60px + 0.5vw);  /* 기존 60px에서 0.5vw만큼 더 내림 */
  left: 4.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  z-index: 10;
  white-space: normal; /* 줄바꿈 정상처리 */
`;

// 한 줄에 두 가지 스타일의 텍스트를 넣기 위한 컨테이너
const InlineTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* 내용이 길어지면 자동으로 다음 줄로 넘어가게 */
  gap: 4px;
`;

function SecondSection() {
  return (
    <SecondSectionContainer>
      {/* 김철수 씨 (userproblem3) */}
      <UserProblem3Container>
        <TextContainer>
          <Text $fontSize="20px" $fontWeight="600" color="#828282">김철수</Text>
          <StudentText>
            <Text $fontSize="10px" $fontWeight="500" color="#828282">학생</Text>
          </StudentText>
        </TextContainer>

        <AdditionalTextContainer>
          <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
            " 혼자 연습하다 보니까 내가 발음을 잘못하는지, 
          </Text>
          <InlineTextContainer>
            <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
              속도가 빠른지
            </Text>
            <Text $fontSize="16px" $fontWeight="800" color="#000" style={{ lineHeight: '1.4' }}>
              제대로 알 수가 없었어요 
            </Text>
            <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
            " 
            </Text>
          </InlineTextContainer>
        </AdditionalTextContainer>
        <img src={userproblem3} alt="사용자 문제 그림 3" />
      </UserProblem3Container>

      {/* 박영희 씨 (userproblem2) */}
      <UserProblem2Container> {/* 기존 UserProblem2 대체 */}
        <TextContainer>
          <Text $fontSize="20px" $fontWeight="600" color="#828282">박영희</Text>
          <StudentText>
            <Text $fontSize="10px" $fontWeight="500" color="#828282">대학생·직장인</Text>
          </StudentText>
        </TextContainer>

        <AdditionalTextContainer>
          <InlineTextContainer> {/* 첫 번째 줄 */}
            <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
              " 학교나 회사에서 발표를 해도
            </Text>
            <Text $fontSize="16px" $fontWeight="800" color="#000" style={{ lineHeight: '1.4' }}>
              구체적인
            </Text>
          </InlineTextContainer>
          <InlineTextContainer> {/* 두 번째 줄 */}
          <Text $fontSize="16px" $fontWeight="800" color="#000" style={{ lineHeight: '1.4' }}>
              피드백을 받기가 어려워서
            </Text>
            <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
            아쉬웠습니다 "
            </Text>
          </InlineTextContainer>
        </AdditionalTextContainer>
        <img src={userproblem2} alt="사용자 문제 그림 2" />
      </UserProblem2Container>

      {/* 이철웅 씨 (userproblem1) */}
      <UserProblem1Container> {/* 기존 UserProblem1 대체 */}
        <TextContainer>
          <Text $fontSize="20px" $fontWeight="600" color="#828282">이철웅</Text>
          <StudentText>
            <Text $fontSize="10px" $fontWeight="500" color="#828282">학생</Text>
          </StudentText>
        </TextContainer>

        <AdditionalTextContainer>
          <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
            " 기존 연습은 그냥 녹화해서 보는 수준이라
          </Text>
          <InlineTextContainer>
            <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
              뭘 고쳐야 하는지
            </Text>
            <Text $fontSize="16px" $fontWeight="800" color="#000" style={{ lineHeight: '1.4' }}>
              명확하지 않았어요
            </Text>
            <Text $fontSize="16px" $fontWeight="500" color="#000" style={{ lineHeight: '1.4' }}>
            " 
            </Text>
          </InlineTextContainer>
        </AdditionalTextContainer>
        <img src={userproblem1} alt="사용자 문제 그림 1" />
      </UserProblem1Container>
    </SecondSectionContainer>
  );
}

export default SecondSection;