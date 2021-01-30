/* eslint-disable linebreak-style */
import styled from 'styled-components';

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
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        box-shadow: 0 0 30px ${({ theme }) => theme.colors.wrong};
        -webkit-box-shadow: 0 0 30px ${({ theme }) => theme.colors.wrong};
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
