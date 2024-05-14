import "./complete.css";
import tickImage from "../../../assets/Group.png";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function Complete({ open, handleClose }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="complete-container">
          <img src={tickImage} alt="tick" className="complete-image" />
            <Typography id="transition-modal-title" variant="h6" component="h2" className='heading-complete'>
              CONGRATULATIONS !
            </Typography>
            <Typography className='p-complete' id="transition-modal-description" sx={{ mt: 2 }}>
              The movie has been added to database successfully
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
