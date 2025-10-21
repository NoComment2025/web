import React from 'react';
import styled from 'styled-components';

const FourthSectionContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #141414;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function FourthSection() {
    return (
        <FourthSectionContainer>
            <h2>Section 4</h2>
            <p>배경색 #141414 (100vh)</p>
        </FourthSectionContainer>
    );
}

export default FourthSection;
