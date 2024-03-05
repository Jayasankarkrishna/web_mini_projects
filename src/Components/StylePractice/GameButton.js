import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: green;
  }

  &:focus {
    outline: none;
  }
`;

const GameButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);


export default GameButton;
