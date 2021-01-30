/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .3;
    background: #511d29;
    color: ${({ theme }) => theme.colors.secondary};
  }
  &:disabled {
    box-shadow: inset 0 0 50px rgba(0,0,0,0.5);
    background: transparent;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
