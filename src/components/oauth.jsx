import styled from 'styled-components';

const OAuthImage = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

const OAuthButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin: 2rem;
`;



function Oauth() {
    return (
        <>
            <OAuthButtonContainer>
              <OAuthImage src="https://img.icons8.com/color/512/google-logo.png" alt="google" />
              <OAuthImage src="https://wiki1.kr/images/thumb/c/cf/%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png/200px-%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png" alt="naver" />
            </OAuthButtonContainer>
        </>
    )
}

export default Oauth;