import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Alert({ msg, statusText }) {
  /* State for open/close alert dialog menue */
  const [isOpen, setIsOpen] = React.useState(true);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={closeDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle style={{ fontSize: "2rem" }} id="alert-dialog-title">
          Fehler!
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize: "1.5rem", padding: ".5rem 0" }} id="alert-dialog-description">
            {msg}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">Beschreibung: {statusText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
