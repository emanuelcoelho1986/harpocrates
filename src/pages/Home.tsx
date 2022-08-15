import React from 'react';
import { useNavigate } from 'react-router-dom';
import AvailableRoutesEnum from '../routes/AvailableRoutes.enum';

export default function Home() {
  const navigate = useNavigate();

  function didPressStartGame() {
    navigate(AvailableRoutesEnum.GAME);
  }

  return (
    <>
      <h1>Home Page</h1>
      <button type="button" onClick={didPressStartGame}>Start Game</button>
    </>
  );
}
