import React, { useState } from "react";
import UserNameDialog from "../components/UserNameDialog";

export default function Game() {
  const [openUsernameDialog, setUsernameDialogState] = useState(true);

  return (
    <>
      <h1>Game Page</h1>
      <UserNameDialog isOpen={openUsernameDialog} shouldCloseDialog={() => setUsernameDialogState(false)} />
    </>
  );
}
