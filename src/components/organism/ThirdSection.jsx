import React from 'react';
import styled from 'styled-components';

const ThirdSectionContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ThirdSection() {
    return (
        <ThirdSectionContainer>
            <h2>Section 3</h2>
            <p>배경색 #000 (100vh)</p>
        </ThirdSectionContainer>
    );
}

export default ThirdSection;
