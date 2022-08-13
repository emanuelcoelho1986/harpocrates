import React, { ChangeEvent, KeyboardEvent, useState } from "react";

export interface UserNameDialogProps {
  isOpen: boolean;
  shouldCloseDialog?: () => void;
}

export default function UserNameDialog({ isOpen, shouldCloseDialog }: UserNameDialogProps) {

  const [username, setUsername] = useState("");

  function usernameDidChange(fromEvent: ChangeEvent<HTMLInputElement>) {
    setUsername(fromEvent.target.value);
  }

  function didPress({key}: KeyboardEvent<HTMLInputElement>): void {
    switch (key) {
      case "Escape":
        shouldCloseDialog?.();
        break;
      case "Enter":
        didPressSaveUserNameButton();
        break;
    }
  }

  function didPressCancelButton() {
    shouldCloseDialog?.();
  }

  function didPressSaveUserNameButton() {
    // Perform save in actual state store
    console.log("Will save the username: ", username);
    shouldCloseDialog?.();
  }

  return (
    <div>
      <div className="overlay"
           style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100%",
             backgroundColor: "lightgray",
             opacity: 0.6,
             display: isOpen ? "inherit" : "none"
           }} />
      <dialog open={isOpen}>
        <input type="text"
               onKeyUpCapture={didPress}
               autoFocus={true}
               value={username}
               onChange={usernameDidChange}
               placeholder="Please type a username" />

        <button onClick={didPressCancelButton}>Cancel</button>
        <button onClick={didPressSaveUserNameButton}>Save</button>
      </dialog>
    </div>
  );
}