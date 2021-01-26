import React from 'react';
import styled from 'styled-components';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  h1{
    color: black;
    font-weight: bold;
    letter-spacing: 5px;
  }
`;

export default function PudimComBatata() {
  return (
    <QuizContainer>
      <h1>Página de quiz</h1>
    </QuizContainer>
  );
}
