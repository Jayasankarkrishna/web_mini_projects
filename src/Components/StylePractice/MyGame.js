import React from 'react';
import GameButton from './GameButton';

const MyGame = () => (
  <div>
    <h1>Welcome to My Game</h1>
    <input type='text' placeholder='you can enter anything'></input>
    <GameButton onClick={() => alert('Button clicked!')}>Click Me</GameButton>
  </div>
);

export default MyGame;
