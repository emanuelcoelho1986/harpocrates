import React from 'react';

export default function Home() {

  function didPressStartGame() {
    console.log('Did press to start game');
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={didPressStartGame}>Start Game</button>
    </>
  );
}

