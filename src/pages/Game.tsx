import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useObservable } from '@ngneat/react-rxjs';
import AvailableRoutesEnum from '../routes/AvailableRoutes.enum';
import {
  activeGame$, addGame, game$, GameStatusEnum, setActiveGameId,
} from '../states/game.repository';
import UserNameDialog, {UserNameDialogButtons} from "../components/UserNameDialog/UserNameDialog";

export default function Game() {
  const navigate = useNavigate();
  const [activeGame] = useObservable(activeGame$);
  const [games] = useObservable(game$);

  let playGameComponent = null;

  const [openUsernameDialog, setUsernameDialogState] = useState(!activeGame);

  // Why this awful ugly code? Wasn't it better just as a class and a function?
  // Its much prettier and easy to read
  const userDidPress = (button: UserNameDialogButtons, username?: string) => {
    switch (button) {
      case UserNameDialogButtons.SAVE:
        if (username && username.length) {
          // Upon creation, it will be set as the active game
          const id = games.length + 1;
          addGame({ username, id, status: GameStatusEnum.OM_GOING });
          setActiveGameId(id);
        }
        break;
      case UserNameDialogButtons.CANCEL:
        navigate(AvailableRoutesEnum.HOME);
        break;
      default: break;
    }
  };

  if (activeGame) {
    playGameComponent = <p>{activeGame?.username}</p>;
  }

  return (
    <>
      <h1>Game Page</h1>
      <button type="button">Start New Game</button>
      <UserNameDialog
        isOpen={openUsernameDialog}
        didPressButton={userDidPress}
        shouldCloseDialog={() => setUsernameDialogState(false)}
      />

      {playGameComponent}
    </>
  );
}
