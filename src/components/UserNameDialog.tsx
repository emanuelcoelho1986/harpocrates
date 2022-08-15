import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

export enum UserNameDialogButtons {
  CANCEL,
  SAVE,
}

export interface UserNameDialogProps {
  isOpen: boolean;
  shouldCloseDialog: () => void;
  didPressButton: (withValue: UserNameDialogButtons, andUserName?: string) => void
}

export default function UserNameDialog(
  { isOpen, shouldCloseDialog, didPressButton }: UserNameDialogProps,
) {
  const [username, setUsername] = useState('');

  function usernameDidChange(fromEvent: ChangeEvent<HTMLInputElement>) {
    setUsername(fromEvent.target.value);
    didPressButton(UserNameDialogButtons.SAVE);
  }

  function didPressCancelButton() {
    shouldCloseDialog();
    didPressButton(UserNameDialogButtons.CANCEL);
  }

  function didPressSaveUserNameButton() {
    // Perform save in actual state store
    shouldCloseDialog();
    didPressButton(UserNameDialogButtons.SAVE, username);
  }

  function didPress({ key }: KeyboardEvent<HTMLInputElement>): void {
    switch (key) {
      case 'Escape':
        shouldCloseDialog();
        break;
      case 'Enter':
        didPressSaveUserNameButton();
        break;
      default: break;
    }
  }

  return (
    <div>
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'lightgray',
          opacity: 0.6,
          display: isOpen ? 'inherit' : 'none',
        }}
      />
      <dialog open={isOpen}>
        <input
          type="text"
          required
          onKeyUpCapture={didPress}
          value={username}
          onChange={usernameDidChange}
          placeholder="Please type a username"
        />

        <button type="button" onClick={didPressCancelButton}>Cancel</button>
        <button type="button" onClick={didPressSaveUserNameButton}>Save</button>
      </dialog>
    </div>
  );
}
