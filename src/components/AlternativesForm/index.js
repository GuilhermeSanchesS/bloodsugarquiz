/* eslint-disable linebreak-style */
import styled, { keyframes } from 'styled-components';

const animationError = keyframes`
	0% {
		transform:  scale(.9);
    opacity: 0;
    delay: 3s;
	}
	100% {
		transform:  scale(1);
    opacity: 1;
`;

const animationSuccess = keyframes`
	0% {
		transform:  scale(.9);
	}
	100% {
		transform:  scale(1);
	}
`;

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary};
      -webkit-box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        box-shadow: 0 0 30px ${({ theme }) => theme.colors.success};
        -webkit-box-shadow: 0 0 30px ${({ theme }) => theme.colors.success};
        animation: 200ms ${animationSuccess} infinite;
				animation-direction: alternate;
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        box-shadow: 0 0 30px ${({ theme }) => theme.colors.wrong};
        -webkit-box-shadow: 0 0 30px ${({ theme }) => theme.colors.wrong};
        animation: 200ms ${animationError} infinite;
				animation-direction: alternate;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
