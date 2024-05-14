import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddMovieForm from "./AddMovie/AddMovieForm";

const style = {
  position: "absolute",
  top: "50%",
  display: "flex",
  flexDirection: "column",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function BasicModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddMovieForm />
        </Box>
      </Modal>
    </div>
  );
}
